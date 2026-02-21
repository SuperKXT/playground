import { expect, expectTypeOf, test } from "vitest";

import { oddSum } from "./odd-sum.js";

import type { Utils } from "../../types/utils.types.js";

test("testing addOperators against test 1", () => {
	const result = oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20]);
	const expected = [
		[9, 8],
		[14, 7],
		[11, 4],
	] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing addOperators against test 2", () => {
	const result = oddSum([2, 4, 6, 8], [10, 12, 14]);
	const expected = [] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
