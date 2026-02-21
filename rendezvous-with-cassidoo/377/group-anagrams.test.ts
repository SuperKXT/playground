import { expect, expectTypeOf, test } from "vitest";

import { groupAnagrams } from "./group-anagrams.js";

import type { Utils } from "../../types/utils.types.js";

test("testing groupAnagrams 1", () => {
	const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
	const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing groupAnagrams 2", () => {
	const result = groupAnagrams(["vote", "please"]);
	const expected = [["vote"], ["please"]] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing groupAnagrams 3", () => {
	// cSpell: disable
	const result = groupAnagrams(["debitcard", "badcredit"]);
	const expected = [["debitcard", "badcredit"]] as const;

	// cSpell: enable
	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
