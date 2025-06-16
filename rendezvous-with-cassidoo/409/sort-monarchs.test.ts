import { assertType, expect, test } from "vitest";

import { sortMonarchs } from "./sort-monarchs.js";

test("testing sortMonarchs against test 1", () => {
	const result = sortMonarchs([
		"Louis IX",
		"Louis VIII",
		"Philip II",
		"Philip I",
	]);
	const expected = ["Louis VIII", "Louis IX", "Philip I", "Philip II"];
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});

test("testing sortMonarchs against test 2", () => {
	const result = sortMonarchs([
		"George VI",
		"George V",
		"Elizabeth II",
		"Edward VIII",
	]);
	const expected = ["Edward VIII", "Elizabeth II", "George V", "George VI"];
	expect(result).toStrictEqual(expected);
	assertType<typeof expected>(result);
});
