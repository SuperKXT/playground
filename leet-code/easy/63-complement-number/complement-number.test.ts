import { assertType, expect, test } from "vitest";

import { complementNumber } from "./complement-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing complementNumber for test 1", () => {
	const result = complementNumber(5);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing complementNumber for test 2", () => {
	const result = complementNumber(1);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
