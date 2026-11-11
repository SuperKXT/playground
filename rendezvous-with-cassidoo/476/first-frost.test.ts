import { expect, expectTypeOf, test } from "vitest";

import { firstFrost } from "./first-frost.js";

test("testing firstFrost against test 1", () => {
	const result = firstFrost([70, 68, 72, 60, 65, 55], 5);
	const expected = [3, 2, 1, 2, 1, 0];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing firstFrost against test 2", () => {
	const result = firstFrost([50, 49, 48], 5);
	const expected = [0, 0, 0];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing firstFrost against test 3", () => {
	const result = firstFrost([40, 30, 45, 20], 10);
	const expected = [1, 2, 1, 0];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
