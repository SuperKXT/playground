// https://leetcode.com/problems/1-bit-and-2-bit-characters

type TOneBitChar<Bits extends number[]> = Bits extends []
	? false
	: Bits extends [unknown]
		? true
		: Bits extends [1, unknown, ...infer rest extends number[]]
			? TOneBitChar<rest>
			: Bits extends [0, ...infer rest extends number[]]
				? TOneBitChar<rest>
				: false;

export const oneBitChar = <const Bits extends number[]>(
	bits: Bits,
): TOneBitChar<Bits> => {
	let i = bits.length;
	while (i > 1) {
		const curr = bits[bits.length - i];
		i--;
		if (curr === 1) i--;
	}
	return (i === 1) as never;
};
