import { expect, expectTypeOf, test } from "vitest";

import { repeatedIntegers } from "./repeated-integers.js";

import type { Utils } from "../../types/utils.types.js";

test("testing repeatedIntegers against test 1", () => {
	const result = repeatedIntegers(4);
	const expected = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
