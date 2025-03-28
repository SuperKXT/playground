import { expect, test } from "vitest";

import { fromTo } from "./from-to.js";

type TTest = {
	min: number;
	max: number;
};

const TESTS: TTest[] = [
	{ max: 7, min: 5 },
	{ max: 10, min: 1 },
	{ max: 150, min: 100 },
	{ max: 11_000, min: 10_080 },
	{ max: 0, min: 1 },
];
test.each(TESTS)("testing fromTo", ({ min, max }) => {
	const generator = fromTo(min, max);
	for (let index = min; index <= max; index++) expect(index).toBe(generator());

	expect(generator()).toBeUndefined();
});
