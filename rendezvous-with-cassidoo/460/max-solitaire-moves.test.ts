import { expect, expectTypeOf, test } from "vitest";

import { maxSolitaireMoves } from "./max-solitaire-moves.js";

test("testing maxSolitaireMoves against test 1", () => {
	const result = maxSolitaireMoves([
		{ rank: 7, color: "black" },
		{ rank: 6, color: "red" },
		{ rank: 5, color: "black" },
		{ rank: 9, color: "red" },
	]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing maxSolitaireMoves against test 2", () => {
	const result = maxSolitaireMoves([
		{ rank: 8, color: "black" },
		{ rank: 7, color: "red" },
		{ rank: 6, color: "red" },
		{ rank: 5, color: "black" },
	]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
