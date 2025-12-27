import { assertType, expect, test } from "vitest";

import { uniqueEmails } from "./unique-email.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing uniqueEmails for test 1", () => {
	const result = uniqueEmails([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uniqueEmails for test 2", () => {
	const result = uniqueEmails([
		"a@leetcode.com",
		"b@leetcode.com",
		"c@leetcode.com",
	]);
	const expected = 3;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uniqueEmails for test 2", () => {
	const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
	const result = uniqueEmails(emails);
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
