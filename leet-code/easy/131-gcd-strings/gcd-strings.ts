// https://leetcode.com/problems/greatest-common-divisor-of-strings

// export const gcdStrings = (str1: string, str2: string): string => {
// 	if (str1 === str2) return str1;
// 	if (str1.length === str2.length) return "";
// 	const smaller = str1.length > str2.length ? str2 : str1;
// 	const bigger = str1.length > str2.length ? str1 : str2;
// 	let curr = smaller;
// 	while (curr !== "") {
// 		if (
// 			bigger.replaceAll(curr, "") === "" &&
// 			smaller.replaceAll(curr, "") === ""
// 		)
// 			break;
// 		curr = curr.slice(0, -1);
// 	}
// 	return curr;
// };

// export const gcdStrings = (str1: string, str2: string): string => {
// 	if (str1 === str2) return str1;
// 	if (str1.length === str2.length) return "";
// 	if (str1 + str2 !== str2 + str1) return "";
// 	const toCheck = str1 + str2;
// 	let curr = str1.length > str2.length ? str2 : str1;
// 	while (curr !== "") {
// 		if (toCheck.replaceAll(curr, "") === "") break;
// 		curr = curr.slice(0, -1);
// 	}
// 	return curr;
// };

// export const gcdStrings = (str1: string, str2: string): string => {
// 	if (str1 === str2) return str1;
// 	if (str1.length === str2.length) return "";
// 	if (str1 + str2 !== str2 + str1) return "";
// 	const toCheck = str1 + str2;
// 	let curr = str1.length > str2.length ? str2 : str1;
// 	while (curr !== "") {
// 		const regex = new RegExp(`^(${curr})+$`, "u");
// 		if (regex.test(toCheck)) break;
// 		curr = curr.slice(0, -1);
// 	}
// 	return curr;
// };

const _gcd = (a: number, b: number): number => {
	return b === 0 ? a : _gcd(b, a % b);
};

export const gcdStrings = (str1: string, str2: string): string => {
	if (str1 + str2 !== str2 + str1) return "";
	return str1.slice(0, _gcd(str1.length, str2.length));
};
