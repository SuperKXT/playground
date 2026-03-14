export const minSwapsToAlternate = (str: string): number => {
	let swaps = 0;
	let last = null as null | string;
	const swapped = new Set<number>();
	for (let i = 0; i < str.length; i++) {
		const char = str[i] as string;
		if (!swapped.has(i) && char === last) {
			for (let j = i + 1; j < str.length; j++) {
				const curr = str[j] as string;
				if (swapped.has(j)) {
					if (j === str.length - 1) return -1;
					continue;
				}
				swaps++;
				if (curr !== last) {
					swapped.add(j);
					break;
				}
				if (j === str.length - 1) return -1;
			}
		}
		last = char;
	}
	return swaps;
};
