export const longestSubsequence = (list: number[]): number => {
	let highest = 0;
	let curr = 0;
	let last: undefined | number = undefined;
	for (const num of list) {
		if (last !== undefined && Math.abs(num - last) === 1)
			curr = curr + 1 + (curr === 0 ? 1 : 0);
		else {
			highest = Math.max(highest, curr);
			curr = 0;
		}
		last = num;
	}
	return Math.max(highest, curr) as never;
};
