import { expect, expectTypeOf, test } from "vitest";

import { isValidTrafficSequence } from "./traffic-sequence.js";

test("testing isValidTrafficSequence against test 1", () => {
	const result = isValidTrafficSequence([
		"red",
		"green",
		"yellow",
		"red",
		"green",
	]);
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing isValidTrafficSequence against test 2", () => {
	const result = isValidTrafficSequence(["red", "yellow", "green"]);
	const expected = false as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing isValidTrafficSequence against test 3", () => {
	const result = isValidTrafficSequence([]);
	const expected = true as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});
