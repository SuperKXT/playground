import { expect, expectTypeOf, test } from "vitest";

import type { Utils } from "../../types/utils.types.js";

import { nestArray } from "./nest-array.js";

test("testing nestArray against test 1", () => {
	const result = nestArray([1, 2, 3, 4]);
	const expected = [1, [2, [3, [4]]]] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf<Utils.deepReadonly<typeof result>>();
});

test("testing nestArray against test 2", () => {
	const result = nestArray([1]);
	const expected = [1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf<Utils.deepReadonly<typeof result>>();
});
