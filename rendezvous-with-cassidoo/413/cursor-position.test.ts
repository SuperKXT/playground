import { assertType, expect, test } from "vitest";

import { cursorPosition } from "./cursor-position.js";

test("testing nonRepeat against test 1", () => {
	const result = cursorPosition(`Hello, world!\nhow are ya?`, "jlhll"); // @cSpell: disable-line;
	const expected = "w" as string;
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});
