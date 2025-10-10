// https://leetcode.com/problems/to-lower-case

// export const lowerCase = <Str extends string>(str: Str): Lowercase<Str> => {
// 	return str.toLowerCase() as never;
// };

// export const lowerCase = <Str extends string>(str: Str): Lowercase<Str> => {
// 	let res = "";
// 	for (let i = 0; i < str.length; i++) {
// 		const code = str.charCodeAt(i);
// 		if (code >= 65 && code <= 90) res += String.fromCharCode(code + 32);
// 		else res += String.fromCharCode(code);
// 	}
// 	return res as never;
// };

const map = {
	A: "a",
	B: "b",
	C: "c",
	D: "d",
	E: "e",
	F: "f",
	G: "g",
	H: "h",
	I: "i",
	J: "j",
	K: "k",
	L: "l",
	M: "m",
	N: "n",
	O: "o",
	P: "p",
	Q: "q",
	R: "r",
	S: "s",
	T: "t",
	U: "u",
	V: "v",
	W: "w",
	X: "x",
	Y: "y",
	Z: "z",
} as const;

type TMap = typeof map;

type TLowerCase<Str extends string> = Str extends `${infer first}${infer rest}`
	? `${first extends keyof TMap ? TMap[first] : first}${TLowerCase<rest>}`
	: Str;

export const lowerCase = <Str extends string>(str: Str): TLowerCase<Str> => {
	let res = "";
	for (const char of str) {
		res += (map as Record<string, string>)[char] ?? char;
	}
	return res as never;
};
