type TTupleAdd<
	Size extends number,
	Tuple extends number[] = [],
	idx extends Array<1> = [],
> = idx["length"] extends Size
	? Tuple
	: TTupleAdd<Size, [...Tuple, Size], [...idx, 1]>;

type TRepeatedIntegers<
	N extends number,
	res extends number[] = [],
	idx extends Array<1> = [],
> = idx["length"] extends N
	? TTupleAdd<idx["length"], res>
	: TRepeatedIntegers<N, TTupleAdd<idx["length"], res>, [...idx, 1]>;

export const repeatedIntegers = <N extends number>(
	n: N,
): TRepeatedIntegers<N> => {
	const res: number[] = [];
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			res.push(i);
		}
	}
	return res as never;
};
