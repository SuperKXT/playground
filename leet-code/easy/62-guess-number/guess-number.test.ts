import { expect, expectTypeOf, test } from "vitest";

import { guessNumber } from "./guess-number.js";

test("testing guessNumber for test 1", () => {
	const result = guessNumber(10, (n) => 6 - n);
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing guessNumber for test 2", () => {
	const result = guessNumber(1, (n) => 1 - n);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing guessNumber for test 3", () => {
	const result = guessNumber(2, (n) => 1 - n);
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
