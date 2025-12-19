import { expect, test } from "vitest";

import { duplicateZeros } from "./duplicate-zeros.js";

test("testing duplicateZeros for test 1", () => {
	const arr = [1, 0, 2, 3, 0, 4, 5, 0];
	duplicateZeros(arr);
	const expected = [1, 0, 0, 2, 3, 0, 0, 4];
	expect(arr).toStrictEqual(expected);
});

test("testing duplicateZeros for test 2", () => {
	const arr = [1, 2, 3];
	duplicateZeros(arr);
	const expected = [1, 2, 3];
	expect(arr).toStrictEqual(expected);
});
