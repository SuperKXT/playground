// https://leetcode.com/problems/to-lower-case

export const lowerCase = <Str extends string>(str: Str): Lowercase<Str> => {
	return str.toLowerCase();
};

// export const lowerCase = <Str extends string>(str: Str): Lowercase<Str> => {
// 	let res = "";
// 	for (let i = 0; i < str.length; i++) {
// 		const code = str.charCodeAt(i);
// 		if (code >= 65 && code <= 90) res += String.fromCharCode(code + 32);
// 		else res += String.fromCharCode(code);
// 	}
// 	return res as never;
// };
