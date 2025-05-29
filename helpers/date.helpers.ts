// eslint-disable-next-line no-restricted-imports
import { default as dayjs } from "dayjs";
import duration from "dayjs/plugin/duration.js";
import utc from "dayjs/plugin/utc.js";
import { z } from "zod/v4";

import { safeObjAccess } from "./object.helpers.js";
import { pluralize } from "./pluralize.helpers.js";

import type { Dayjs } from "dayjs";
import type { Utils } from "../types/utils.types.js";

dayjs.extend(utc);
dayjs.extend(duration);

export const dayjsUtc = dayjs;

export const dayjsSchema = z.instanceof(
	dayjsUtc as unknown as typeof dayjsUtc.Dayjs,
	{ message: "Invalid Date" },
);

export type TZodDayjs = typeof dayjsSchema;

export const datetimeSchema = z.preprocess((value) => {
	if (dayjsUtc.isDayjs(value)) return value.isValid() ? value.utc() : null;
	if (value === undefined || value === null) return null;
	const parsed = dayjsUtc.utc(value as never);
	return parsed.isValid() ? parsed.utc() : null;
}, dayjsSchema);

export type TZodDatetime = typeof datetimeSchema;

export type TDateLike = string | number | Dayjs | Date;

export const dayMinutesSchema = z.number().int().min(0).max(1440);

export const isDate = (value: unknown): value is TDateLike => {
	return datetimeSchema.safeParse(value).success;
};

export const getDateOrNull = (value: unknown): null | Date => {
	const parsed = datetimeSchema.safeParse(value);
	if (!parsed.success) return null;
	return parsed.data.toDate();
};

export const compareDate = (first: TDateLike, second: TDateLike): number => {
	return dayjsUtc.utc(first).diff(second);
};

export const dateFormats = {
	date: "YYYY-MM-DD",
	time: "h:mm:ss A",
	datetime: "YYYY-MM-DD h:mm A",
} as const;

const utcOffset = dayjsUtc().utcOffset();

export const stringifyDate = (
	date: Dayjs | undefined | null,
	format: keyof typeof dateFormats,
	localTime?: boolean,
): string => {
	if (!date) return "";
	const curr = localTime ? date.utc().add(utcOffset, "minutes") : date;
	return curr.format(dateFormats[format]);
};

export const getRelativeTime = (date: Dayjs): string => {
	const diff = dayjsUtc.utc().diff(date);
	const d = dayjsUtc.duration(Math.abs(diff));
	const years = d.years();
	const months = d.months();
	const days = d.days();
	const hours = d.hours();
	const minutes = d.minutes();
	const pieces: string[] = [];
	if (years) pieces.push(pluralize`${years} Year[|s]`);
	if (months) pieces.push(pluralize`${months} Month[|s]`);
	if (days) pieces.push(pluralize`${days} Day[|s]`);
	if (hours) pieces.push(pluralize`${hours} Hr[|s]`);
	if (minutes || !pieces.length) pieces.push(pluralize`${minutes} Min[|s]`);
	return `${pieces.join(", ")} ${diff < 0 ? "From Now" : "Ago"}`;
};

export const dayNames = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
] as const;

export type TDayName = (typeof dayNames)[number];

export class DateRange<
	Start extends string = "start",
	End extends string = "end",
	Range extends Utils.prettify<
		Record<Start, Dayjs> & Record<End, Dayjs>
	> = Utils.prettify<Record<Start, Dayjs> & Record<End, Dayjs>>,
