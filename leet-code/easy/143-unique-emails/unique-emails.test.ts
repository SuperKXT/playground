import { assertType, expect, test } from "vitest";

import {
	uniqueEmailsManual,
	uniqueEmailsManualWithSlice,
	uniqueEmailsRegex,
} from "./unique-emails.js";

import type { Utils } from "../../../types/utils.types.js";

const createTypeSafeNonReadonlyArray = <const T extends unknown[]>(arr: T): T =>
	arr;

test("testing uniqueEmails for test 1", () => {
	const emails = createTypeSafeNonReadonlyArray([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	]);

	const result1 = uniqueEmailsRegex(emails);
	const expected = 2;
	expect(result1).toStrictEqual(expected);
	type TTrue1 = Utils.equal<typeof result1, typeof expected>;
	assertType<TTrue1>(true);

	const result2 = uniqueEmailsManual(emails);
	expect(result2).toStrictEqual(expected);
	type TTrue2 = Utils.equal<typeof result2, typeof expected>;
	assertType<TTrue2>(true);

	const result3 = uniqueEmailsManualWithSlice(emails);
	expect(result3).toStrictEqual(expected);
	type TTrue3 = Utils.equal<typeof result3, typeof expected>;
	assertType<TTrue3>(true);
});

test("testing uniqueEmails for test 2", () => {
	const emails = createTypeSafeNonReadonlyArray([
		"a@leetcode.com",
		"b@leetcode.com",
		"c@leetcode.com",
	]);

	const result1 = uniqueEmailsRegex(emails);
	const expected = 3;
	expect(result1).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result1, typeof expected>;
	assertType<TTrue>(true);

	const result2 = uniqueEmailsManual(emails);
	expect(result2).toStrictEqual(expected);
	type TTrue2 = Utils.equal<typeof result2, typeof expected>;
	assertType<TTrue2>(true);

	const result3 = uniqueEmailsManualWithSlice(emails);
	expect(result3).toStrictEqual(expected);
	type TTrue3 = Utils.equal<typeof result3, typeof expected>;
	assertType<TTrue3>(true);
});

test("testing uniqueEmails for test 3", () => {
	const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

	const result1 = uniqueEmailsRegex(emails);
	const expected = 3 as number;
	expect(result1).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result1, typeof expected>;
	assertType<TTrue>(true);

	const result2 = uniqueEmailsManual(emails);
	expect(result2).toStrictEqual(expected);
	type TTrue2 = Utils.equal<typeof result2, typeof expected>;
	assertType<TTrue2>(true);

	const result3 = uniqueEmailsManualWithSlice(emails);
	expect(result3).toStrictEqual(expected);
	type TTrue3 = Utils.equal<typeof result3, typeof expected>;
	assertType<TTrue3>(true);
});
