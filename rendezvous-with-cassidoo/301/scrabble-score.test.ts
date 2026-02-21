/** cSpell: disable */
import { expect, expectTypeOf, test } from "vitest";

import { scrabbleScore } from "./scrabble-score.js";

test("should test scrabbleScore", () => {
	const response1 = scrabbleScore("FIZZBUZZ");

	expect(response1).toBe(49);

	expectTypeOf(response1).toEqualTypeOf<49>();

	const response2 = scrabbleScore("EDBFKJQ");

	expect(response2).toBe(33);

	expectTypeOf(response2).toEqualTypeOf<33>();
});
