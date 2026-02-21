import { expect, expectTypeOf, test } from "vitest";

import { availableNumbers } from "./available-numbers.js";

import type { Utils } from "../../types/utils.types.js";

test("testing availableNumbers against test 1", () => {
	const result = availableNumbers("QB", [1, 2, 3, 10, 19]);
	const expected = [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
