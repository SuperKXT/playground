import { objectKeys } from "../../helpers/object.helpers.js";

const cardIdMap = {
	Mastercard: [51, 52, 53, 54, 55],
	Visa: [4],
} as const;

type TCardIdMap = typeof cardIdMap;

type TTuple<
	T extends number,
	result extends 1[] = [],
> = result["length"] extends T ? result : TTuple<T, [...result, 1]>;

type TNumberToTuple<
	T extends number,
	str extends string = `${T}`,
> = str extends `${infer first}${infer rest}`
	? first extends `${infer num extends number}`
		? [num, ...TNumberToTuple<never, rest>]
		: never
	: [];

type TDoubleNum<T extends number> = [...TTuple<T>, ...TTuple<T>]["length"] &
	number;

type TSumDigit<
	T extends number,
	digits extends string = `${T}`,
> = digits extends `${infer first extends number}${infer rest}`
	? [...TTuple<first>, ...TSumDigit<never, rest>]
	: [];

type TSumPayload<
	T extends number[],
	double extends boolean = true,
	sum extends 1[] = [],
> = T extends [...infer rest extends number[], infer last extends number]
	? TSumPayload<
			rest,
			double extends true ? false : true,
			[...sum, ...TSumDigit<double extends true ? TDoubleNum<last> : last>]
		>
	: sum["length"];

type TMod<
	T extends number,
	M extends number,
	tTuple extends 1[] = TTuple<T>,
	mTuple extends 1[] = TTuple<M>,
> = tTuple extends [...mTuple, ...infer rest extends 1[]]
	? TMod<never, never, rest, mTuple>
	: tTuple["length"];

type TSubtract<T extends number, M extends number> =
	TTuple<T> extends [...TTuple<M>, ...infer rest extends 1[]]
		? rest["length"]
		: 0;

type TVerifyLuhn<T extends number> =
	TNumberToTuple<T> extends [
		...infer payload extends number[],
		infer check extends number,
	]
		? TSubtract<
				10,
				TMod<TSumPayload<payload>, 10> extends infer m extends number
					? m extends 0
						? 10
						: m
					: 0
			> extends check
			? true
			: false
		: false;

type TStartsWith<T extends string, S extends string> = T extends `${S}${string}`
	? true
	: false;

type TCheckBrandTuple<
	T extends readonly number[],
	U extends number,
> = T extends readonly [
	infer first extends number,
	...infer rest extends number[],
]
	? TStartsWith<`${U}`, `${first}`> extends true
		? true
		: TCheckBrandTuple<rest, U>
	: false;

type TBrand<T extends number> = {
	[k in keyof TCardIdMap]: TCheckBrandTuple<TCardIdMap[k], T> extends true
		? k
		: never;
}[keyof TCardIdMap] extends infer b
	? [b] extends [never]
		? "Other"
		: b
	: never;

type TLuhnCheck<T extends number> =
	TVerifyLuhn<T> extends true
		? { valid: true; brand: TBrand<T> }
		: { valid: false };

export const luhnCheck = <T extends number>(number: T): TLuhnCheck<T> => {
	const sum = String(Math.floor(number / 10))
		.split("")
		.reverse()
		.reduce((acc, curr, i) => {
			const value = Number(curr) * ((i + 1) % 2 === 0 ? 1 : 2);
			const digitSum = String(value)
				.split("")
				.reduce((acc2, digit) => acc2 + Number(digit), 0);
			return acc + digitSum;
		}, 0);
	const check = number % 10;
	const valid = 10 - (sum % 10 || 10) === check;
	if (!valid) return { valid: false } as never;
	const brand =
		objectKeys(cardIdMap).find((key) =>
			cardIdMap[key].some((id) => String(number).startsWith(String(id))),
		) ?? "Other";
	return { valid: true, brand } as never;
};
