import { assertType, expect, test } from "vitest";

import { hungryBearsImmutable, hungryBearsMutable } from "./hungry-bears.js";

import type { Utils } from "../../types/utils.types.js";
import type { TBear } from "./hungry-bears.js";

const randomString = (length: number = 8): string => {
	const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
};

const getTestCases = () => {
	const testData: TBear[] = [];
	let sum = 0;
	for (let i = 0; i < 100_000; i++) {
		const hunger = Math.floor(Math.random() * 100);
		sum += hunger;
		testData.push({ name: randomString(), hunger });
	}
	const avg = sum / testData.length;
	const expected: string[] = [];
	for (const bear of testData) {
		if (bear.hunger > avg) expected.push(bear.name);
	}
	return { testData, expected: expected.sort((a, b) => a.localeCompare(b)) };
};

test("testing hungryBearsImmutable against test 1", () => {
	const bears = [
		{ name: "Baloo", hunger: 6 }, // cSpell: disable-line
		{ name: "Yogi", hunger: 9 },
		{ name: "Paddington", hunger: 4 }, // cSpell: disable-line
		{ name: "Winnie", hunger: 10 },
		{ name: "Chicago", hunger: 20 },
	];
	const result = hungryBearsImmutable(bears);
	const expected = ["Chicago", "Winnie"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing hungryBearsImmutable against test 2", () => {
	const { testData, expected } = getTestCases();
	const result = hungryBearsImmutable(testData);
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing hungryBearsMutable against test 1", () => {
	const bears = [
		{ name: "Baloo", hunger: 6 }, // cSpell: disable-line
		{ name: "Yogi", hunger: 9 },
		{ name: "Paddington", hunger: 4 }, // cSpell: disable-line
		{ name: "Winnie", hunger: 10 },
		{ name: "Chicago", hunger: 20 },
	];
	const result = hungryBearsMutable(bears);
	const expected = ["Chicago", "Winnie"];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing hungryBearsMutable against test 2", () => {
	const { testData, expected } = getTestCases();
	const result = hungryBearsMutable(testData);
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
