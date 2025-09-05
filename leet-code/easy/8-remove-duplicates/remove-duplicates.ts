export const removeDuplicates = (arr: number[]): number => {
	const set = new Set<number>();
	for (let idx = 0; idx < arr.length; idx++) {
		const num = arr[idx] as number;
		if (set.has(num)) {
			arr.splice(idx, 1);
			idx--;
		} else {
			set.add(num);
		}
	}
	return arr.length;
};
