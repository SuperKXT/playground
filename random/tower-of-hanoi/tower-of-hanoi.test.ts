import { assertType, expect, test } from "vitest";

import { towerOfHanoi } from "./tower-of-hanoi.js";

test("testing towerOfHanoi against test 1", () => {
	const result = towerOfHanoi(0);
	const expected = [] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof expected>>(result);
});

test("testing towerOfHanoi against test 2", () => {
	const result = towerOfHanoi(1);
	const expected = [["A", "B"]] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof expected>>(result);
});

test("testing compress against test 3", () => {
	const result = towerOfHanoi(2);
	const expected = [
		["A", "C"],
		["A", "B"],
		["C", "B"],
	] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof expected>>(result);
});

test("testing compress against test 4", () => {
	const result = towerOfHanoi(3);
	const expected = [
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["A", "B"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
	] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof expected>>(result);
});

test("testing compress against test 5", () => {
	const result = towerOfHanoi(5);
	const expected = [
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["A", "B"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["B", "A"],
		["C", "A"],
		["B", "C"],
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["A", "B"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
		["C", "A"],
		["B", "C"],
		["B", "A"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["A", "B"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
	] as const;

	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof expected>>(result);
});
