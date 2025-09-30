// https://leetcode.com/problems/add-binary

type TPadAndReverse<
	A extends string,
	B extends string,
	resA extends string = "",
	resB extends string = "",
> = A extends `${infer aFirst}${infer aRest}`
	? B extends `${infer bFirst}${infer bRest}`
		? TPadAndReverse<aRest, bRest, `${aFirst}${resA}`, `${bFirst}${resB}`>
		: TPadAndReverse<aRest, "", `${aFirst}${resA}`, `${resB}0`>
	: B extends `${infer bFirst}${infer bRest}`
		? TPadAndReverse<"", bRest, `${resA}0`, `${bFirst}${resB}`>
		: { A: resA; B: resB };

type TAddBinary<
	A extends string,
	B extends string,
	reversed extends { A: string; B: string } = TPadAndReverse<A, B>,
	revA extends string = reversed["A"],
	revB extends string = reversed["B"],
	carry extends string = "0",
	res extends string = "",
> = [revA, revB] extends [
	`${infer aFirst}${infer aRest}`,
	`${infer bFirst}${infer bRest}`,
]
	? aFirst extends bFirst
		? TAddBinary<never, never, never, aRest, bRest, aFirst, `${carry}${res}`>
		: TAddBinary<
				never,
				never,
				never,
				aRest,
				bRest,
				carry,
				`${carry extends "1" ? "0" : "1"}${res}`
			>
	: carry extends "1"
		? `1${res}`
		: res;

// export const addBinary = (a: string, b: string): string => {
// 	return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

// export const addBinary = <const A extends string, const B extends string>(
// 	a: A,
// 	b: B,
// ): TAddBinary<A, B> => {
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
// 	return `${carry === 0 ? "" : carry}${result}` as never;
// };

export const addBinary = <const A extends string, const B extends string>(
	a: A,
	b: B,
): TAddBinary<A, B> => {
	let result = "";
	const length = Math.max(a.length, b.length);
	let carry = "0";
	for (let idx = 0; idx < length; idx++) {
		const currA = a.at(-1 * idx - 1) ?? "0";
		const currB = b.at(-1 * idx - 1) ?? "0";
		if (currA === currB) {
			result = `${carry}${result}`;
			carry = currA;
		} else {
			result = `${carry === "1" ? "0" : "1"}${result}`;
		}
	}
	return `${carry === "0" ? "" : carry}${result}` as never;
};
