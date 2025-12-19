// https://leetcode.com/problems/duplicate-zeros

export const duplicateZeros = (arr: number[]): void => {
	const size = arr.length;
	for (let idx = 0; idx < size; idx++) {
		if (arr[idx] !== 0) continue;
		arr.splice(idx, 0, 0);
		idx++;
	}
	arr.splice(size, arr.length - size);
};
