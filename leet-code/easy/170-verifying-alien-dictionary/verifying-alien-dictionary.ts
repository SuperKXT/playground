// https://leetcode.com/problems/verifying-an-alien-dictionary/

const compareWords = (a: string, b: string, map: Map<string, number>) => {
	if (a === b) return 0;
	const len = Math.min(a.length, b.length);
	if (len === 0) throw new Error("Empty word");
	for (let i = 0; i < len; i++) {
		const aOrder = map.get(a[i] as string);
		const bOrder = map.get(b[i] as string);
		if (aOrder === undefined || bOrder === undefined)
			throw new Error("Invalid characters");
		const diff = aOrder - bOrder;
		if (diff === 0) continue;
		return diff;
	}
	return a.length > b.length ? 1 : -1;
};

export const isAlienSorted = (words: string[], order: string): boolean => {
	const map = new Map<string, number>();
	for (let i = 0; i < order.length; i++) map.set(order[i] as string, i);
	let last = null as null | string;
	for (const word of words) {
		if (last) {
			const diff = compareWords(last, word, map);
			if (diff > 0) return false;
		}
		last = word;
	}
	return true;
};
