import { assertType, expect, test } from "vitest";

import { towerOfHanoi } from "./tower-of-hanoi.js";

import type { TStep } from "./tower-of-hanoi.js";

test("testing towerOfHanoi against test 1", () => {
	const result = towerOfHanoi(0);
	const expected: TStep[] = [];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing towerOfHanoi against test 2", () => {
	const result = towerOfHanoi(1);
	const expected: TStep[] = [["A", "B"]];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing compress against test 3", () => {
	const result = towerOfHanoi(2);
	const expected: TStep[] = [
		["A", "C"],
		["A", "B"],
		["C", "B"],
	];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing compress against test 4", () => {
	const result = towerOfHanoi(3);
	const expected: TStep[] = [
		["A", "B"],
		["A", "C"],
		["B", "C"],
		["A", "B"],
		["C", "A"],
		["C", "B"],
		["A", "B"],
	];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing compress against test 5", () => {
	const result = towerOfHanoi(5);
	const expected: TStep[] = [
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
	];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});
