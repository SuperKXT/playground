import type { Utils } from "../../types/utils.types.js";

type TCreateMap<
	S extends string,
	map extends Record<string, Array<1>> = {},
> = S extends `${infer c}${infer rest}`
	? TCreateMap<
			rest,
			Omit<map, c> &
				Record<
					c,
					map[c] extends infer existing extends Array<1>
						? [...existing, 1]
						: [1]
				>
		>
	: Utils.prettify<map>;

type TMaxPatternCopies<
	S extends string,
	Pattern extends string,
	curr extends string = Pattern,
	map extends Record<string, Array<1>> = TCreateMap<S>,
	count extends Array<1> = [],
> = curr extends `${infer c}${infer restStr}`
	? map[c] extends [1, ...infer restArr extends Array<1>]
		? TMaxPatternCopies<
				S,
				Pattern,
				restStr,
				Omit<map, c> & Record<c, restArr>,
				count
			>
		: map["?"] extends [1, ...infer restArr extends Array<1>]
			? TMaxPatternCopies<
					S,
					Pattern,
					restStr,
					Omit<map, "?"> & Record<"?", restArr>,
					count
				>
			: count["length"]
	: TMaxPatternCopies<S, Pattern, Pattern, map, [...count, 1]>;

export const maxPatternCopies = <S extends string, Pattern extends string>(
	s: S,
	pattern: Pattern,
): TMaxPatternCopies<S, Pattern> => {
	const map = new Map<string, number>();
	for (const c of s) map.set(c, (map.get(c) ?? 0) + 1);
	let count = 0;
	outer: while (true) {
		for (const c of pattern) {
			const cVal = map.get(c);
			const wVal = map.get("?");
			const curr = cVal || wVal;
			if (!curr) break outer;
			if (cVal) map.set(c, curr - 1);
			else map.set("?", curr - 1);
		}
		count++;
	}
	return count as never;
};
