import { expect, expectTypeOf, test } from "vitest";

import { deFangIp } from "./de-fang-ip.js";

test("testing deFangIp for test 1", () => {
	const result = deFangIp("1.1.1.1");
	const expected = "1[.]1[.]1[.]1" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing deFangIp for test 2", () => {
	const result = deFangIp("255.100.50.0");
	const expected = "255[.]100[.]50[.]0" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
