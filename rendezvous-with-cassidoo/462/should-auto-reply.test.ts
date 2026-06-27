import { expect, expectTypeOf, test } from "vitest";

import { shouldAutoReply } from "./should-auto-reply.js";

test("testing shouldAutoReply against test 1", () => {
	const unavailable: Array<[string, string]> = [
		["2026-07-01", "2026-07-10"],
		["2026-08-15", "2026-08-20"],
	];
	const overrides = ["2026-07-04"];
	const date = "2026-07-05";
	const result = shouldAutoReply(unavailable, overrides, date);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing shouldAutoReply against test 2", () => {
	const unavailable: Array<[string, string]> = [["2026-07-01", "2026-07-10"]];
	const overrides = ["2026-07-04"];
	const date = "2026-07-04";
	const result = shouldAutoReply(unavailable, overrides, date);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing shouldAutoReply against test 3", () => {
	const unavailable: Array<[string, string]> = [["2026-07-01", "2026-07-10"]];
	const overrides: string[] = [];
	const date = "2026-07-11";
	const result = shouldAutoReply(unavailable, overrides, date);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
