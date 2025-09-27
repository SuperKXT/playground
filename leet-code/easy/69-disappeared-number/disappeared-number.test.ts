import { assertType, expect, test } from "vitest";

import { disappearedNumbers } from "./disappeared-number.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing thirdMaxNumber for test 1", () => {
	const result = disappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
	const expected = [5, 6] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing thirdMaxNumber for test 2", () => {
	const result = disappearedNumbers([1, 1]);
	const expected = [2] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
