// https://leetcode.com/problems/delete-columns-to-make-sorted

export const deleteColumnsToMakeSorted = (strings: string[]): number => {
	const length = strings[0]?.length ?? 0;
	let count = 0;
	for (let i = 0; i < length; i++) {
		let last = strings[0]?.[i] as string;
		for (let j = 1; j < strings.length; j++) {
			const curr = strings[j]?.[i] as string;
			if (curr.localeCompare(last) < 0) {
				count++;
				break;
			}
			last = curr;
		}
	}
	return count;
};
