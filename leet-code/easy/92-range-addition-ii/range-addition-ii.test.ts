import { assertType, expect, test } from "vitest";

import { rangeAddition } from "./range-addition-ii.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing rangeAddition for test 1", () => {
	const result = rangeAddition(3, 3, [
		[2, 2],
		[3, 3],
	]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing rangeAddition for test 2", () => {
	const result = rangeAddition(3, 3, [
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
	]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing rangeAddition for test 3", () => {
	const result = rangeAddition(3, 3, []);
	const expected = 9 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
