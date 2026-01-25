import { assertType, expect, test } from "vitest";

import { konamiMapping } from "./konami-mapping.js";

import type { Utils } from "../../types/utils.types.js";

test("testing konamiMapping against test 1", () => {
	const result = konamiMapping("xx2233454590yy11110");
	const expected = {
		"2": "U",
		"3": "D",
		"4": "L",
		"5": "R",
		"9": "B",
		"0": "A",
	} as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMapping against test 2", () => {
	const result = konamiMapping("sduwahoda22ii0d0dbn"); // cSpell: disable-line
	const expected = {
		"2": "U",
		i: "D",
		"0": "L",
		d: "R",
		b: "B",
		n: "A",
	} as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
