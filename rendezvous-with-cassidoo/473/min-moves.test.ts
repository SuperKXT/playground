import { expect, expectTypeOf, test } from "vitest";

import { minMoves } from "./min-moves.js";

test("testing minMoves against test 1", () => {
	const result = minMoves("8051", "1199");
	const expected = 10 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

test("testing minMoves against test 2", () => {
	const result = minMoves("000", "555");
	const expected = 15 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});

test("testing minMoves against test 3", () => {
	const result = minMoves("109", "990");
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});
