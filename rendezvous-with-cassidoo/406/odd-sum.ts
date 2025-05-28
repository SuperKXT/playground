type TIsOdd<T extends number> = `${T}` extends `${string}${1 | 3 | 5 | 7 | 9}`
	? true
	: false;

type TIsSumOdd<A extends number, B extends number> = boolean extends
	| TIsOdd<A>
	| TIsOdd<B>
	? true
	: [];

type TOddSum<
	A extends number[],
	B extends number[],
	bCurrent extends number[] = B,
	usedB extends number = never,
> = A extends [infer aFirst extends number, ...infer aRest extends number[]]
	? bCurrent extends [
			infer bFirst extends number,
			...infer bRest extends number[],
		]
		? [TIsSumOdd<aFirst, bFirst>, bFirst extends usedB ? true : false] extends [
				true,
				false,
			]
			? [[aFirst, bFirst], ...TOddSum<aRest, B, bRest, usedB | bFirst>]
			: TOddSum<A, B, bRest, usedB>
		: TOddSum<aRest, B, B, usedB>
	: [];

export const oddSum = <const A extends number[], const B extends number[]>(
	a: A,
	b: B,
): TOddSum<A, B> => {
	const pairs: [number, number][] = [];
	const bCurrent = [...b];

	outer: for (const x of a) {
		for (let i = 0; i < bCurrent.length; i++) {
			const y = bCurrent[i] as number;
			if ((x + y) % 2 !== 0) {
				pairs.push([x, y]);
				bCurrent.splice(i, 1);
				continue outer;
			}
		}
	}
	return pairs as never;
};
