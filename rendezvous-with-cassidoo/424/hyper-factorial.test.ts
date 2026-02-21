import { expect, expectTypeOf, test } from "vitest";

import { hyperFactorial } from "./hyper-factorial.js";

test("testing hyperFactorial against test 1", () => {
	const result = hyperFactorial(0);
	const expected = 1n as bigint;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kindOfNumber against test 2", () => {
	const result = hyperFactorial(2);
	const expected = 4n as bigint;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kindOfNumber against test 3", () => {
	const result = hyperFactorial(3);
	const expected = 108n as bigint;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing kindOfNumber against test 4", () => {
	const result = hyperFactorial(7);
	const expected = 3319766398771200000n as bigint;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
