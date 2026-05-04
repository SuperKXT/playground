import { expect, expectTypeOf, test } from "vitest";

import { maxPatternCopies } from "./max-pattern-copies.js";

test("testing maxPatternCopies against test 1", () => {
	const result = maxPatternCopies("abcabc???", "ac");
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing maxPatternCopies against test 2", () => {
	const result = maxPatternCopies("aab??", "aab");
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing maxPatternCopies against test 3", () => {
	const result = maxPatternCopies("??????", "abc");
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
