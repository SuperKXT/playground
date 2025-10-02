// https://leetcode.com/problems/maximum-product-of-three-numbers

export const maxProduct = (nums: number[]): number => {
	let first = -Infinity;
	let second = -Infinity;
	let third = -Infinity;
	let penultimate = Infinity;
	let last = Infinity;
	for (const num of nums) {
		if (num > first) {
			third = second;
			second = first;
			first = num;
		} else if (num > second) {
			third = second;
			second = num;
		} else if (num > third) {
			third = num;
		}
		if (num < last) {
			penultimate = last;
			last = num;
		} else if (num < penultimate) {
			penultimate = num;
		}
	}
	return Math.max(first * second * third, first * penultimate * last);
};
