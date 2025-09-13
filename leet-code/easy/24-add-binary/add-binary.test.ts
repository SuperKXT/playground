import { expect, test } from "vitest";

import { addBinary } from "./add-binary.js";

test("testing addBinary for test 1", () => {
	const result = addBinary("11", "1");
	const expected = "100";
	expect(result).toStrictEqual(expected);
});

test("testing addBinary for test 2", () => {
	const result = addBinary("1010", "1011");
	const expected = "10101";
	expect(result).toStrictEqual(expected);
});

test("testing addBinary for test 3", () => {
	const result = addBinary(
		"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
		"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011",
	);
	const expected =
		"110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000";
	expect(result).toStrictEqual(expected);
});
