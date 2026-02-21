import { expect, expectTypeOf, test } from "vitest";

import { cursorPosition } from "./cursor-position.js";

test("testing cursorPosition against test 1", () => {
	const result = cursorPosition(`Hello, world!\nhow are ya?`, "jlhll"); // @cSpell: disable-line;
	const expected = "w" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing cursorPosition against test 2", () => {
	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	const result = cursorPosition(`Hello, world!\n`, "jlhll"); // @cSpell: disable-line;
	const expected = undefined;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
