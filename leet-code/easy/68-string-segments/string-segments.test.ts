import { expect, expectTypeOf, test } from "vitest";

import { stringSegments } from "./string-segments.js";

test("testing thirdMaxNumber for test 1", () => {
	const result = stringSegments("Hello, my name is John");
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing thirdMaxNumber for test 2", () => {
	const result = stringSegments("Hello");
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing thirdMaxNumber for test 3", () => {
	const result = stringSegments("");
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
