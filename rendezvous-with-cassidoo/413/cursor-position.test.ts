import { assertType, expect, test } from "vitest";

import { cursorPosition } from "./cursor-position.js";

import type { Utils } from "../../types/utils.types.js";

test("testing cursorPosition against test 1", () => {
	const result = cursorPosition(`Hello, world!\nhow are ya?`, "jlhll"); // @cSpell: disable-line;
	const expected = "w";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing cursorPosition against test 2", () => {
	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
	const result = cursorPosition(`Hello, world!\n`, "jlhll"); // @cSpell: disable-line;
	const expected = undefined;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
