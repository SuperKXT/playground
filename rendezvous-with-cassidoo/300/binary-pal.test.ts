import { expect, expectTypeOf, test } from "vitest";

import { binaryPal } from "./binary-pal.js";

test("should check if the binary of given number is palindrome", () => {
	const response = binaryPal(5);

	expect(response).toBe(true);

	expectTypeOf(response).toEqualTypeOf<true>();

	const response2 = binaryPal(10);

	expect(response2).toBe(false);

	expectTypeOf(response2).toEqualTypeOf<false>();

	const response3 = binaryPal(23);

	expect(response3).toBe(false);

	expectTypeOf(response3).toEqualTypeOf<false>();

	const response4 = binaryPal(152);

	expect(response4).toBe(false);

	expectTypeOf(response4).toEqualTypeOf<false>();

	const response5 = binaryPal(-250);

	expect(response5).toBe(false);

	expectTypeOf(response5).toEqualTypeOf<false>();

	const response6 = binaryPal(513);

	expect(response6).toBe(true);

	expectTypeOf(response6).toEqualTypeOf<true>();

	const response7 = binaryPal(-513);

	expect(response7).toBe(true);

	expectTypeOf(response7).toEqualTypeOf<true>();
});
