import { expect, expectTypeOf, test } from "vitest";

import { arrayIntersection } from "./array-intersection.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing arrayIntersection for test 1", () => {
	const result = arrayIntersection([1, 2, 2, 1], [2, 2]);
	const expected = [2] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing arrayIntersection for test 2", () => {
	const result = arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4]);
	const expected = [9, 4] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
