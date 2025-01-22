/** cSpell: disable */
type TTuple<
	T extends number,
	Result extends 1[] = [],
> = Result["length"] extends T ? Result : TTuple<T, [...Result, 1]>;

type TScrabbleKey = {
	EAIONRTLSU: 1;
	DG: 2;
	BCMP: 3;
	FHVWY: 4;
	K: 5;
	JX: 8;
	QZ: 10;
};

type TScrabbleKeyScore<
	T extends string,
	Keys extends keyof TScrabbleKey = keyof TScrabbleKey,
> = Keys extends `${string}${T}${string}` ? TScrabbleKey[Keys] : never;

type TScrabble<
	T extends string,
	Score extends unknown[] = [],
> = T extends `${infer First}${infer Rest}`
	? TScrabbleKeyScore<First> extends infer N extends number
		? [N] extends [never]
			? `Invalid Character ${First}`
			: TScrabble<Rest, [...Score, ...TTuple<N>]>
		: `Invalid Character ${First}`
	: Score["length"];

const onePoints = ["E", "A", "I", "O", "N", "R", "T", "L", "S", "U"];
const twoPoints = ["D", "G"];
const threePoints = ["B", "C", "M", "P"];
const fourPoints = ["F", "H", "V", "W", "Y"];
const fivePoints = ["K"];
const eightPoints = ["J", "X"];
const tenPoints = ["Q", "Z"];

export const scrabbleScore = <T extends string>(input: T): TScrabble<T> => {
	let score = 0;
	for (const letter of input.toUpperCase().split("")) {
		if (onePoints.includes(letter)) score += 1;
		else if (twoPoints.includes(letter)) score += 2;
		else if (threePoints.includes(letter)) score += 3;
		else if (fourPoints.includes(letter)) score += 4;
		else if (fivePoints.includes(letter)) score += 5;
		else if (eightPoints.includes(letter)) score += 8;
		else if (tenPoints.includes(letter)) score += 10;
		else throw new Error("invalid letter");
	}
	return score as never;
};
