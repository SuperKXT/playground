type TIsAnagram<
	T extends string,
	U extends string,
> = T extends `${infer first}${infer rest}`
	? U extends `${infer before}${first}${infer after}`
		? TIsAnagram<rest, `${before}${after}`>
		: false
	: U extends ""
		? true
		: false;

export const isAnagram = <T extends string, U extends string>(
	first: T,
	second: U,
): TIsAnagram<T, U> => {
	if (first.length !== second.length) return false as never;
	const firstArray = first.toLowerCase().split("").sort();
	const secondArray = second.toLowerCase().split("").sort();
	return (firstArray.join("") === secondArray.join("")) as never;
};
