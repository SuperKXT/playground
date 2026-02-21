import { expect, expectTypeOf, test } from "vitest";

import { squares } from "./squares.js";

test("testing squares against test 1", () => {
	const result = squares(5); // cSpell: disable-line
	const expected = 55 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing squares against test 2", () => {
	const result = squares(10); // cSpell: disable-line
	const expected = 385 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing squares against test 3", () => {
	const result = squares(25); // cSpell: disable-line
	const expected = 5525 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});

test("testing squares against test 4", () => {
	const result = squares(100); // cSpell: disable-line
	const expected = 338350 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(result);
});
