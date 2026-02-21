import { assertType, expect, test } from "vitest";

import { zoom } from "./zoom.js";

import type { Utils } from "../../types/utils.types.js";

test("testing zoom against test 1", () => {
	const result = zoom(
		[
			[1, 2],
			[3, 4],
		],
		2,
	);
	const expected = [
		[1, 1, 2, 2],
		[1, 1, 2, 2],
		[3, 3, 4, 4],
		[3, 3, 4, 4],
	] as const;

	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing zoom against test 2", () => {
	const result = zoom([[7, 8, 9]], 3);
	const expected = [
		[7, 7, 7, 8, 8, 8, 9, 9, 9],
		[7, 7, 7, 8, 8, 8, 9, 9, 9],
		[7, 7, 7, 8, 8, 8, 9, 9, 9],
	] as const;

	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing zoom against test 3", () => {
	const result = zoom([[1], [2]], 3);
	const expected = [
		[1, 1, 1],
		[1, 1, 1],
		[1, 1, 1],
		[2, 2, 2],
		[2, 2, 2],
		[2, 2, 2],
	] as const;

	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing zoom against test 4", () => {
	const result = zoom([[1, 2], [2]], 3);
	const expected = [
		[1, 1, 1, 2, 2, 2],
		[1, 1, 1, 2, 2, 2],
		[1, 1, 1, 2, 2, 2],
		[2, 2, 2],
		[2, 2, 2],
		[2, 2, 2],
	] as const;

	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
