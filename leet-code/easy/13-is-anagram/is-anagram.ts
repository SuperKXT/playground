export const isAnagram = (a: string, b: string): boolean => {
	const aSorted = a.split("").sort().join("");
	const bSorted = b.split("").sort().join("");
	return aSorted === bSorted;
};
