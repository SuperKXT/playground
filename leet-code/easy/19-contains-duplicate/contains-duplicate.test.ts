import { assertType, expect, test } from "vitest";

import { containsDuplicate } from "./contains-duplicate.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing mergeSortedArrays for test 1", () => {
	const result = containsDuplicate([1, 2, 3, 1]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing mergeSortedArrays for test 2", () => {
	const result = containsDuplicate([1, 2, 3, 4]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
