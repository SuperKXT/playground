import { expect, expectTypeOf, test } from "vitest";

import { nextGreatestLetter } from "./next-greatest-letter.js";

test("testing nextGreatestLetter for test 1", () => {
	const result = nextGreatestLetter(["c", "f", "j"], "a");
	const expected = "c" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nextGreatestLetter for test 2", () => {
	const result = nextGreatestLetter(["c", "f", "j"], "c");
	const expected = "f" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nextGreatestLetter for test 3", () => {
	const result = nextGreatestLetter(["x", "x", "y", "y"], "z");
	const expected = "x" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
