import { assertType, expect, test } from "vitest";

import { nestArray } from "./nest-array.js";

test("testing nestArray against test 1", () => {
	const result = nestArray([1, 2, 3, 4]);
	const expected: unknown[] = [1, [2, [3, [4]]]];
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing nestArray against test 2", () => {
	const result = nestArray([1]);
	const expected: unknown[] = [1];
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});
