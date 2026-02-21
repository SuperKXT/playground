import { expect, expectTypeOf, test } from "vitest";

import { mostCommonWord } from "./most-common-word.js";

test("testing mostCommonWord for test 1", () => {
	const result = mostCommonWord(
		"Bob hit a ball, the hit BALL flew far after it was hit.",
		["hit"],
	);
	const expected = "ball" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing mostCommonWord for test 2", () => {
	const result = mostCommonWord("a.", []);
	const expected = "a" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing mostCommonWord for test 3", () => {
	const result = mostCommonWord("a b.b", []);
	const expected = "b" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing mostCommonWord for test 4", () => {
	const result = mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
	const expected = "ball" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
