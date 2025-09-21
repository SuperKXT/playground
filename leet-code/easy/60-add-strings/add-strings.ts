// https://leetcode.com/problems/add-strings

type TDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

const map = {
	"0": {
		"0": 0,
		"1": 1,
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
	},
	"1": {
		"0": 1,
		"1": 2,
		"2": 3,
		"3": 4,
		"4": 5,
		"5": 6,
		"6": 7,
		"7": 8,
		"8": 9,
		"9": 10,
	},
	"2": {
		"0": 2,
		"1": 3,
		"2": 4,
		"3": 5,
		"4": 6,
		"5": 7,
		"6": 8,
		"7": 9,
		"8": 10,
		"9": 11,
	},
	"3": {
		"0": 3,
		"1": 4,
		"2": 5,
		"3": 6,
		"4": 7,
		"5": 8,
		"6": 9,
		"7": 10,
		"8": 11,
		"9": 12,
	},
	"4": {
		"0": 4,
		"1": 5,
		"2": 6,
		"3": 7,
		"4": 8,
		"5": 9,
		"6": 10,
		"7": 11,
		"8": 12,
		"9": 13,
	},
	"5": {
		"0": 5,
		"1": 6,
		"2": 7,
		"3": 8,
		"4": 9,
		"5": 10,
		"6": 11,
		"7": 12,
		"8": 13,
		"9": 14,
	},
	"6": {
		"0": 6,
		"1": 7,
		"2": 8,
		"3": 9,
		"4": 10,
		"5": 11,
		"6": 12,
		"7": 13,
		"8": 14,
		"9": 15,
	},
	"7": {
		"0": 7,
		"1": 8,
		"2": 9,
		"3": 10,
		"4": 11,
		"5": 12,
		"6": 13,
		"7": 14,
		"8": 15,
		"9": 16,
	},
	"8": {
		"0": 8,
		"1": 9,
		"2": 10,
		"3": 11,
		"4": 12,
		"5": 13,
		"6": 14,
		"7": 15,
		"8": 16,
		"9": 17,
	},
	"9": {
		"0": 9,
		"1": 10,
		"2": 11,
		"3": 12,
		"4": 13,
		"5": 14,
		"6": 15,
		"7": 16,
		"8": 17,
		"9": 18,
	},
	"10": {
		"0": 10,
		"1": 11,
		"2": 12,
		"3": 13,
		"4": 14,
		"5": 15,
		"6": 16,
		"7": 17,
		"8": 18,
		"9": 19,
	},
} as const;

type TMap = typeof map;

type TAddDigits<
	Digit1 extends TDigit,
	Digit2 extends TDigit,
	Carry extends TDigit,
> = `${TMap[Digit1][Carry]}` extends infer Sum1 extends TDigit | "10"
	? `${TMap[Sum1][Digit2]}` extends infer str
		? str extends `${infer newCarry extends TDigit}${infer res extends TDigit}`
			? { sum: res; carry: newCarry }
			: { sum: str; carry: "0" }
		: never
	: never;

type TDigitTuples<
	Str1 extends string,
	Str2 extends string,
	res extends { a: TDigit[]; b: TDigit[] } = { a: []; b: [] },
> = Str1 extends `${infer first1 extends TDigit}${infer rest1}`
	? Str2 extends `${infer first2 extends TDigit}${infer rest2}`
		? TDigitTuples<
				rest1,
				rest2,
				{ a: [...res["a"], first1]; b: [...res["b"], first2] }
			>
		: TDigitTuples<
				rest1,
				"",
				{ a: [...res["a"], first1]; b: ["0", ...res["b"]] }
			>
	: Str2 extends `${infer first2 extends TDigit}${infer rest2}`
		? TDigitTuples<
				"",
				rest2,
				{ a: ["0", ...res["a"]]; b: [...res["b"], first2] }
			>
		: res;

type TAddStrings<
	Str1 extends string,
	Str2 extends string,
	tups extends { a: TDigit[]; b: TDigit[] } = TDigitTuples<Str1, Str2>,
	carry extends TDigit = "0",
> = tups extends {
	a: [...infer aRest extends TDigit[], infer aLast extends TDigit];
	b: [...infer bRest extends TDigit[], infer bLast extends TDigit];
}
	? TAddDigits<aLast, bLast, carry> extends infer res extends {
			sum: TDigit;
			carry: TDigit;
		}
		? `${TAddStrings<never, never, { a: aRest; b: bRest }, res["carry"]>}${res["sum"]}`
		: ""
	: "";

export const addStrings = <Num1 extends string, Num2 extends string>(
	num1: Num1,
	num2: Num2,
): TAddStrings<Num1, Num2> => {
	const size = Math.max(num1.length, num2.length);
	let carry = 0;
	let res = "";
	for (let i = 1; i <= size; i++) {
		const digit1 = (num1[num1.length - i] ?? "0") as TDigit;
		const digit2 = (num2[num2.length - i] ?? "0") as TDigit;
		const sum = map[digit1][digit2] + carry;
		carry = sum > 9 ? 1 : 0;
		res = `${sum % 10}${res}`;
	}
	if (carry) res = `${carry}${res}`;
	return res as never;
};

// export const addStrings = <Num1 extends string, Num2 extends string>(
// 	num1: Num1,
// 	num2: Num2,
// ): TAddStrings<Num1, Num2> => {
// 	const size = Math.max(num1.length, num2.length);
// 	let carry = 0;
// 	let res = "";
// 	for (let i = 1; i <= size; i++) {
// 		const digit1 = Number(num1[num1.length - i] ?? "0");
// 		const digit2 = Number(num2[num2.length - i] ?? "0");
// 		const sum = digit1 + digit2 + carry;
// 		carry = sum > 9 ? 1 : 0;
// 		res = `${sum % 10}${res}`;
// 	}
// 	if (carry) res = `${carry}${res}`;
// 	return res as never;
// };
