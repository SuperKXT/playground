import { assertType, expect, test } from "vitest";

import { powerOfThree } from "./power-of-three.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing powerOfThree for test 1", () => {
	const result = powerOfThree(8);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfThree for test 2", () => {
	const result = powerOfThree(9);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfThree for test 3", () => {
	const result = powerOfThree(27);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfThree for test 4", () => {
	const result = powerOfThree(0);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfThree for test 5", () => {
	const result = powerOfThree(-1);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
