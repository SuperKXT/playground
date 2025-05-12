import { assertType, expect, test } from "vitest";

import { addOperators } from "./add-operators.js";

test("testing addOperators against test 1", () => {
	const result = addOperators(123, 6);
	const expected = ["1*2*3", "1+2+3"];
	expect(result.sort()).toStrictEqual(expected.sort());
	assertType<Readonly<typeof result>>(expected);
});

test("testing addOperators against test 2", () => {
	const result = addOperators(3456237490, 9191);
	const expected = [] as string[];
	expect(result.sort()).toStrictEqual(expected.sort());
	assertType<Readonly<typeof result>>(expected);
});
