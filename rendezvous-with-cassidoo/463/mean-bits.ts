export const countBits = (n: number): number => {
	if (n === 0) return 1;
	let curr = n;
	let count = 0;
	while (curr > 0) {
		count++;
		curr = Math.floor(curr / 2);
	}
	return count;
};

export const meanBits = (num: number): string => {
	let sum = 0;
	let count = 0;
	for (let idx = 0; idx < num; idx++) {
		sum += countBits(idx);
		count++;
	}
	return Math.floor(sum / count).toFixed(2);
};
