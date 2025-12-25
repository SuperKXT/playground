// https://leetcode.com/problems/binary-gap

export const binaryGap = (n: number): number => {
	let longest = 0;
	let last: number | null = null;
	const str = n.toString(2);
	for (let i = 0; i < str.length; i++) {
		const d = str[i] as string;
		if (d === "0") continue;
		if (last !== null) longest = Math.max(longest, i - last);
		last = i;
	}
	return longest;
};
