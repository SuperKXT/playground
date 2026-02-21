import { expect, expectTypeOf, test } from "vitest";

import { nextGreaterElement } from "./next-greater-element-i.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing nextGreaterElement for test 1", () => {
	const result = nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
	const expected = [-1, 3, -1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing nextGreaterElement for test 2", () => {
	const result = nextGreaterElement([2, 4], [1, 2, 3, 4]);
	const expected = [3, -1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
