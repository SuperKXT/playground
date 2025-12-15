import { assertType, expect, test } from "vitest";

import { latinSquare } from "./latin-square.js";

import type { Utils } from "../../types/utils.types.js";

test("testing latinSquare against test 1", () => {
	const result = latinSquare(1);
	const expected = [[1]] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing latinSquare against test 2", () => {
	const result = latinSquare(2);
	const expected = [
		[1, 2],
		[2, 1],
	] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing latinSquare against test 3", () => {
	const result = latinSquare(4);
	const expected = [
		[1, 2, 3, 4],
		[2, 3, 4, 1],
		[3, 4, 1, 2],
		[4, 1, 2, 3],
	] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
