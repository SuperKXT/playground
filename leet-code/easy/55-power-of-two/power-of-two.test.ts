import { assertType, expect, test } from "vitest";

import { powerOfTwo } from "./power-of-two.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing powerOfTwo for test 1", () => {
	const result = powerOfTwo(8);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfTwo for test 2", () => {
	const result = powerOfTwo(1);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfTwo for test 3", () => {
	const result = powerOfTwo(16);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing powerOfTwo for test 4", () => {
	const result = powerOfTwo(3);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
