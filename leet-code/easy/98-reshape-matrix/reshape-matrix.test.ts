import { expect, expectTypeOf, test } from "vitest";

import { reshapeMatrix } from "./reshape-matrix.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reshapeMatrix for test 1", () => {
	const result = reshapeMatrix(
		[
			[1, 2],
			[3, 4],
		],
		1,
		4,
	);
	const expected = [[1, 2, 3, 4]] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing reshapeMatrix for test 2", () => {
	const result = reshapeMatrix(
		[
			[1, 2],
			[3, 4],
		],
		2,
		4,
	);
	const expected = [
		[1, 2],
		[3, 4],
	] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing reshapeMatrix for test 3", () => {
	const result = reshapeMatrix(
		[
			[1, 2],
			[3, 4],
		],
		4,
		1,
	);
	const expected = [[1], [2], [3], [4]] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
