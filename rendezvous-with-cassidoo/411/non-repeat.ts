export const nonRepeat = (str: string): string => {
	const counts = new Map<string, number>();
	for (const c of str) counts.set(c, (counts.get(c) ?? 0) + 1);
	for (let i = str.length - 1; i >= 0; i--) {
		const curr = str[i] as string;
		if (counts.get(curr) === 1) return curr;
	}
	return "";
};
