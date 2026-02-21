import { expect, expectTypeOf, test } from "vitest";

import { shortestToChar } from "./shortest-to-character.js";

test("testing shortestToChar for test 1", () => {
	const result = shortestToChar("loveleetcode", "e"); // cSpell: disable-line
	const expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shortestToChar for test 2", () => {
	const result = shortestToChar("aaab", "b"); // cSpell: disable-line
	const expected = [3, 2, 1, 0];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
