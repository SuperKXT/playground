// https://leetcode.com/problems/fizz-buzz

type TFizzBuzzStr<
	idx extends 1[],
	counter3 extends 1[],
	counter5 extends 1[],
	str extends
		string = `${counter3["length"] extends 3 ? "Fizz" : ""}${counter5["length"] extends 5 ? "Buzz" : ""}`,
> = str extends "" ? `${[...idx, 1]["length"]}` : str;

type TFizzBuzz<
	N extends number,
	res extends string[] = [],
	idx extends 1[] = [],
	counter3 extends 1[] = [1],
	counter5 extends 1[] = [1],
> = idx["length"] extends N
	? res
	: TFizzBuzz<
			N,
			[...res, TFizzBuzzStr<idx, counter3, counter5>],
			[...idx, 1],
			counter3["length"] extends 3 ? [1] : [...counter3, 1],
			counter5["length"] extends 5 ? [1] : [...counter5, 1]
		>;

// export const fizzBuzz = <N extends number>(n: N): TFizzBuzz<N> => {
// 	const result: string[] = [];
// 	let counter3 = 1;
// 	let counter5 = 1;
// 	for (let i = 1; i <= n; i++) {
// 		let str = "";
// 		if (counter3 === 3) {
// 			str += "Fizz";
// 			counter3 = 0;
// 		}
// 		if (counter5 === 5) {
// 			str += "Buzz";
// 			counter5 = 0;
// 		}
// 		counter3++;
// 		counter5++;
// 		result.push(str || i.toString());
// 	}
// 	return result as never;
// };

export const fizzBuzz = <N extends number>(n: N): TFizzBuzz<N> => {
	const result: string[] = [];
	for (let i = 1; i <= n; i++) {
		let str = "";
		if (i % 3 === 0) str += "Fizz";
		if (i % 5 === 0) str += "Buzz";
		result.push(str || i.toString());
	}
	return result as never;
};
