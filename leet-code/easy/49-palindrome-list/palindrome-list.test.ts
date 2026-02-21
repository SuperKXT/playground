import { expect, expectTypeOf, test } from "vitest";

import { palindromeList } from "./palindrome-list.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing palindromeList for test 1", () => {
	const result = palindromeList(arrayToLinkedList([1, 2, 2, 1]).head);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing palindromeList for test 2", () => {
	const result = palindromeList(arrayToLinkedList([1, 2]).head);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
