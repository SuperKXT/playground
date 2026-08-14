import { expect, expectTypeOf, test } from "vitest";

import { trim } from "./trim.js";

test("testing trim against test 1", () => {
	const result = trim("leading", "   hello world   ");
	const expected = "hello world   " as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing trim against test 2", () => {
	const result = trim("trailing", "   hello world   ");
	const expected = "   hello world" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing trim against test 3", () => {
	const result = trim("compress", "hello   world  !");
	const expected = "hello world !" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing trim against test 4", () => {
	const result = trim("compress", "  hi   there  ");
	const expected = " hi there " as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
