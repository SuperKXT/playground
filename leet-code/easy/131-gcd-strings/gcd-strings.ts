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

type TCheckPattern<
	S extends string,
	R extends string,
> = S extends `${R}${infer rest}`
	? rest extends ""
		? true
		: TCheckPattern<rest, R>
	: false;

type TGetSmaller<
	Str1 extends string,
	Str2 extends string,
	rem1 extends string = Str1,
	rem2 extends string = Str2,
> = rem1 extends `${string}${infer rest1}`
	? rem2 extends `${string}${infer rest2}`
		? TGetSmaller<Str1, Str2, rest1, rest2>
		: Str2
	: Str1;

type TRemoveLast<S extends string> = S extends `${infer first}${infer rest}`
	? rest extends ""
		? ""
		: `${first}${TRemoveLast<rest>}`
	: "";

type _TGcdStrings<Curr extends string, ToCheck extends string> = Curr extends ""
	? ""
	: TCheckPattern<ToCheck, Curr> extends true
		? Curr
		: _TGcdStrings<TRemoveLast<Curr>, ToCheck>;

type TGcdStrings<
	Str1 extends string,
	Str2 extends string,
> = `${Str1}${Str2}` extends `${Str2}${Str1}`
	? _TGcdStrings<TGetSmaller<Str1, Str2>, `${Str1}${Str2}`>
	: "";

const _gcd = (a: number, b: number): number => {
	return b === 0 ? a : _gcd(b, a % b);
};

export const gcdStrings = <Str1 extends string, Str2 extends string>(
	str1: Str1,
	str2: Str2,
): TGcdStrings<Str1, Str2> => {
	if (str1 + str2 !== str2 + str1) return "";
	return str1.slice(0, _gcd(str1.length, str2.length)) as never;
};
