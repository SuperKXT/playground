import { expect, test } from "vitest";

import { findPeakElement } from "./find-peak-element.js";

test("testing findPeakElement for test 1", () => {
	const result = findPeakElement([1, 2, 3, 1]);
	expect(result).toBeOneOf([2]);
});

test("testing findPeakElement for test 2", () => {
	const result = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
	expect(result).toBeOneOf([1, 5]);
});

test("testing findPeakElement for test 3", () => {
	const result = findPeakElement([1, 2, 1, 3, 1, 4, 5, 1, 3, 2]);
	expect(result).toBeOneOf([1, 3, 6, 8]);
});
