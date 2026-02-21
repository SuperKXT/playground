import { expect, expectTypeOf, test } from "vitest";

import { maxWords } from "./max-words.js";

test("testing maxWords for test 1", () => {
	const result = maxWords([
		"alice and bob love code",
		"i think so too",
		"this is great thanks very much",
	]);
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxWords for test 2", () => {
	const result = maxWords([
		"please wait",
		"continue to fight",
		"continue to win",
	]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
