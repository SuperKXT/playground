import { assertType, expect, test } from "vitest";

import { binaryPal } from "./binary-pal.js";

test("should check if the binary of given number is palindrome", () => {
	const response = binaryPal(5);

	expect(response).toBe(true);

	assertType<true>(response);

	const response2 = binaryPal(10);

	expect(response2).toBe(false);

	assertType<false>(response2);

	const response3 = binaryPal(23);

	expect(response3).toBe(false);

	assertType<false>(response3);

	const response4 = binaryPal(152);

	expect(response4).toBe(false);

	assertType<false>(response4);

	const response5 = binaryPal(-250);

	expect(response5).toBe(false);

	assertType<false>(response5);

	const response6 = binaryPal(513);

	expect(response6).toBe(true);

	assertType<true>(response6);

	const response7 = binaryPal(-513);

	expect(response7).toBe(true);

	assertType<true>(response7);
});
