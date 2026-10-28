import { expect, expectTypeOf, test } from "vitest";

import { longestSorted } from "./longest-sorted.js";

test("testing longestSorted against test 1", () => {
	const result = longestSorted("The autumn leaves almost glow.");
	const expected = "almost";

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

test("testing longestSorted against test 2", () => {
	const result = longestSorted("A cool sheep sleeps.");
	const expected = "";

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});
