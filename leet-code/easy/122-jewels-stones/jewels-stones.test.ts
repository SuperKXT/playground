import { assertType, expect, test } from "vitest";

import { jewelsStones } from "./jewels-stones.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing jewelsStones for test 1", () => {
	const result = jewelsStones("aA", "aAAbbbb"); // cSpell: disable-line
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing jewelsStones for test 2", () => {
	const result = jewelsStones("z", "ZZ"); // cSpell: disable-line
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
