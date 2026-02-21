import { expect, expectTypeOf, test } from "vitest";

import { sortArrayByParity } from "./sort-array-by-parity.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing sortArrayByParity for test 1", () => {
	const result = sortArrayByParity([3, 1, 2, 4]);
	const expected = [4, 2, 3, 1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing sortArrayByParity for test 2", () => {
	const result = sortArrayByParity([0]);
	const expected = [0] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
