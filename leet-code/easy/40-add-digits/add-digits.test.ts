import { assertType, expect, test } from "vitest";

import { addDigits } from "./add-digits.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing addDigits for test 1", () => {
	const result = addDigits(38);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing addDigits for test 2", () => {
	const result = addDigits(0);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
