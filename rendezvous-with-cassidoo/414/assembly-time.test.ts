import { assertType, expect, test } from "vitest";

import { assemblyTime } from "./assembly-time.js";

import type { Utils } from "../../types/utils.types.js";

test("testing assemblyTime against test 1", () => {
	const result = assemblyTime([
		{ name: "keyCaps", arrivalDays: 1, assemblyHours: 2 },
		{ name: "switches", arrivalDays: 2, assemblyHours: 27 },
		{ name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
		{ name: "PCB", arrivalDays: 1, assemblyHours: 4 },
		{ name: "case", arrivalDays: 3, assemblyHours: 2 },
	]);
	const expected = 77 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
