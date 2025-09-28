import { assertType, expect, test } from "vitest";

import { perfectSquare } from "./perfect-square.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing perfectSquare for test 1", () => {
	const result = perfectSquare(16);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing perfectSquare for test 2", () => {
	const result = perfectSquare(14);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
