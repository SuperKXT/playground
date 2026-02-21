import { expect, expectTypeOf, test } from "vitest";

import { maxScoreWithOneReset } from "./replace-repeats.js";

test("testing maxScoreWithOneReset against test 1", () => {
	const result = maxScoreWithOneReset([2, -1, 2, -5, 2, 2]);
	const expected: number = 4;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxScoreWithOneReset against test 2", () => {
	const result = maxScoreWithOneReset([4, -10, 3, 2, -1, 6]);
	const expected: number = 10;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxScoreWithOneReset against test 3", () => {
	const result = maxScoreWithOneReset([-50, -2, -3]);
	const expected: number = 0;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxScoreWithOneReset against test 4", () => {
	const result = maxScoreWithOneReset([-50, -2, 53, -3, -45, 102, -25, 48]);
	const expected: number = 130;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
