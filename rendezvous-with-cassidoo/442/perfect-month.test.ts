import { assertType, expect, test } from "vitest";

import { perfectMonth } from "./perfect-month.js";

import type { Utils } from "../../types/utils.types.js";

test("testing perfectMonth against test 1", () => {
	const result = perfectMonth(2025);
	const expected = { prev: "2021-02", next: "2026-02" };
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing perfectMonth against test 2", () => {
	const result = perfectMonth(2026);
	const expected = { prev: "2026-02", next: "2027-02" };
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
