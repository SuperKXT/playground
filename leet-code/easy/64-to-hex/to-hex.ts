// https://leetcode.com/problems/convert-a-number-to-hexadecimal

const hexMap = {
	0: "0",
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
	7: "7",
	8: "8",
	9: "9",
	10: "a",
	11: "b",
	12: "c",
	13: "d",
	14: "e",
	15: "f",
} as Record<number, string>;

const twosComplement = (num: number): number => {
	const str = num.toString(2).padStart(32, "0");
	let complement = "";
	for (const char of str) {
		complement += char === "1" ? "0" : "1";
	}
	return parseInt(complement, 2) + 1;
};

// export const toHex = (num: number): string => {
// 	if (num >= 0) return num.toString(16);
// 	return twosComplement(Math.abs(num)).toString(16);
// };

export const toHex = (num: number): string => {
	let hex = "";
	let curr = num >= 0 ? num : twosComplement(Math.abs(num));
	while (true) {
		const digit = hexMap[curr % 16] ?? "f";
		hex = `${digit}${hex}`;
		if (curr < 16) break;
		curr = Math.floor(curr / 16);
	}
	return hex;
};
