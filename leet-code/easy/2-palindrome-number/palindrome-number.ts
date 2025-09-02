type TReverse<Str extends string> = Str extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: "";

type TPalindromeNumber<Num extends number> =
	`${Num}` extends TReverse<`${Num}`> ? true : false;

// export const palindromeNumber = <const Num extends number>(
// 	num: Num,
// ): TPalindromeNumber<Num> => {
// 	const str = num.toString();
// 	return (str === str.split("").reverse().join("")) as never;
// };

// export const palindromeNumber = <const Num extends number>(
// 	num: Num,
// ): TPalindromeNumber<Num> => {
// 	const str = num.toString();
// 	const mid = Math.floor(str.length / 2);
// 	for (let i = 0; i < mid; i++) {
// 		if (str[i] !== str[str.length - 1 - i]) return false as never;
// 	}
// 	return true as never;
// };

export const palindromeNumber = <const Num extends number>(
	num: Num,
): TPalindromeNumber<Num> => {
	if (num < 0) return false as never;
	const str = num.toString();
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false as never;
		left++;
		right--;
	}
	return true as never;
};
