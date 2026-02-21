import { expect, expectTypeOf, test } from "vitest";

import { permute } from "./permute.js";

test("testing permute", () => {
	const result = permute("abc");
	const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
