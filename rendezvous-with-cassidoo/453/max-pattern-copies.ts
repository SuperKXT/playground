export const maxPatternCopies = (s: string, pattern: string): number => {
	const map = new Map<string, number>();
	for (const c of s) map.set(c, (map.get(c) ?? 0) + 1);
	let count = 0;
	outer: while (true) {
		for (const c of pattern) {
			const cVal = map.get(c);
			const wVal = map.get("?");
			const curr = cVal || wVal;
			if (!curr) break outer;
			if (cVal) map.set(c, curr - 1);
			else map.set("?", curr - 1);
		}
		count++;
	}
	return count;
};
