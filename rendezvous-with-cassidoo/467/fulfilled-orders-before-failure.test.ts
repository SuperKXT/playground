import { expect, expectTypeOf, test } from "vitest";

import { fulfilledOrdersBeforeFailure } from "./fulfilled-orders-before-failure.js";

test("testing fulfilledOrdersBeforeFailure against test 1", () => {
	const result = fulfilledOrdersBeforeFailure(
		[["chocolate"], ["chocolate"], ["chocolate"]],
		{ chocolate: 2 },
	);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing fulfilledOrdersBeforeFailure against test 2", () => {
	const result = fulfilledOrdersBeforeFailure(
		[
			["vanilla", "vanilla"],
			["chocolate", "mint"],
			["strawberry"],
			["strawberry", "mint"],
		],
		{ vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 },
	);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing fulfilledOrdersBeforeFailure against test 3", () => {
	const result = fulfilledOrdersBeforeFailure([["rocky road"], ["vanilla"]], {
		vanilla: 3,
	});
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
