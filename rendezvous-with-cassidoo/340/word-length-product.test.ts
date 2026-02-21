import { expect, expectTypeOf, test } from "vitest";

import { wordLengthProduct } from "./word-length-product.js";

test("testing wordLengthProduct against test 1", () => {
	const result = wordLengthProduct([
		"fish",
		"fear",
		"boo",
		"egg",
		"cake",
		"abcdef",
	]);
	const expected = 16 as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing wordLengthProduct against test 2", () => {
	const result = wordLengthProduct(["a", "aa", "aaa", "aaaa"]);
	const expected = 0 as const;

	expect(result).toBe(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
