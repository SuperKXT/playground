import { expect, test } from "vitest";

import { sortArrayByParityII } from "./sort-array-by-parity-ii.js";

test("testing sortArrayByParityII for test 1", () => {
	const result = sortArrayByParityII([4, 2, 5, 7]);
	const expectedSet = new Set(["4527", "4725", "2547", "2745"]);
	expect(result.join("")).toBeOneOf(expectedSet);
});

test("testing sortArrayByParityII for test 2", () => {
	const result = sortArrayByParityII([2, 3]);
	const expectedSet = new Set(["23"]);
	expect(result.join("")).toBeOneOf(expectedSet);
});
