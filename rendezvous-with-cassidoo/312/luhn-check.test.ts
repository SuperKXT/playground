import { expect, expectTypeOf, test } from "vitest";

import { luhnCheck } from "./luh-check.js";

import type { Utils } from "../../types/utils.types.js";

test("testing luhnCheck against test 1", () => {
	const result = luhnCheck(123456789);
	const expected = { valid: false } as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing luhnCheck against test 2", () => {
	const result = luhnCheck(5555555555554444);
	const expected = { valid: true, brand: "Mastercard" } as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
