// https://leetcode.com/problems/excel-sheet-column-title

export const excelColumnName = (columnNo: number): string => {
	let curr = columnNo;
	let res = "";
	while (curr > 0) {
		curr -= 1;
		const mod = curr % 26;
		const char = String.fromCharCode(65 + mod);
		res = `${char}${res}`;
		curr = Math.floor(curr / 26);
	}
	return res;
};
