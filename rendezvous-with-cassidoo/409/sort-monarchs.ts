import { decodeRomanNumerals } from "../../random/decode-roman-numerals/decode-roman-numerals.js";

export const sortMonarchs = (arr: string[]): string[] => {
	const mapped = arr.map((r) => {
		const [name, romanStr] = r.split(" ");
		if (!name || !romanStr) throw new Error("invalid input");
		return { value: r, name, roman: decodeRomanNumerals(romanStr) };
	});
	return mapped
		.sort((a, b) => a.name.localeCompare(b.name) || a.roman - b.roman)
		.map((r) => r.value);
};
