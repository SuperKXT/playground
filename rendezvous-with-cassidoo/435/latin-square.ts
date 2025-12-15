type TTuple<
	Size extends number,
	res extends number[] = [],
> = res["length"] extends Size
	? res
	: TTuple<Size, [...res, [...res, 1]["length"]]>;

type _TLatinSquare<
	Tup extends number[],
	res extends number[][] = [],
> = res["length"] extends Tup["length"]
	? res
	: _TLatinSquare<
			Tup extends [infer first, ...infer rest] ? [...rest, first] : Tup,
			[...res, Tup]
		>;

type TLatinSquare<N extends number> = _TLatinSquare<TTuple<N>>;

export const latinSquare = <N extends number>(n: N): TLatinSquare<N> => {
	const arr = Array.from({ length: n }, (_, i) => i + 1);
	const res: number[][] = [];
	for (let i = 0; i < n; i++) {
		res.push(Array.from(arr));
		arr.splice(arr.length, 0, ...arr.splice(0, 1));
	}
	return res as never;
};
