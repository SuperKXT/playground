import { expect, expectTypeOf, test } from "vitest";

import { fireStationCoverage } from "./fire-station-coverage.js";

test("testing fireStationCoverage against test 1", () => {
	const result = fireStationCoverage([
		[2, 0, 1],
		[0, 2, 0],
		[1, 0, 2],
	]);
	const expected = [
		[2, 1, 0],
		[1, 2, 1],
		[0, 1, 2],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing fireStationCoverage against test 2", () => {
	const result = fireStationCoverage([
		[1, 0, 0, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 0, 0, 1],
	]);
	const expected = [
		[0, 1, 1, 0],
		[1, 2, 2, 1],
		[1, 2, 2, 1],
		[0, 1, 1, 0],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
