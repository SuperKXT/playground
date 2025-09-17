// https://leetcode.com/problems/excel-sheet-column-number

export const excelColumnNumber = (name: string): number => {
	let res = 0;
	let base = name.length - 1;
	for (const char of name) {
		res += (char.charCodeAt(0) - 64) * 26 ** base;
		base--;
	}
	return res;
};
