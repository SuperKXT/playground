import { assertType, expect, test } from "vitest";

import { constructRectangle } from "./construct-rectangle.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing constructRectangle for test 1", () => {
	const result = constructRectangle(4);
	const expected = [2, 2] as [number, number];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing constructRectangle for test 2", () => {
	const result = constructRectangle(37);
	const expected = [37, 1] as [number, number];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing constructRectangle for test 3", () => {
	const result = constructRectangle(122122);
	const expected = [427, 286] as [number, number];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
