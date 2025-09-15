import { assertType, expect, test } from "vitest";

import { analyzeBaseballGame } from "./analyze-baseball-game.js";

import type { Utils } from "../../types/utils.types.js";

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
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
