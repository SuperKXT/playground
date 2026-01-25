import { assertType, expect, test } from "vitest";

import { konamiMapping } from "./konami-mapping.js";

import type { Utils } from "../../types/utils.types.js";

test("testing konamiMapping against test 1", () => {
	const result = konamiMapping("xx2233454590yy11110");
	const expected: Record<string, string> = {
		"0": "A",
		"2": "U",
		"3": "D",
		"4": "L",
		"5": "R",
		"9": "B",
	};
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMapping against test 2", () => {
	const result = konamiMapping("sduwahoda22ii0d0dbn"); // cSpell: disable-line
	const expected: Record<string, string> = {
		"0": "L",
		"2": "U",
		i: "D",
		d: "R",
		b: "B",
		n: "A",
	};
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
