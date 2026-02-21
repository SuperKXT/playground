import { expect, expectTypeOf, test } from "vitest";

import { findUnused } from "./squares.js";

import type { Utils } from "../../types/utils.types.js";

test("testing findUnused against test 1", () => {
	const result = findUnused(["a = 1", "b = a", "c = 2", "log(b)"]);
	const expected = ["c"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing findUnused against test 2", () => {
	const result = findUnused(["a = 1", "b = a", "c = 2", "log(c)"]);
	const expected = ["a", "b"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
