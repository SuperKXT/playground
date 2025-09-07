import { assertType, expect, test } from "vitest";

import { plusOne } from "./plus-one.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing plusOne for test 1", () => {
	const result = plusOne([1, 2, 3]);
	const expected = [1, 2, 4];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing plusOne for test 2", () => {
	const result = plusOne([4, 3, 2, 1]);
	const expected = [4, 3, 2, 2];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing plusOne for test 3", () => {
	const result = plusOne([9]);
	const expected = [1, 0];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing plusOne for test 4", () => {
	const result = plusOne([1, 0]);
	const expected = [1, 1];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing plusOne for test 5", () => {
	const result = plusOne([]);
	const expected = [1];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing plusOne for test 6", () => {
	const result = plusOne([0]);
	const expected = [1];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
