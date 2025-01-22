export const NUMBER_PERIODS = [
	"",
	"thousand",
	"million",
	"billion",
	"trillion",
	"quadrillion",
	"quintillion",
	"sextillion",
] as const;

export const NUMBER_TENS = [
	"",
	"",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
] as const;

export const NUMBER_UNITS = [
	"",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
] as const;

type TPeriods = typeof NUMBER_PERIODS;
type TTens = typeof NUMBER_TENS;
type TUnits = typeof NUMBER_UNITS;

type TDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type TJoin<
	T extends readonly string[],
	Separator extends string = ",",
	Result extends string = "",
> = T extends [infer First extends string, ...infer Rest extends string[]]
	? TJoin<
			Rest,
			Separator,
			First extends ""
				? Result
				: Result extends ""
					? First
					: `${Result}${Separator}${First}`
		>
	: Result;

type TInt<T extends number> = `${T}` extends `${infer I extends
	number}.${string}`
	? I
	: T;

type TUnsigned<T extends number> = `${T}` extends `-${infer I extends number}`
	? I
	: T;

type THundredsTuple = [TDigit] | [TDigit, TDigit] | [TDigit, TDigit, TDigit];

type THundredsToWords<
	Type extends THundredsTuple,
	Result extends string[] = [],
> = Type extends [
	infer Hundred extends Exclude<TDigit, "0">,
	...infer Rest extends [TDigit, TDigit],
]
	? THundredsToWords<
			Rest,
			Hundred extends 0 ? [] : [TUnits[Hundred], "hundred"]
		>
	: Type extends [infer Ten extends TDigit, infer Unit extends TDigit]
		? `${Ten}${Unit}` extends `${infer I extends number}`
			? TJoin<
					[
						...Result,
						...(TUnits[I] extends Exclude<TUnits[number], "">
							? [TUnits[I]]
							: [TTens[Ten], TUnits[Unit]]),
					],
					" "
				>
			: never
		: Type extends [infer Unit extends TDigit]
			? TJoin<[...Result, TUnits[Unit]], " ">
			: never;

type TNumberToDigits<
	T extends number,
	Str extends string = `${T}` extends `-${infer I}` ? I : `${T}`,
	Result extends TDigit[] = [],
> = Str extends `${infer First extends TDigit}${infer Rest}`
	? TNumberToDigits<never, Rest, [...Result, First]>
	: Result;

type TGroupTuple<
	T extends unknown[],
	Size extends number,
	Curr extends unknown[] = [],
	Groups extends unknown[][] = [],
> = T extends [...infer Rest, infer Last]
	? [Last, ...Curr]["length"] extends Size
		? TGroupTuple<Rest, Size, [], [[Last, ...Curr], ...Groups]>
		: TGroupTuple<Rest, Size, [Last, ...Curr], Groups>
	: Curr extends []
		? Groups
		: [Curr, ...Groups];

type TFractionalToWords<
	T extends number,
	Digits extends TDigit[] = TNumberToDigits<T>,
	Result extends string[] = [],
> = Digits extends [infer First extends TDigit, ...infer Rest extends TDigit[]]
	? TFractionalToWords<never, Rest, [...Result, TUnits[First]]>
	: ` point ${TJoin<Result, " ">}`;

type TJoinNumberChunks<
	T extends number,
	Result extends string[],
	Sign extends string = `${T}` extends `-${string}` ? "minus " : "",
	Fraction extends string = `${T}` extends `${string}.${infer F extends number}`
		? TFractionalToWords<F>
		: "",
> = `${Sign}${TJoin<Result, ", ">}${Fraction}`;

type TNumberToWords<
	T extends number,
	Groups extends THundredsTuple[] = TGroupTuple<
		TNumberToDigits<TUnsigned<TInt<T>>>,
		3
	>,
	Result extends string[] = [],
	Postfix extends string = ["", ...TPeriods][Groups["length"]],
> = number extends T
	? string
	: T extends 0
		? "zero"
		: Groups extends [
					infer First extends THundredsTuple,
					...infer Rest extends THundredsTuple[],
			  ]
			? TNumberToWords<
					T,
					Rest,
					[
						...Result,
						Postfix extends ""
							? THundredsToWords<First>
							: `${THundredsToWords<First>} ${Postfix}`,
					]
				>
			: TJoinNumberChunks<T, Result>;

export const numberToWords = <T extends number>(
	number: T,
): TNumberToWords<T> => {
	if (isNaN(number)) throw new Error("invalid number!");
	if (number === 0) return "zero" as TNumberToWords<T>;
	const string = Math.trunc(Math.abs(number)).toString();

	const groups = Array.from(
		{ length: Math.ceil(string.length / 3) },
		(_, index) => {
			const start = (index + 1) * -3;
			const end = start + 3 || undefined;
			return string.slice(start, end);
		},
	);
	const groupWords = groups.map((group, index) => {
		const postFix = NUMBER_PERIODS[index];
		const digits = group.padStart(3, "0");
		const hundreds = NUMBER_UNITS[Number(digits[0])];
		const pieces = new Array<string | undefined>();
		pieces.push(hundreds);
		if (hundreds) pieces.push("hundred");
		const unit = NUMBER_UNITS[Number(digits.slice(1))];
		if (unit) {
			pieces.push(unit);
		} else {
			const tens = NUMBER_TENS[Number(digits[1])];
			const units = NUMBER_UNITS[Number(digits[2])];
			pieces.push(tens);
			pieces.push(units);
		}
		pieces.push(postFix);
		return pieces.filter(Boolean).join(" ");
	});

	const fraction = String(number)
		.split(".")[1]
		?.split("")
		.map((num) => NUMBER_UNITS[Number(num)])
		.filter(Boolean)
		.join(" ");

	const stringified = groupWords.reverse().filter(Boolean).join(", ");
	return ((number < 0 ? "minus " : "") +
		stringified +
		(fraction ? ` point ${fraction}` : "")) as TNumberToWords<T>;
};
