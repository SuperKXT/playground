export const sortHexColors = (list: string[]): string[] => {
	const sorted: string[] = [];
	for (const row of list) {
		let i = 0;
		for (i = 0; i < sorted.length; i++) {
			const curr = sorted[i] as string;
			if (row < curr) break;
		}
		sorted.splice(i, 0, row);
	}
	return sorted;
};
