// https://leetcode.com/problems/jewels-and-stones

type TJewelsStones<
	Jewels extends string,
	Stones extends string,
	count extends Array<1> = [],
> = Stones extends `${infer first}${infer rest}`
	? TJewelsStones<
			Jewels,
			rest,
			Jewels extends `${string}${first}${string}` ? [...count, 1] : count
		>
	: count["length"];

export const jewelsStones = <Jewels extends string, Stones extends string>(
	jewels: Jewels,
	stones: Stones,
): TJewelsStones<Jewels, Stones> => {
	const set = new Set(jewels.split(""));
	let count = 0;
	for (const stone of stones) {
		if (set.has(stone)) count++;
	}
	return count as never;
};
