// https://leetcode.com/problems/license-key-formatting

type TReverse<S extends string> = S extends `${infer first}${infer rest}`
	? `${TReverse<rest>}${first}`
	: S;

type TDigit = `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`;
type TLowercase =
	| `a`
	| `b`
	| `c`
	| `d`
	| `e`
	| `f`
	| `g`
	| `h`
	| `i`
	| `j`
	| `k`
	| `l`
	| `m`
	| `n`
	| `o`
	| `p`
	| `q`
	| `r`
	| `s`
	| `t`
	| `u`
	| `v`
	| `w`
	| `x`
	| `y`
	| `z`;

type TUppercase = Uppercase<TLowercase>;

type TLicenseKey<
	S extends string,
	K extends number,
	reversed extends string = TReverse<S>,
	curr extends string = "",
	len extends 1[] = [1],
	res extends string = "",
> = reversed extends `${infer first}${infer rest}`
	? first extends TDigit | TLowercase | TUppercase
		? len["length"] extends K
			? TLicenseKey<
					never,
					K,
					rest,
					"",
					[1],
					`${Uppercase<first>}${curr}${res extends "" ? "" : `-${res}`}`
				>
			: TLicenseKey<
					never,
					K,
					rest,
					`${Uppercase<first>}${curr}`,
					[...len, 1],
					res
				>
		: TLicenseKey<never, K, rest, curr, len, res>
	: curr extends ""
		? res
		: `${curr}${res extends "" ? "" : `-${res}`}`;

export const licenseKey = <S extends string, K extends number>(
	s: S,
	k: K,
): TLicenseKey<S, K> => {
	let curr = "";
	let res = "";
	for (let id = s.length - 1; id >= 0; id--) {
		const char = s[id] as string;
		const code = char.charCodeAt(0);
		const isDigit = code >= 48 && code <= 57;
		const isLowercase = code >= 97 && code <= 122;
		const isUppercase = code >= 65 && code <= 90;
		if (!isDigit && !isLowercase && !isUppercase) continue;
		curr = `${char.toUpperCase()}${curr}`;
		if (curr.length === k) {
			res = `${curr}${res === "" ? "" : `-${res}`}`;
			curr = "";
		}
	}
	if (curr) res = `${curr}${res === "" ? "" : `-${res}`}`;
	return res as never;
};
