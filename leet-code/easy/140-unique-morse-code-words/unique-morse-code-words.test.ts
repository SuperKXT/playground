import { expect, expectTypeOf, test } from "vitest";

import { uniqueMorseCodeWords } from "./unique-morse-code-words.js";

test("testing uniqueMorseCodeWords for test 1", () => {
	const result = uniqueMorseCodeWords(["gin", "zen", "gig", "msg"]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing uniqueMorseCodeWords for test 2", () => {
	const result = uniqueMorseCodeWords(["a"]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
