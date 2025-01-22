type TReverse<A extends string | number | bigint> =
	`${A}` extends `${infer AH}${infer AT extends string | number | bigint}`
		? `${TReverse<AT>}${AH}`
		: `${A}`;

type TDigsNext = {
	0: 1;
	1: 2;
	2: 3;
	3: 4;
	4: 5;
	5: 6;
	6: 7;
	7: 8;
	8: 9;
};

type TDigsPrev = { [K in keyof TDigsNext as TDigsNext[K]]: K };

type TAddOne<A extends string> = A extends `${infer AH extends
	number}${infer AT}`
	? AH extends 9
		? `0${TAddOne<AT>}`
		: AH extends keyof TDigsNext
			? `${TDigsNext[AH]}${AT}`
			: never
	: `1`;

type TSubOne<A> = A extends `${infer AH extends number}${infer AT}`
	? AH extends 0
		? `9${TSubOne<AT>}`
		: AH extends keyof TDigsPrev
			? `${TDigsPrev[AH]}${AT}`
			: never
	: never;

type TAdd<
	A extends string,
	B extends string,
> = A extends `${infer AH}${infer AT}`
	? B extends `${infer BH}${infer BT}`
		? BH extends "0"
			? `${AH}${TAdd<AT, BT>}`
			: TAdd<TAddOne<A>, TSubOne<B>>
		: A
	: B;

type TToNum<Str extends string> = Str extends `${infer N extends number}`
	? N
	: never;

type TMultiply<
	A extends string,
	B extends string,
	R extends string = "0",
> = A extends "0"
	? R
	: B extends "0"
		? R
		: A extends `${infer AH}${infer AT}`
			? AH extends "0"
				? TMultiply<AT, `0${B}`, R>
				: TMultiply<TSubOne<A>, B, TAdd<R, B>>
			: R;

type TSquares<
	Num extends number,
	Idx extends unknown[] = [1],
	Res extends string = "0",
> = Idx[Num] extends 1
	? TToNum<TReverse<Res>>
	: TSquares<
			Num,
			[...Idx, 1],
			TAdd<Res, TMultiply<TReverse<Idx["length"]>, TReverse<Idx["length"]>>>
		>;

export const squares = <const Num extends number>(num: Num): TSquares<Num> => {
	let res = 0;
	for (let i = 1; i <= num; i++) {
		res += i ** 2;
	}
	return res as never;
};
