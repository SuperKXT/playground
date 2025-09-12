// https://leetcode.com/problems/valid-palindrome/

type TIsDigit<Char extends string> = Char extends
	| "0"
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	? true
	: false;

type TISAlphabet<Char extends string> =
	Uppercase<Char> extends Lowercase<Char> ? false : true;

type TIsAlphanumeric<Char extends string> =
	| TIsDigit<Char>
	| TISAlphabet<Char> extends false
	? TIsDigit<Char> | TISAlphabet<Char>
	: true;

type TOnlyAlphanumeric<Str extends string> =
	Str extends `${infer first}${infer rest}`
		? TIsAlphanumeric<first> extends true
			? `${Lowercase<first>}${TOnlyAlphanumeric<rest>}`
			: TOnlyAlphanumeric<rest>
		: "";

type TReverse<Str extends string> = Str extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: "";

type TValidPalindrome<
	Str extends string,
	cleaned extends string = TOnlyAlphanumeric<Str>,
> = cleaned extends TReverse<cleaned> ? true : false;

// export const validPalindrome = <const Str extends string>(
// 	str: Str,
// ): TValidPalindrome<Str> => {
// 	const stripped = str.replace(/[^a-zA-Z0-9]*/gu, "").toLowerCase();
// 	return (stripped === stripped.split("").reverse().join("")) as never;
// };

export const validPalindrome = <const Str extends string>(
	str: Str,
): TValidPalindrome<Str> => {
	let forward = "";
	let back = "";
	for (const char of str) {
		const code = char.charCodeAt(0);
		const isNumber = code >= 48 && code <= 57;
		const isUpperAlphabet = code >= 65 && code <= 90;
		const isLowerAlphabet = code >= 97 && code <= 122;
		if (isUpperAlphabet) {
			forward += char.toLowerCase();
			back = `${char.toLowerCase()}${back}`;
		} else if (isLowerAlphabet || isNumber) {
			forward += char;
			back = `${char}${back}`;
		}
	}
	return (forward === back) as never;
};