> {
	constructor(
		private start: Start = "start" as Start,
		private end: End = "end" as End,
		private includeEdges: boolean = true,
	) {}

	forEach(range: Range, callback: (date: Dayjs) => void): void {
		const { start, end } = this.validate(range);
		for (let d = start; !d.isAfter(end); d = d.add(1, "day")) callback(d);
	}

	map<Return>(range: Range, callback: (date: Dayjs) => Return): Return[] {
		const data: Return[] = [];
		const { start, end } = this.validate(range);
		for (let d = start; !d.isAfter(end); d = d.add(1, "day")) {
			data.push(callback(d));
		}
		return data;
	}

	dates(range: Range): Dayjs[] {
		return this.map(range, (d) => d);
	}

	private validate(range: object): { start: Dayjs; end: Dayjs } {
		const s = safeObjAccess(range, this.start);
		const e = safeObjAccess(range, this.end);
		if (!dayjsUtc.isDayjs(s) || !dayjsUtc.isDayjs(e))
			throw new Error("invalid date range");
		if (!s.isValid()) throw new Error("invalid start date");
		if (!e.isValid()) throw new Error("invalid end date");
		return {
			start: this.includeEdges ? s : s.add(1, "day"),
			end: this.includeEdges ? e : e.add(1, "day"),
		};
	}
}

export class TimeRange<
	Start extends string,
	End extends string,
	Range extends Record<Start, Dayjs> & Record<End, Dayjs>,
> {
	private EOD = 1440;

	constructor(
		private start: Start,
		private end: End,
		private includeEdges: boolean = false,
	) {}

	hasRange<T extends object>(
		input: T,
	): input is {
		[k in keyof T]: k extends Start | End ? T[k] & Dayjs : T[k];
	} {
		const start = safeObjAccess(input, this.start);
		const end = safeObjAccess(input, this.end);
		return (
			dayjsUtc.isDayjs(start) &&
			start.isValid() &&
			dayjsUtc.isDayjs(end) &&
			end.isValid()
		);
	}

	hasRangeArray<T extends object>(
		input: T[],
	): input is {
		[k in keyof T]: k extends Start | End ? T[k] & Dayjs : T[k];
	}[] {
		return input.every((row) => this.hasRange(row));
	}

	createMinuteArray(range: Range): number[] {
		const [startMins, endMins] = this.asMinutes(range);
		const minuteArr: number[] = [];
		let idx = startMins;
		while (true) {
			if (idx === this.EOD) idx = 0;
			minuteArr.push(idx);
			if (idx === endMins) break;
			idx++;
		}
		return minuteArr;
	}

	getMinutes(range: Range): number {
		const [startMins, endMins] = this.asMinutes(range);
		return (
			(endMins < startMins ? this.EOD : endMins) -
			startMins +
			(endMins < startMins ? endMins : 0)
		);
	}

	createMinuteMap(range: Range): Map<number, true> {
		const [startMins, endMins] = this.asMinutes(range);
		const map = new Map<number, true>();
		let idx = startMins;
		while (true) {
			if (idx === this.EOD) idx = 0;
			map.set(idx, true);
			if (idx === endMins) break;
			idx++;
		}
		return map;
	}

	doMinutesOverlap = (...ranges: Range[]): boolean => {
		const map = new Map<number, true>();
		for (const range of ranges) {
			const [startMins, endMins] = this.asMinutes(range);
			if (startMins === 0 && endMins === 0) continue;
			let idx = startMins;
			while (true) {
				if (idx === this.EOD) idx = 0;
				if (
					map.get(idx) &&
					(this.includeEdges || (idx !== startMins && idx !== endMins))
				)
					return true;
				map.set(idx, true);
				if (idx === endMins) break;
				idx++;
			}
		}
		return false;
	};

	areMinutesContained = (parent: Range, ...ranges: Range[]): boolean => {
		if (!ranges.length) return true;
		const map = this.createMinuteMap(parent);
		for (const range of ranges) {
			const [startMins, endMins] = this.asMinutes(range);
			let idx = startMins;
			while (true) {
				if (idx === this.EOD) idx = 0;
				if (!map.has(idx)) return false;

				if (idx === endMins) break;
				idx++;
			}
		}
		return true;
	};

	private asMinutes(inp: Range): [number, number] {
		const startMins = inp[this.start].hour() * 60 + inp[this.start].minute();
		const endMins = inp[this.end].hour() * 60 + inp[this.end].minute();
		return [startMins, endMins] as const;
	}
}
