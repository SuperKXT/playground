import { assertType, expect, test } from "vitest";

import { canFormHexagon } from "./can-form-hexagon.js";

import type { Utils } from "../../types/utils.types.js";

test("testing canFormHexagon against test 1", () => {
	const result = canFormHexagon([2, 3, 8, 8, 2, 3]);
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing canFormHexagon against test 2", () => {
	const result = canFormHexagon([1, 2, 3, 4, 5, 6]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing canFormHexagon against test 3", () => {
	const result = canFormHexagon([2, 2, 2, 2, 2, 2, 2]);
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
