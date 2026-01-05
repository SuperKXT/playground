import { assertType, expect, test } from "vitest";

import { shortestToChar } from "./shortest-to-character.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing shortestToChar for test 1", () => {
	const result = shortestToChar("loveleetcode", "e"); // cSpell: disable-line
	const expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing shortestToChar for test 2", () => {
	const result = shortestToChar("aaab", "b"); // cSpell: disable-line
	const expected = [3, 2, 1, 0];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
