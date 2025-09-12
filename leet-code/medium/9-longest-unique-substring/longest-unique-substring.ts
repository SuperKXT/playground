// https://leetcode.com/problems/longest-substring-without-repeating-characters

// const getUniqueSubstrings = (str: string, prefix: string = ""): string[] => {
// 	const curr = str[0];
// 	if (!curr) return [];
// 	const rest = str.slice(1);
// 	const newPrefix =
// 		!prefix || prefix.includes(curr) ? curr : `${prefix}${curr}`;
// 	const arr = [newPrefix, ...getUniqueSubstrings(rest, curr)];
// 	if (newPrefix !== curr) {
// 		arr.push(...getUniqueSubstrings(rest, newPrefix));
// 	}
// 	return arr;
// };

// export const longestUniqueSubstring = (str: string): number => {
// 	let longest = 0;
// 	for (const curr of getUniqueSubstrings(str)) {
// 		if (curr.length > longest) longest = curr.length;
// 	}
// 	return longest;
// };

export const longestUniqueSubstring = (str: string): number => {
	let longest = 0;
	for (let idx = 0; idx < str.length; idx++) {
		const rest = str.slice(idx + 1);
		const set = new Set<string>(str[idx]);
		for (const char of rest) {
			if (set.has(char)) break;
			set.add(char);
		}
		if (set.size > longest) longest = set.size;
	}
	return longest;
};
