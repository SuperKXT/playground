import { assertType, expect, test } from "vitest";

import { konamiMappingNonRegex, konamiMappingRegex } from "./konami-mapping.js";

import type { Utils } from "../../types/utils.types.js";

const tests = {
	first: {
		str: "xx2233454590yy11110",
		expected: {
			"2": "U",
			"3": "D",
			"4": "L",
			"5": "R",
			"9": "B",
			"0": "A",
		},
	},
	second: {
		str: "sduwahoda22ii0d0dbn", // cSpell: disable-line
		expected: {
			"2": "U",
			i: "D",
			"0": "L",
			d: "R",
			b: "B",
			n: "A",
		},
	},
} as const;

test("testing konamiMappingRegex against test 1", () => {
	const result = konamiMappingRegex(tests.first.str);
	const expected = tests.first.expected;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMappingRegex against test 2", () => {
	const result = konamiMappingRegex(tests.second.str); // cSpell: disable-line
	const expected = tests.second.expected;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMappingNonRegex against test 1", () => {
	const result = konamiMappingNonRegex(tests.first.str);
	const expected = tests.first.expected;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing konamiMappingNonRegex against test 2", () => {
	const result = konamiMappingNonRegex(tests.second.str); // cSpell: disable-line
	const expected = tests.second.expected;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
