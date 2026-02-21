import { expect, expectTypeOf, test } from "vitest";

import { depthJson } from "./depth-json.js";

test("testing depthJson against test 1", () => {
	const response = depthJson([]);
	const expected = 1 as const;

	expect(response).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(response);
});

test("testing depthJson against test 2", () => {
	const response = depthJson([6, 2, 4, 3, 7, 1, 3]);
	const expected = 1 as const;

	expect(response).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(response);
});

test("testing depthJson against test 3", () => {
	const response = depthJson([
		{ a: [{ first: [2, [1]] }] },
		["abc", { first: [] }],
	]);
	const expected = 6 as const;

	expect(response).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(response);
});

test("testing depthJson against test 4", () => {
	const response = depthJson(undefined);
	const expected = 0 as const;

	expect(response).toStrictEqual(expected);

	expectTypeOf(expected).toEqualTypeOf(response);
});
