export const maxSubArraySum = (arr: number[]): number => {
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		let sum = arr[i] as number;
		if (sum > max) max = sum;
		for (let j = i + 1; j < arr.length; j++) {
			sum += arr[j] as number;
			if (sum > max) max = sum;
		}
	}
	return max;
};
