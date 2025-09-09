import { expect, test } from "vitest";

import { reverseArray } from "./reverse-array.js";

test("testing reverseArray for test 1", () => {
	const arr = ["h", "e", "l", "l", "o"];
	reverseArray(arr);
	const expected = ["o", "l", "l", "e", "h"];
	expect(arr).toStrictEqual(expected);
});

test("testing reverseArray for test 2", () => {
	const arr = ["H", "a", "n", "n", "a", "h"];
	reverseArray(arr);
	const expected = ["h", "a", "n", "n", "a", "H"];
	expect(arr).toStrictEqual(expected);
});
