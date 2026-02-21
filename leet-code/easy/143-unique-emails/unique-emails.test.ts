import { expect, expectTypeOf, test } from "vitest";

import {
	uniqueEmailsManual,
	uniqueEmailsManualWithSlice,
	uniqueEmailsRegex,
} from "./unique-emails.js";

const createTypeSafeNonReadonlyArray = <const T extends unknown[]>(arr: T): T =>
	arr;

test("testing uniqueEmails for test 1", () => {
	const emails = createTypeSafeNonReadonlyArray([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	]);

	const result1 = uniqueEmailsRegex(emails);
	const expected = 2 as const;

	expect(result1).toStrictEqual(expected);

	expectTypeOf(result1).toEqualTypeOf(expected);

	const result2 = uniqueEmailsManual(emails);

	expect(result2).toStrictEqual(expected);

	expectTypeOf(result2).toEqualTypeOf(expected);

	const result3 = uniqueEmailsManualWithSlice(emails);

	expect(result3).toStrictEqual(expected);

	expectTypeOf(result3).toEqualTypeOf(expected);
});

test("testing uniqueEmails for test 2", () => {
	const emails = createTypeSafeNonReadonlyArray([
		"a@leetcode.com",
		"b@leetcode.com",
		"c@leetcode.com",
	]);

	const result1 = uniqueEmailsRegex(emails);
	const expected = 3 as const;

	expect(result1).toStrictEqual(expected);

	expectTypeOf(result1).toEqualTypeOf(expected);

	const result2 = uniqueEmailsManual(emails);

	expect(result2).toStrictEqual(expected);

	expectTypeOf(result2).toEqualTypeOf(expected);

	const result3 = uniqueEmailsManualWithSlice(emails);

	expect(result3).toStrictEqual(expected);

	expectTypeOf(result3).toEqualTypeOf(expected);
});

test("testing uniqueEmails for test 3", () => {
	const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

	const result1 = uniqueEmailsRegex(emails);
	const expected = 3 as number;

	expect(result1).toStrictEqual(expected);

	expectTypeOf(result1).toEqualTypeOf(expected);

	const result2 = uniqueEmailsManual(emails);

	expect(result2).toStrictEqual(expected);

	expectTypeOf(result2).toEqualTypeOf(expected);

	const result3 = uniqueEmailsManualWithSlice(emails);

	expect(result3).toStrictEqual(expected);

	expectTypeOf(result3).toEqualTypeOf(expected);
});
