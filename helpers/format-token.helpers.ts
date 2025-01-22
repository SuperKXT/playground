import {
	alphabet,
	alphaNumeric,
	lowerAlphabet,
	numeric,
	upperAlphabet,
	wordSeparators,
} from "./string-literals.helpers.js";

import type { Utils } from "../types/utils.types.js";
import type {
	TAlphabet,
	TAlphaNumeric,
	TLowerAlphabet,
	TNumeric,
	TUpperAlphabet,
	TWordSeparators,
} from "./string-literals.helpers.js";

type TStrategy = "camel" | "pascal" | "snake" | "kebab" | "constant" | "human";

const separatorMap = {
	camel: "",
	pascal: "",
	snake: "_",
	kebab: "-",
	constant: "_",
	human: " ",
} as const;

type TSeparatorMap = typeof separatorMap;

type _TFirstChar<
	char extends string,
	strategy extends TStrategy,
> = `${TSeparatorMap[strategy]}${strategy extends "kebab" | "snake" | "human"
	? Lowercase<char>
	: Uppercase<char>}`;

type _TFormatChar<
	char extends string,
	lastChar extends string,
	strategy extends TStrategy,
	formatted extends string,
> =
	char extends Exclude<char, TAlphaNumeric> // char !== AlphaNumeric
		? ""
		: formatted extends ""
			? strategy extends "pascal" | "constant"
				? Uppercase<char>
				: Lowercase<char>
			: [char, lastChar] extends
						| [TAlphabet, TWordSeparators]
						| [TUpperAlphabet, TLowerAlphabet]
						| [TNumeric, Exclude<lastChar, TNumeric>]
				? _TFirstChar<char, strategy>
				: strategy extends "constant"
					? Uppercase<char>
					: Lowercase<char>;

type _TFormatToken<
	str extends string,
	strategy extends TStrategy,
	lastChar extends string = "",
	formatted extends string = "",
> = str extends `${infer first}${infer rest}`
	? _TFormatToken<
			rest,
			strategy,
			first,
			`${formatted}${_TFormatChar<first, lastChar, strategy, formatted>}`
		>
	: formatted;

export type TFormatToken<
	str extends string,
	strategy extends TStrategy,
> = str extends str ? _TFormatToken<Utils.trim<str>, strategy> : never;

/**
 * Takes a token name, and format strategy and returns the converted token name
 * @param string the string to format
 * @param strategy - the strategy to format the string
 * @example formatToken('camelCaseString', 'kebab') => 'camel-case-string'
 */
export const formatToken = <T extends string, S extends TStrategy>(
	input: T,
	strategy: S,
): TFormatToken<T, S> => {
	const string = input.trim();
	if (!string) return "" as never;

	let formatted = "";

	for (let index = 0; index < string.length; index++) {
		const current = string[index] as string;
		const last = string[index - 1];

		if (!alphaNumeric.includes(current)) continue;

		if (!last || !formatted) {
			formatted += ["pascal", "constant"].includes(strategy)
				? current.toUpperCase()
				: current.toLowerCase();
		} else if (
			(alphabet.includes(current) && wordSeparators.includes(last)) ||
			(upperAlphabet.includes(current) && lowerAlphabet.includes(last)) ||
			(numeric.includes(current) && !numeric.includes(last))
		) {
			const char = ["kebab", "snake", "human"].includes(strategy)
				? current.toLowerCase()
				: current.toUpperCase();
			formatted += `${separatorMap[strategy]}${char}`;
		} else {
			formatted +=
				strategy === "constant" ? current.toUpperCase() : current.toLowerCase();
		}
	}

	return formatted as never;
};
