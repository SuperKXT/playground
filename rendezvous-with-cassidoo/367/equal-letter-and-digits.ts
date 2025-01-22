type TIsNum<Str extends string> = Str extends `${number}` ? true : false;

type TIsEqual<
	Str extends string,
	NumCount extends 1[] = [],
	CharCount extends 1[] = [],
> = Str extends `${infer first}${infer rest}`
	? TIsEqual<
			rest,
			TIsNum<first> extends true ? [...NumCount, 1] : NumCount,
			TIsNum<first> extends true ? CharCount : [...CharCount, 1]
		>
	: NumCount["length"] extends CharCount["length"]
		? true
		: false;

type TRemoveFirst<Str extends string> = Str extends `${string}${infer rest}`
	? rest
	: "";
type TRemoveLast<Str extends string> =
	Str extends `${infer first}${infer second}${infer rest}`
		? `${first}${TRemoveLast<`${second}${rest}`>}`
		: "";

type TEqualLetterAndDigits<
	Forward extends string,
	Backward extends string = Forward,
> =
	TIsEqual<Forward> extends true
		? Forward
		: TIsEqual<Backward> extends true
			? Backward
			: TEqualLetterAndDigits<TRemoveFirst<Forward>, TRemoveLast<Backward>>;

const isEqual = (curr: string) => {
	const letters = curr.replace(/\d/gu, "").length;
	const nums = curr.length - letters;
	return nums === letters;
};

export const equalLetterAndDigits = <const Str extends string>(
	str: Str,
): TEqualLetterAndDigits<Str> => {
	for (let i = 0; i < str.length; i++) {
		const forward = str.slice(i);
		if (isEqual(forward)) return forward as never;
		const backward = str.slice(0, str.length - i);
		if (isEqual(backward)) return backward as never;
	}
	return "" as never;
};
