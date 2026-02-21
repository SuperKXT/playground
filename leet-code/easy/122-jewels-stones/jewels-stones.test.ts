import { expect, expectTypeOf, test } from "vitest";

import { jewelsStones } from "./jewels-stones.js";

test("testing jewelsStones for test 1", () => {
	const result = jewelsStones("aA", "aAAbbbb"); // cSpell: disable-line
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing jewelsStones for test 2", () => {
	const result = jewelsStones("z", "ZZ"); // cSpell: disable-line
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
