// https://leetcode.com/problems/reverse-string-ii

export const reverseString = (s: string, k: number): string => {
	const curr = { reverse: "", straight: "" };
	let reverse = "";
	for (const char of s) {
		if (curr.reverse.length < k) {
			curr.reverse = `${char}${curr.reverse}`;
			continue;
		}
		curr.straight += char;
		if (curr.straight.length === k) {
			reverse += `${curr.reverse}${curr.straight}`;
			curr.reverse = "";
			curr.straight = "";
		}
	}
	if (curr.reverse.length) reverse += `${curr.reverse}${curr.straight}`;
	return reverse;
};
