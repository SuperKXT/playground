import { expect, expectTypeOf, test } from "vitest";

import { findPeakElement } from "./find-peak-element.js";

test("testing findPeakElement for test 1", () => {
	const result = findPeakElement([1, 2, 3, 1]);
	const expected = [2] as const;

	expect(result).toBeOneOf(expected as never);

	expectTypeOf(result).toEqualTypeOf<(typeof expected)[number]>();
});

test("testing findPeakElement for test 2", () => {
	const result = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
	const expected = [1, 5] as const;

	expect(result).toBeOneOf(expected as never);

	expectTypeOf(result).toEqualTypeOf<(typeof expected)[number]>();
});

test("testing findPeakElement for test 3", () => {
	const result = findPeakElement([1, 2, 1, 3, 1, 4, 5, 1, 3, 2]);
	const expected = [1, 3, 6, 8] as const;

	expect(result).toBeOneOf(expected as never);

	expectTypeOf(result).toEqualTypeOf<(typeof expected)[number]>();
});

test("testing findPeakElement for test 4", () => {
	const result = findPeakElement([1]);
	const expected = [0] as const;

	expect(result).toBeOneOf(expected as never);

	expectTypeOf(result).toEqualTypeOf<(typeof expected)[number]>();
});

test("testing findPeakElement for test 5", () => {
	const result = findPeakElement([3, 2, 1]);
	const expected = [0] as const;

	expect(result).toBeOneOf(expected as never);

	expectTypeOf(result).toEqualTypeOf<(typeof expected)[number]>();
});
