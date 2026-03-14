type TShift<Arr extends unknown[]> = Arr extends [unknown, ...infer tail]
	? tail
	: [];

type TMajorityElement<
	Arr extends number[],
	Seq extends number = 0,
	Count extends unknown[] = [],
> = Arr extends [infer num extends number, ...infer rest extends number[]]
	? Count extends []
		? TMajorityElement<rest, num, [1]>
		: TMajorityElement<rest, Seq, Seq extends num ? [...Count, 1] : TShift<Arr>>
	: Seq;

export const majorityElement = <const Arr extends number[]>(
	arr: Arr,
): TMajorityElement<Arr> => {
	let seq = 0;
	let count = 0;
	for (const num of arr) {
		if (count === 0) {
			seq = num;
			count = 1;
		} else if (num === seq) {
			count++;
		} else {
			count--;
		}
	}
	return seq as never;
};
