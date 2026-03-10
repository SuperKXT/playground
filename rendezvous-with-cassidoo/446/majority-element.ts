export const majorityElement = (arr: number[]): number => {
	let seq = 0;
	let count = 0;
	for (const num of arr) {
		if (count === 0) {
			seq = num;
			count = 1;
		} else if (num === seq) {
			count++;
		} else {
			count--;
		}
	}
	return seq;
};
