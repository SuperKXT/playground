import { assertType, expect, test } from "vitest";

import {
	deepMerge,
	objectEntries,
	objectKeys,
	objectToFormData,
	objectToSearchParams,
	objectValues,
	omit,
	pick,
	pickAndOmit,
	searchParamsToObject,
	swapKeysAndValues,
} from "./object.helpers.js";

test("testing objectEntries", () => {
	const object = { first: 1, second: 2 } as const;
	const entries = objectEntries(object);
	expect(entries).toStrictEqual([
		["first", 1],
		["second", 2],
	]);
	assertType<["first" | "second", 1 | 2][]>(entries);
});

test("testing objectKeys", () => {
	const object = { first: 1, second: 2 } as const;
	const keys = objectKeys(object);
	expect(keys).toStrictEqual(["first", "second"]);
	assertType<("first" | "second")[]>(keys);
});

test("testing objectValues", () => {
	const object = { first: 1, second: 2 } as const;
	const values = objectValues(object);
	expect(values).toStrictEqual([1, 2]);
	assertType<(1 | 2)[]>(values);
});

test("testing omit", () => {
	const omitted1 = { first: 1 } as { first: 1 } | { zero: 0 };
	const object1 = { ...omitted1, second: 2, third: 3 };
	const result1 = omit(object1, "second", "third");
	expect(result1).toStrictEqual(omitted1);
	assertType<typeof omitted1>(result1);

	const omitted2 = { first: 1 } as { first: 1 } | { zero: 0 };
	const object2 = { ...omitted2, second: 2 };
	const result2 = omit(object2, "second");
	expect(result2).toStrictEqual(omitted2);
	assertType<typeof omitted2>(result2);
});

test("testing pick", () => {
	const picked1 = { a: 1 };
	const object1 = { ...picked1, b: 2 } as typeof picked1 &
		({ b: 2 } | { c: 3 });
	const result1 = pick(object1, "a");
	expect(result1).toStrictEqual(picked1);
	assertType<typeof picked1>(result1);

	const picked2 = { a: 1, b: 2 };
	const object2 = { ...picked2, c: 3 };
	const result2 = pick(object2, "a", "b");
	expect(result2).toStrictEqual(picked2);
	assertType<typeof picked2>(result2);
});

test("testing pickAndOmit", () => {
	const picked1 = { a: 1 };
	const omitted1 = { b: 2 } as { b: 2 } | { c: 3 };
	const expected1 = { picked: picked1, omitted: omitted1 };
	const object1 = { ...picked1, ...omitted1 };
	const result1 = pickAndOmit({
		obj: object1,
		method: "pick",
		keys: ["a"],
	});
	expect(result1).toStrictEqual(expected1);
	assertType<typeof result1>(expected1);

	const picked2 = { a: 1 };
	const omitted2 = { b: 2, c: 3 };
	const expected2 = { picked: picked2, omitted: omitted2 };
	const object2 = { ...picked2, ...omitted2 };
	const result2 = pickAndOmit({
		obj: object2,
		method: "omit",
		keys: ["b", "c"],
	});
	expect(result2).toStrictEqual(expected2);
	assertType<typeof result2>(expected2);
});

test("testing deepMerge", () => {
	const first = { a: 1, b: "old", nested: { d: 1, e: "old" } } as const;
	const second = { b: "new", c: 3, nested: { e: "new", f: 3 } } as const;
	const merged = {
		a: 1 as const,
		b: "new" as const,
		c: 3 as const,
		nested: { d: 1 as const, e: "new" as const, f: 3 as const },
	};
	const result = deepMerge(first, second);
	expect(result).toStrictEqual(merged);
	assertType<typeof merged>(result);
});

test("testing objectToFormData", () => {
	const first = { a: 1, b: "old", nested: { d: 1, e: "old" } };
	expect(() => {
		objectToFormData(first);
	}).toThrow(`invalid value for 'nested': form data does not allow 'object'`);
	const second = { b: "new", c: 3, d: true };
	const result = objectToFormData(second);
	assertType<FormData>(result);
	expect(result.get("b")).toBe("new");
	expect(result.get("c")).toBe("3");
	expect(result.get("d")).toBe("true");
});

test("testing searchParamsToObject", () => {
	const val1 = "AppName://redirect/subpart/?token=123&refreshToken=123&other";
	const result1 = searchParamsToObject(val1);
	assertType<Record<string, string>>(result1);
	expect(result1).toStrictEqual({
		token: "123",
		refreshToken: "123",
		other: "",
	});

	const val2 = "AppName://redirect/subpart/?";
	const result2 = searchParamsToObject(val2);
	assertType<Record<string, string>>(result2);
	expect(result2).toStrictEqual({});

	const val3 = "foo=";
	const result3 = searchParamsToObject(val3);
	assertType<Record<string, string>>(result3);
	expect(result3).toStrictEqual({ foo: "" });
});

test("testing objectToSearchParams", () => {
	const val1 = { a: "1", b: "old", c: "3", d: "new", e: null, f: undefined };
	const result1 = objectToSearchParams(val1);
	assertType<string>(result1);
	expect(result1).toBe("a=1&b=old&c=3&d=new");

	const val2 = {};
	const result2 = objectToSearchParams(val2);
	assertType<string>(result2);
	expect(result2).toBe("");
});

test("testing swapKeysAndValues", () => {
	const val = { a: "1", b: "old", c: "3", d: "new" } as const;
	const result = swapKeysAndValues(val);
	const expected = { "1": "a", old: "b", "3": "c", new: "d" } as const;
	assertType<typeof expected>(result);
	expect(result).toStrictEqual(expected);
});
