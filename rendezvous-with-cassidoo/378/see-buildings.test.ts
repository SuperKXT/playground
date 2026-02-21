import { expect, expectTypeOf, test } from "vitest";

import { seeBuildings } from "./see-buildings.js";

test("testing seeBuildings 1", () => {
	const result = seeBuildings([1, 2, 3, 4, 5]);
	const expected = 5 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing seeBuildings 2", () => {
	const result = seeBuildings([5, 1, 2, 3, 4]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing seeBuildings 3", () => {
	const result = seeBuildings([3, 7, 8, 3, 6, 1]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
