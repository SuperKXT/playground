import { assertType, expect, test } from "vitest";

import { nestArray } from "./nest-array.js";

import type { Utils } from "../../types/utils.types.js";

test("testing nestArray against test 1", () => {
	const result = nestArray([1, 2, 3, 4]);
	const expected = [1, [2, [3, [4]]]] as const;
	expect(result).toStrictEqual(expected);
	assertType<Utils.deepReadonly<typeof result>>(expected);
});

test("testing nestArray against test 2", () => {
	const result = nestArray([1]);
	const expected = [1] as const;
	expect(result).toStrictEqual(expected);
	assertType<Utils.deepReadonly<typeof result>>(expected);
});
