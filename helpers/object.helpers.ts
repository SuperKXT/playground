import { isObject, readableTypeOf } from "./type.helpers.js";

import type { Utils } from "../types/utils.types.js";

export const safeObjAccess = (obj: object, key: string): unknown => {
	if (readableTypeOf(obj) !== "object" || !(key in obj)) return undefined;
	return (obj as Record<string, unknown>)[key];
};

export const objectEntries = <T extends object>(
	object: T,
): [keyof T, T[keyof T]][] => {
	return Object.entries(object) as never;
};

export const objectKeys = <T extends object>(object: T): (keyof T)[] => {
	return Object.keys(object) as (keyof T)[];
};

export const objectValues = <T extends object>(object: T): T[keyof T][] => {
	return Object.values(object) as never;
};

export const omit = <Type extends object, ToOmit extends keyof Type>(
	obj: Type,
	first: ToOmit,
	...rest: ToOmit[]
): Utils.prettify<Utils.distributiveOmit<Type, ToOmit>> => {
	const keys = [first, ...rest];
	const omitted = {} as Record<string, unknown>;
	for (const key in obj) {
		if (!Object.hasOwn(obj, key) || keys.includes(key as never)) continue;
		omitted[key] = obj[key];
	}
	return omitted as Utils.prettify<Utils.distributiveOmit<Type, ToOmit>>;
};

export const pick = <Type extends object, ToPick extends keyof Type>(
	obj: Type,
	first: ToPick,
	...rest: ToPick[]
): Utils.prettify<Pick<Type, ToPick>> => {
	const picked = {} as Utils.prettify<Pick<Type, ToPick>>;
	const keys = [first, ...rest];
	for (const key of keys) {
		if (Object.hasOwn(obj, key)) picked[key] = obj[key];
	}
	return picked;
};

export const pickAndOmit = <
	Type extends object,
	Method extends "pick" | "omit",
	Keys extends keyof Type,
>(opts: {
	obj: Type;
	method: Method;
	keys: [Keys, ...Keys[]];
}): {
	picked: Utils.prettify<
		Method extends "pick"
			? Pick<Type, Keys>
			: Utils.distributiveOmit<Type, Keys>
	>;
	omitted: Utils.prettify<
		Method extends "pick"
			? Utils.distributiveOmit<Type, Keys>
			: Pick<Type, Keys>
	>;
} => {
	const { obj, method, keys } = opts;
	const picked = {} as Record<string, unknown>;
	const omitted = {} as Record<string, unknown>;
	for (const key in obj) {
		if (!Object.hasOwn(obj, key)) continue;
		const shouldPick =
			method === "pick"
				? keys.includes(key as never)
				: !keys.includes(key as never);
		if (shouldPick) picked[key] = obj[key];
		else omitted[key] = obj[key];
	}
	return { picked, omitted } as never;
};

export const deepMerge = <T extends object, U extends object>(
	first: T,
	second: U,
): Utils.deepMerge<T, U> => {
	const commonKeys = { ...first, ...second };
	const merged: Record<string, unknown> = {};
	for (const key of Object.keys(commonKeys)) {
		const firstCurr = first[key as never] as unknown;
		const secondCurr = second[key as never] as unknown;
		merged[key] =
			isObject(firstCurr) && isObject(secondCurr)
				? deepMerge(firstCurr, secondCurr)
				: (secondCurr ?? firstCurr);
	}
	return merged as never;
};

export const objectToFormData = (obj: object): FormData => {
	const formData = new FormData();
	for (const key in obj) {
		if (!Object.hasOwn(obj, key)) continue;
		const value = obj[key as never] as unknown;
		if (value instanceof File) {
			formData.append(key, value);
			continue;
		}
		const type = readableTypeOf(value);
		if (type === "array") {
			for (const item of value as unknown[]) {
				const itemType = readableTypeOf(item);
				if (["object", "array", "symbol", "function"].includes(itemType))
					throw new Error(
						`invalid value for '${key}': form data does not allow '${itemType}'`,
					);
				formData.append(key, String(item));
			}
		} else if (["object", "symbol", "function"].includes(type)) {
			throw new Error(
				`invalid value for '${key}': form data does not allow '${type}'`,
			);
		} else if (["undefined", "null"].includes(type)) continue;
		else formData.append(key, String(value));
	}
	return formData;
};

/** Useful for React Native. Use `URLSearchParams` in Node and Browser environments */
export const searchParamsToObject = (url: string) => {
	const param = url.replace(/[^?]*\?/u, "");
	const arr = param.split("&");
	const params: Record<string, string> = {};
	for (const curr of arr) {
		const [key, val] = curr.split("=");
		if (!key) continue;
		params[key] = val ?? "";
	}
	return params;
};

/** Useful for React Native. Use `URLSearchParams` in Node and Browser environments */
export const objectToSearchParams = (
	obj: Record<string, string | number | null | undefined>,
) => {
	const entries: string[] = [];
	for (const key in obj) {
		if (!Object.hasOwn(obj, key)) continue;
		const val = obj[key];
		if (val === null || val === undefined) continue;
		entries.push(`${encodeURIComponent(key)}=${encodeURIComponent(val)}`);
	}
	return entries.join("&");
};

export const swapKeysAndValues = <T extends Record<string, string>>(
	obj: T,
): { [k in keyof T as T[k]]: k } => {
	const res: Record<string, unknown> = {};
	for (const key in obj) {
		if (!Object.hasOwn(obj, key)) continue;
		const val = obj[key] as string;
		res[val] = key;
	}
	return res as never;
};
