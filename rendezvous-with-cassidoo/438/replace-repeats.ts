export const maxScoreWithOneReset = (nums: number[]): number => {
	let least = 0;
	let sum = 0;
	for (const num of nums) {
		sum += num;
		if (sum < least || sum < 0) {
			least = sum;
			sum = 0;
		}
	}
	return sum as never;
};
