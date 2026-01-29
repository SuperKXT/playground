const vowels = ["a", "e", "i", "o", "u"] as const;
type TVowel = (typeof vowels)[number];
const vowelSet = new Set(vowels);

const getWord = (str: string, shouldReverse: boolean): string => {
	if (!shouldReverse) return str;
	let res = "";
	for (const char of str) {
		res = char + res;
	}
	return res;
};

type TGetWord<
	Str extends string,
	count extends number,
	total extends number,
> = count extends total
	? Str extends `${infer first}${infer rest}`
		? `${TGetWord<rest, count, total>}${first}`
		: ""
	: Str;

type TFlipWords<
	Str extends string,
	curr extends string = "",
	currCount extends Array<1> = [],
	count extends null | number = null,
	res extends string = "",
> = Str extends `${infer first}${infer rest}`
	? first extends " "
		? count extends number
			? TFlipWords<
					rest,
					"",
					[],
					count,
					`${res}${res extends "" ? "" : " "}${TGetWord<curr, currCount["length"], count>}`
				>
			: TFlipWords<
					rest,
					"",
					[],
					currCount["length"],
					`${res}${res extends "" ? "" : " "}${curr}`
				>
		: TFlipWords<
				rest,
				`${curr}${first}`,
				first extends TVowel ? [...currCount, 1] : currCount,
				count,
				res
			>
	: count extends number
		? `${res}${res extends "" ? "" : " "}${TGetWord<curr, currCount["length"], count>}`
		: `${res}${curr}`;

export const flipWords = <Str extends string>(str: Str): TFlipWords<Str> => {
	let curr = "";
	let currCount = 0;
	let count: null | number = null;
	let res = "";
	for (const char of str) {
		if (char === " ") {
			const toAdd = getWord(curr, currCount === count);
			if (count === null) count = currCount;
			curr = "";
			currCount = 0;
			res += `${res === "" ? "" : " "}${toAdd}`;
		} else {
			curr += char;
			if (vowelSet.has(char)) currCount++;
		}
	}
	if (curr !== "") {
		const toAdd = getWord(curr, currCount === count);
		res += `${res === "" ? "" : " "}${toAdd}`;
	}
	return res as never;
};
