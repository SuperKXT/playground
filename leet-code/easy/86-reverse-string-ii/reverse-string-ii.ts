// https://leetcode.com/problems/reverse-string-ii

type TReverseString<
	S extends string,
	K extends number,
	res extends string = "",
	curr extends { reverse: string; rLen: 1[]; straight: string; sLen: 1[] } = {
		reverse: "";
		rLen: [];
		straight: "";
		sLen: [];
	},
> = S extends `${infer first}${infer rest}`
	? [1, ...curr["sLen"]]["length"] extends K
		? TReverseString<
				rest,
				K,
				`${res}${curr["reverse"]}${curr["straight"]}${first}`,
				{ reverse: ""; rLen: []; straight: ""; sLen: [] }
			>
		: curr["rLen"]["length"] extends K
			? TReverseString<
					rest,
					K,
					res,
					{
						reverse: curr["reverse"];
						rLen: curr["rLen"];
						straight: `${curr["straight"]}${first}`;
						sLen: [...curr["sLen"], 1];
					}
				>
			: TReverseString<
					rest,
					K,
					res,
					{
						reverse: `${first}${curr["reverse"]}`;
						rLen: [...curr["rLen"], 1];
						straight: curr["straight"];
						sLen: curr["sLen"];
					}
				>
	: curr["reverse"] extends ""
		? res
		: `${res}${curr["reverse"]}${curr["straight"]}`;

export const reverseString = <S extends string, K extends number>(
	s: S,
	k: K,
): TReverseString<S, K> => {
	const curr = { reverse: "", straight: "" };
	let reverse = "";
	for (const char of s) {
		if (curr.reverse.length < k) {
			curr.reverse = `${char}${curr.reverse}`;
			continue;
		}
		curr.straight += char;
		if (curr.straight.length === k) {
			reverse += `${curr.reverse}${curr.straight}`;
			curr.reverse = "";
			curr.straight = "";
		}
	}
	if (curr.reverse.length) reverse += `${curr.reverse}${curr.straight}`;
	return reverse as never;
};
