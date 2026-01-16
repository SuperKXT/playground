import type { Utils } from "../types/utils.types.js";

export const areArraysEqual = <Type extends unknown[]>(
	first: Type,
	second: Type,
): boolean => {
	if (first.length !== second.length) return false;

	for (let index = 0; index < first.length; index++)
		if (first[index] !== second[index]) return false;

	return true;
};

export const getObjectHash = (item: unknown): string => {
	return typeof item === "object" ? JSON.stringify(item) : String(item);
};

export const getUniqueArray = <T>(array: T[]): T[] => {
	const res: T[] = [];
	const set = new Set<string>();

	for (const item of array) {
		const itemHash = getObjectHash(item);
		if (set.has(itemHash)) continue;
		set.add(itemHash);
		res.push(item);
	}

	return res;
};

export const groupArrayBy = <
	Obj extends object,
	const GroupBy extends Utils.keysOfType<
		Obj,
		string | number | boolean | null | undefined
	>,
>(
	arr: Obj[],
	...groupBy: [GroupBy, ...GroupBy[]]
) => {
	type TKey = Utils.isUnion<GroupBy> extends false ? Obj[GroupBy] : string;
	const grouped = new Map<TKey, Obj[]>();
	for (const item of arr) {
		const key =
			groupBy.length === 1
				? item[groupBy[0]]
				: groupBy.map((k) => item[k]).join("-");
		const existing = grouped.get(key as never);
		if (!existing) grouped.set(key as never, [item]);
		else existing.push(item);
	}
	return grouped;
};

export const compareValuesForSorting = (a: unknown, b: unknown): number => {
	if (typeof a === "number" && typeof b === "number") return a - b;

	if (a === undefined || a === null) {
		if (b !== undefined && b !== null) return -1;
		return 0;
	}
	if (b === undefined || b === null) {
		return 1;
	}

	const aStr = typeof a === "object" ? JSON.stringify(a) : String(a);
	const bStr = typeof b === "object" ? JSON.stringify(b) : String(b);

	return aStr.localeCompare(bStr);
};

export type TSortArrayByOpt<Obj extends object> =
	| keyof Obj
	| ((row: Obj) => string | number);

export const sortArrayBy = <Obj extends object>(
	arr: Obj[],
	sortBy: Array<TSortArrayByOpt<Obj>>,
): Obj[] => {
	return arr.sort((a, b) => {
		for (const col of sortBy) {
			const aVal = typeof col === "function" ? col(a) : a[col];
			const bVal = typeof col === "function" ? col(b) : b[col];
			const diff = compareValuesForSorting(aVal, bVal);
			if (diff === 0) continue;
			return diff;
		}
		return 0;
	});
};

export function isMinArrayLength<T, Length extends number>(
	arr: T[],
	length: Length,
): arr is Utils.atLeast<T, Length> {
	return arr.length >= length;
}

export function isNonEmptyArray<T>(arr: T[]): arr is [T, ...T[]] {
	return arr.length > 0;
}

export function assertMinArrayLength<T, Length extends number>(
	arr: T[],
	length: Length,
	error?: string | (() => Error),
): asserts arr is Utils.atLeast<T, Length> {
	if (arr.length >= length) return;
	throw typeof error === "function"
		? error()
		: new Error(
				error ??
					`Expected Minimum Array Length: ${length}, Actual: ${arr.length}`,
			);
}

export function assertNonEmptyArray<T>(
	arr: T[],
	error: string | (() => Error) = "Array is empty!",
): asserts arr is [T, ...T[]] {
	assertMinArrayLength(arr, 1, error);
}

export function isArrayLength<T, Length extends number>(
	arr: T[],
	length: Length,
): arr is Utils.tuple<Length, T> {
	return arr.length === length;
}

export function assertArrayLength<T, Length extends number>(
	arr: T[],
	length: Length,
	error?: string | (() => Error),
): asserts arr is Utils.tuple<Length, T> {
	if (arr.length === length) return;
	throw typeof error === "function"
		? error()
		: new Error(
				error ?? `Expected Array Length: ${length}, Actual: ${arr.length}`,
			);
}

export function range(start: number, end: number) {
	const length = end - start + 1;
	return Array.from({ length }, (_, i) => start + i);
}

/** Insert the value into the sorted array in place */
export const inPlaceInsertToSortedArray = <T>(
	arr: T[],
	value: NoInfer<T>,
	sortFunc: (a: NoInfer<T>, b: NoInfer<T>) => number = compareValuesForSorting,
): void => {
	let low = 0;
	let high = arr.length - 1;
	let idx = 0;
	while (true) {
		if (low >= high) {
			idx = high;
			break;
		}
		const mid = Math.floor((low + high) / 2);
		const midVal = arr[mid] as T;
		const diff = sortFunc(midVal, value);
		if (diff === 0) {
			idx = mid;
			break;
		} else if (diff < 0) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	arr.splice(
		idx < 0 || idx >= arr.length || sortFunc(arr[idx] as T, value) > 0
			? Math.max(idx, 0)
			: idx + 1,
		0,
		value,
	);
};

/** Filter the array in place and return the number of removed items */
export const filterInPlace = <T>(
	array: T[],
	check: (row: NoInfer<T>) => boolean,
): number => {
	let removed = 0;
	for (let i = 0; i < array.length; i++) {
		const shouldKeep = check(array[i] as T);
		if (shouldKeep) continue;
		removed++;
		array.splice(i, 1);
		i -= 1;
	}
	return removed;
};

type TRemoveAfter<Arr extends readonly unknown[], T> = Arr extends readonly [
	...infer Rest,
	infer Last,
]
	? Last extends T
		? Arr
		: TRemoveAfter<Rest, T>
	: [];

type TRemoveBefore<Arr extends readonly unknown[], T> = Arr extends readonly [
	infer First,
	...infer Rest,
]
	? First extends T
		? Arr
		: TRemoveBefore<Rest, T>
	: [];

type TRemoveDirection = "after" | "before";

export type TSubTuple<
	Arr extends readonly unknown[],
	Element extends Arr[number],
	Direction extends TRemoveDirection,
> = Direction extends "after"
	? TRemoveBefore<Arr, Element>
	: TRemoveAfter<Arr, Element>;

export const getSubTuple = <
	const Arr extends readonly unknown[],
	const Element extends Arr[number],
	Direction extends TRemoveDirection,
>(
	tuple: Arr,
	element: Element,
	direction: Direction,
): Readonly<TSubTuple<Arr, Element, Direction>> => {
	const index = tuple.indexOf(element);
	return (
		direction === "after" ? tuple.slice(index) : tuple.slice(0, index + 1)
	) as never;
};
