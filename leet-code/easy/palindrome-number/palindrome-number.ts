type TReverse<Str extends string> = Str extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: "";

type TPalindromeNumber<Num extends number> =
	`${Num}` extends TReverse<`${Num}`> ? true : false;

// export const palindromeNumber = (num: number): boolean => {
// 	return num.toString() === num.toString().split("").reverse().join("");
// };

// export const palindromeNumber = (num: number): boolean => {
// 	const str = num.toString();
// 	const mid = Math.floor(str.length / 2);
// 	for (let i = 0; i < mid; i++) {
// 		if (str[i] !== str[str.length - 1 - i]) return false;
// 	}
// 	return true;
// };

export const palindromeNumber = (num: number): boolean => {
	if (num < 0) return false;
	const str = num.toString();
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};
