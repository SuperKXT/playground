import { assertType, expect, test } from "vitest";

import { largeGroupPositions } from "./large-group-positions.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing largeGroupPositions for test 1", () => {
	const result = largeGroupPositions("abbxxxxzzy"); // cSpell: disable-line
	const expected = [[3, 6]] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing largeGroupPositions for test 2", () => {
	const result = largeGroupPositions("abc"); // cSpell: disable-line
	const expected = [] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing largeGroupPositions for test 3", () => {
	const result = largeGroupPositions("abcdddeeeeaabbbcd"); // cSpell: disable-line
	const expected = [
		[3, 5],
		[6, 9],
		[12, 14],
	] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
