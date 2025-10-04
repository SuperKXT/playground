import { assertType, expect, test } from "vitest";

import { islandPerimeter } from "./island-perimeter.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing constructRectangle for test 1", () => {
	const result = islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	]);
	const expected = 16 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing constructRectangle for test 2", () => {
	const result = islandPerimeter([[1]]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing constructRectangle for test 3", () => {
	const result = islandPerimeter([[1, 0]]);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
