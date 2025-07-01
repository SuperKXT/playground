import { assertType, expect, test } from "vitest";

import { nonRepeat } from "./non-repeat.js";

test("testing nonRepeat against test 1", () => {
	const result = nonRepeat("candy canes do taste yummy");
	const expected = "u";
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing nonRepeat against test 2", () => {
	const result = nonRepeat("can can ");
	const expected = "";
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});
