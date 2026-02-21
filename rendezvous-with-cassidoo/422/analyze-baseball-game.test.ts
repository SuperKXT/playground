import { expect, expectTypeOf, test } from "vitest";

import { analyzeBaseballGame } from "./analyze-baseball-game.js";

test("testing analyzeBaseballGame against test 1", () => {
	const result = analyzeBaseballGame([
		[1, 0],
		[2, 2],
		[0, 3],
		[4, 1],
	]);
	const expected: typeof result = {
		homeTotal: 7,
		awayTotal: 6,
		homeLedInnings: [1, 2, 4],
		awayLedInnings: [3],
		winner: "home",
	};

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
