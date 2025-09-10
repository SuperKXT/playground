// https://leetcode.com/problems/move-zeroes

export const moveZeroes = (arr: number[]): void => {
	const zeroes = [];
	for (let idx = 0; idx < arr.length; idx++) {
		if (arr[idx] === 0) {
			arr.splice(idx, 1);
			zeroes.push(0);
			idx--;
		}
	}
	arr.push(...zeroes);
};
