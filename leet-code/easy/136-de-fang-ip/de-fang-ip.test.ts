import { assertType, expect, test } from "vitest";

import { deFangIp } from "./de-fang-ip.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing deFangIp for test 1", () => {
	const result = deFangIp("1.1.1.1");
	const expected = "1[.]1[.]1[.]1" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing deFangIp for test 2", () => {
	const result = deFangIp("255.100.50.0");
	const expected = "255[.]100[.]50[.]0" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
