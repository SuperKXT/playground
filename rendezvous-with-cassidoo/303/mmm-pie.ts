type TPerson = {
	name: string;
	num: number;
};

type TTuple<T extends number, R extends 1[] = []> = R["length"] extends T
	? R
	: TTuple<T, [...R, 1]>;

type TRequiredPieces<
	T extends readonly TPerson[],
	result extends unknown[] = [],
> = T extends readonly [infer F extends TPerson, ...infer R extends TPerson[]]
	? TRequiredPieces<R, [...result, ...TTuple<F["num"]>]>
	: result;

type TMmmPie<
	People extends readonly Readonly<TPerson>[],
	Pieces extends number,
	PiecesTuple extends unknown[] = TTuple<Pieces>,
	RequiredTuple extends unknown[] = TRequiredPieces<People>,
	Result extends unknown[] = [],
> = RequiredTuple extends [...PiecesTuple, ...infer R]
	? TMmmPie<never, never, PiecesTuple, R, [...Result, 1]>
	: RequiredTuple extends []
		? Result["length"]
		: [...Result, 1]["length"];

export const mmmPie = <
	const People extends readonly TPerson[],
	Pieces extends number,
>(
	people: People,
	pieces: Pieces,
): TMmmPie<People, Pieces> => {
	const requiredPieces = people.reduce((acc, curr) => acc + curr.num, 0);
	return Math.ceil(requiredPieces / pieces) as never;
};
