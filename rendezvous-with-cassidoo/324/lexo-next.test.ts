import { expect, expectTypeOf, test } from "vitest";

import { lexoNext } from "./lexo-next.js";

test("testing lexoNext against test 1", () => {
	const result = lexoNext(123);
	const expected = 132 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lexoNext against test 2", () => {
	const result = lexoNext(314159);
	const expected = 314195 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing lexoNext against test 3", () => {
	const result = lexoNext(1111);
	const expected = 1111 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
