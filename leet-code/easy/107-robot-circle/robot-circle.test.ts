import { expect, expectTypeOf, test } from "vitest";

import { robotCircle } from "./robot-circle.js";

test("testing selfDividingNumbers for test 1", () => {
	const result = robotCircle("UD");
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing selfDividingNumbers for test 2", () => {
	const result = robotCircle("LL");
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
