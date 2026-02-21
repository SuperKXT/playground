import { expect, expectTypeOf, test } from "vitest";

import { nonRepeat } from "./non-repeat.js";

test("testing nonRepeat against test 1", () => {
	const result = nonRepeat("candy canes do taste yummy");
	const expected = "u" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nonRepeat against test 2", () => {
	const result = nonRepeat("can can ");
	const expected = "" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
