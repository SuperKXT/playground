// https://leetcode.com/problems/add-binary

// export const addBinary = (a: string, b: string): string => {
// 	return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

// export const addBinary = (a: string, b: string): string => {
// 	let result = "";
// 	const length = Math.max(a.length, b.length);
// 	let carry = 0;
// 	for (let idx = 0; idx < length; idx++) {
// 		const currA = Number(a.at(-1 * idx - 1) ?? "0");
// 		const currB = Number(b.at(-1 * idx - 1) ?? "0");
// 		const sum = carry + currA + currB;
// 		carry = Math.trunc(sum / 2);
// 		result = `${sum.toString(2).at(-1) ?? "0"}${result}`;
// 	}
// 	return `${carry === 0 ? "" : carry}${result}`;
// };

export const addBinary = (a: string, b: string): string => {
	let result = "";
	const length = Math.max(a.length, b.length);
	let carry = "0";
	for (let idx = 0; idx < length; idx++) {
		const currA = a.at(-1 * idx - 1) ?? "0";
		const currB = b.at(-1 * idx - 1) ?? "0";
		if (currA === currB) {
			result = `${carry}${result}`;
			carry = currA === "1" ? "1" : "0";
		} else {
			result = `${carry === "1" ? "0" : "1"}${result}`;
		}
	}
	return `${carry === "0" ? "" : carry}${result}`;
};
