import { expect, expectTypeOf, test } from "vitest";

import { minutesUntilApocalypse } from "./minutes-until-apocalypse.js";

test("testing minutesUntilApocalypse against test 1", () => {
	const result = minutesUntilApocalypse([
		[2, 1, 1],
		[1, 1, 0],
		[0, 1, 1],
	]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing minutesUntilApocalypse against test 2", () => {
	const result = minutesUntilApocalypse([
		[2, 1, 1],
		[0, 1, 1],
		[1, 0, 1],
	]);
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
