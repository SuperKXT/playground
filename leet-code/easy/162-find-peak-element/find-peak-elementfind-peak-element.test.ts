import { expect, test } from "vitest";

import { findPeakElement } from "./find-peak-element.js";

test("testing replaceElements for test 1", () => {
	const result = findPeakElement([1, 2, 3, 1]);
	expect(result).toBeOneOf([2]);
});

test("testing replaceElements for test 2", () => {
	const result = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
	expect(result).toStrictEqual([1, 5]);
});
