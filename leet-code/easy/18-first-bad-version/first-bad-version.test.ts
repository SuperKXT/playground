import { expect, test } from "vitest";

import { firstBadVersion } from "./first-bad-version.js";

test("testing firstBadVersion for test 1", () => {
	const checker = firstBadVersion((n) => n >= 4);
	const result = checker(5);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
});

test("testing firstBadVersion for test 2", () => {
	const checker = firstBadVersion((n) => n >= 1);
	const result = checker(1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
});
