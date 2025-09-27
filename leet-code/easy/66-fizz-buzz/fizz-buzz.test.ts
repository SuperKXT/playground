import { assertType, expect, test } from "vitest";

import { fizzBuzz } from "./fizz-buzz.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longestPalindrome for test 1", () => {
	const result = fizzBuzz(3);
	const expected = ["1", "2", "Fizz"] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestPalindrome for test 2", () => {
	const result = fizzBuzz(5);
	const expected = ["1", "2", "Fizz", "4", "Buzz"] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longestPalindrome for test 2", () => {
	const result = fizzBuzz(15);
	const expected = [
		"1",
		"2",
		"Fizz",
		"4",
		"Buzz",
		"Fizz",
		"7",
		"8",
		"Fizz",
		"Buzz",
		"11",
		"Fizz",
		"13",
		"14",
		"FizzBuzz",
	] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
