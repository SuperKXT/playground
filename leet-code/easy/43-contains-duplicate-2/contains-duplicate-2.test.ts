import { assertType, expect, test } from "vitest";

import { containsDuplicate } from "./contains-duplicate-2.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing containsDuplicate for test 1", () => {
	const result = containsDuplicate([1, 2, 3, 1], 3);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing containsDuplicate for test 2", () => {
	const result = containsDuplicate([1, 0, 1, 1], 1);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing containsDuplicate for test 3", () => {
	const result = containsDuplicate([1, 2, 3, 1, 2, 3], 2);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing containsDuplicate for test 4", () => {
	const result = containsDuplicate([99, 99], 2);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
