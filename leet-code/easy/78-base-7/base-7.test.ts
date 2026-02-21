import { expect, expectTypeOf, test } from "vitest";

import { base7 } from "./base-7.js";

test("testing base7 for test 1", () => {
	const result = base7(100);
	const expected = "202" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing base7 for test 2", () => {
	const result = base7(-7);
	const expected = "-10" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
