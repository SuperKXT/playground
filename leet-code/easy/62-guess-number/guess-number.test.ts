import { assertType, expect, test } from "vitest";

import { guessNumber } from "./guess-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing guessNumber for test 1", () => {
	const result = guessNumber(10, (n) => 6 - n);
	const expected = 6 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing guessNumber for test 2", () => {
	const result = guessNumber(1, (n) => 1 - n);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing guessNumber for test 3", () => {
	const result = guessNumber(2, (n) => 1 - n);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
