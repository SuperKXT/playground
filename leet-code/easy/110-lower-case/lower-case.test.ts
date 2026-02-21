import { expect, expectTypeOf, test } from "vitest";

import { lowerCase } from "./lower-case.js";

test("testing lowerCase for test 1", () => {
	const result = lowerCase("Hello");
	const expected = "hello" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lowerCase for test 2", () => {
	const result = lowerCase("here");
	const expected = "here" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lowerCase for test 3", () => {
	const result = lowerCase("LOVELY");
	const expected = "lovely" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
