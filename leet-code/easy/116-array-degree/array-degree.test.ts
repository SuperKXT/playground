import { assertType, expect, test } from "vitest";

import { arrayDegree } from "./array-degree.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing arrayDegree for test 1", () => {
	const result = arrayDegree([1, 2, 2, 3, 1]);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing arrayDegree for test 2", () => {
	const result = arrayDegree([1, 2, 2, 3, 1, 4, 2]);
	const expected = 6 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
