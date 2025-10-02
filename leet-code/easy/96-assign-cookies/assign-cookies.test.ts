import { assertType, expect, test } from "vitest";

import { assignCookies } from "./assign-cookies.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing assignCookies for test 1", () => {
	const result = assignCookies([1, 2, 3], [1, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing assignCookies for test 2", () => {
	const result = assignCookies([1, 2], [1, 2, 3]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing assignCookies for test 3", () => {
	const result = assignCookies([2, 2, 3], [1, 2, 3]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing assignCookies for test 4", () => {
	const result = assignCookies([10, 9, 8, 7], [5, 6, 7, 8]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing assignCookies for test 5", () => {
	const result = assignCookies([1, 2, 3], [1, 1]);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
