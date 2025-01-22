type TVowel = "a" | "e" | "i" | "o" | "u";

type TReverse<T extends string> = T extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: "";

type TFaultyVowels<
	T extends string,
	result extends string = "",
> = T extends `${infer first}${infer rest}`
	? first extends TVowel
		? TFaultyVowels<rest, TReverse<result>>
		: TFaultyVowels<rest, `${result}${first}`>
	: result;

export const faultyVowels = <const T extends string>(
	input: T,
): TFaultyVowels<T> => {
	let result = "";
	for (const char of input) {
		if (["a", "e", "i", "o", "u"].includes(char))
			result = result.split("").reverse().join("");
		else result += char;
	}
	return result as never;
};
