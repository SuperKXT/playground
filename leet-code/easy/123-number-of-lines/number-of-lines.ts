// https://leetcode.com/problems/number-of-lines-to-write-string

// export const numberOfLines = (
// 	widths: number[],
// 	s: string,
// ): [number, number] => {
// 	let lines = 1;
// 	let length = 0;
// 	for (const char of s) {
// 		const idx = char.charCodeAt(0) - 97;
// 		const width = widths[idx] as number;
// 		if (length + width > 100) {
// 			lines++;
// 			length = 0;
// 		}
// 		length += width;
// 	}
// 	return [lines, length];
// };

export const numberOfLines = (
	widths: number[],
	s: string,
): [number, number] => {
	let lines = 1;
	let length = 0;
	const map = new Map<string, number>();
	for (let i = 0; i < widths.length; i++) {
		const char = String.fromCharCode(i + 97);
		map.set(char, widths[i] as number);
	}
	for (const char of s) {
		const width = map.get(char) as number;
		if (length + width > 100) {
			lines++;
			length = 0;
		}
		length += width;
	}
	return [lines, length];
};
