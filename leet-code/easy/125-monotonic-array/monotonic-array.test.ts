import { expect, expectTypeOf, test } from "vitest";

import { monotonicArray } from "./monotonic-array.js";

test("testing monotonicArray for test 1", () => {
	const result = monotonicArray([1, 2, 2, 3]);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing monotonicArray for test 2", () => {
	const result = monotonicArray([6, 5, 4, 4]);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing monotonicArray for test 3", () => {
	const result = monotonicArray([1, 3, 2]);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
