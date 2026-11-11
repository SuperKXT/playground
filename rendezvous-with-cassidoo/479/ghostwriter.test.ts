import { expect, expectTypeOf, test } from "vitest";

import { ghostwriter } from "./ghostwriter.js";

test("testing ghostwriter against test 1", () => {
	const result = ghostwriter("ghost");
	const expected = "ghost";

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing ghostwriter against test 2", () => {
	const result = ghostwriter("a#~b");
	const expected = "b";

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing ghostwriter against test 3", () => {
	const result = ghostwriter("ab~c#");
	const expected = "abb";

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing ghostwriter against test 4", () => {
	const result = ghostwriter("BBB##O~");
	const expected = "BOO";

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
