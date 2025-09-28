import { assertType, expect, test } from "vitest";

import { licenseKey } from "./license-key.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing licenseKey for test 1", () => {
	const result = licenseKey("5F3Z-2e-9-w", 4);
	const expected = "5F3Z-2E9W" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing licenseKey for test 2", () => {
	const result = licenseKey("2-5g-3-J", 2);
	const expected = "2-5G-3J" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing licenseKey for test 3", () => {
	const result = licenseKey("2-4A0r7-4k", 4);
	const expected = "24A0-R74K" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing licenseKey for test 4", () => {
	const result = licenseKey("2", 4);
	const expected = "2" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
