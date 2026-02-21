import { expect, expectTypeOf, test } from "vitest";

import { summaryRanges } from "./summary-ranges.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing summaryRanges for test 1", () => {
	const result = summaryRanges([0, 1, 2, 4, 5, 7]);
	const expected = ["0->2", "4->5", "7"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing summaryRanges for test 2", () => {
	const result = summaryRanges([0, 2, 3, 4, 6, 8, 9]);
	const expected = ["0", "2->4", "6", "8->9"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
