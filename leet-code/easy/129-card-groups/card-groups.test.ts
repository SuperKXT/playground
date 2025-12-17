import { assertType, expect, test } from "vitest";

import { cardGroups } from "./card-groups.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing cardGroups for test 1", () => {
	const result = cardGroups([1, 2, 3, 4, 4, 3, 2, 1]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing cardGroups for test 2", () => {
	const result = cardGroups([1, 1, 1, 2, 2, 2, 3, 3]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing cardGroups for test 3", () => {
	const result = cardGroups([1]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing cardGroups for test 4", () => {
	const result = cardGroups([1, 1, 2, 2, 2, 2]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing cardGroups for test 5", () => {
	const result = cardGroups([1, 1, 1, 1, 1, 0, 0, 0]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
