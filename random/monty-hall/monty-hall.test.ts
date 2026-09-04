import { expect, test } from "vitest";

import { tryMontyHall } from "./monty-hall.js";

test("testing tryMontyHall", () => {
	const iterations = 10_000;
	const result = {
		100: tryMontyHall({ iterations, doors: 100 }),
		3: tryMontyHall({ iterations, doors: 3 }),
	};
	const percentages = {
		100: {
			stay: (result[100].stay / iterations) * 100,
			change: (result[100].change / iterations) * 100,
		},
		3: {
			stay: (result[3].stay / iterations) * 100,
			change: (result[3].change / iterations) * 100,
		},
	};

	// these come out of 10_000 random games, so they land near the theoretical
	// odds rather than exactly on them - the tolerances below are wide enough
	// that ordinary sampling noise cannot fail the test
	expect(percentages[100].stay).toBeCloseTo(1, 0);
	expect(percentages[100].change).toBeCloseTo(99, 0);
	expect(percentages[3].stay).toBeCloseTo(33.3, -1);
	expect(percentages[3].change).toBeCloseTo(66.7, -1);
});
