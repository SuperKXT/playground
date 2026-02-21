import { expect, expectTypeOf, test } from "vitest";

import { powerOfFour } from "./power-of-four.js";

test("testing powerOfFour for test 1", () => {
	const result = powerOfFour(4);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing powerOfFour for test 2", () => {
	const result = powerOfFour(16);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing powerOfFour for test 3", () => {
	const result = powerOfFour(5);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing powerOfFour for test 4", () => {
	const result = powerOfFour(1);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing powerOfFour for test 5", () => {
	const result = powerOfFour(-1);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
