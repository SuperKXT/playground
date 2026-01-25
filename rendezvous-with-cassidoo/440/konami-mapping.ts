import type { Utils } from "../../types/utils.types.js";

const regex =
	/(?<U>.)(?:\1)(?!\1)(?<D>.)(?:\2)(?!\1|\2)((?<L>.)(?!\1|\2|\4)(?<R>.)){2}(?!\1|\2|\4|\5)(?<B>.)(?!\1|\2|\4|\5|\6)(?<A>.)/u;

type TKonamiMap<Str extends string> = Str extends `${infer U}${infer rest_1}`
	? rest_1 extends `${U}${infer D}${infer rest_2}`
		? rest_2 extends `${D}${infer L}${infer R}${infer rest_3}`
			? L extends R
				? never
				: rest_3 extends `${L}${R}${infer B}${infer A}${string}`
					? B extends A
						? never
						: Utils.prettify<
								Record<U, "U"> &
									Record<D, "D"> &
									Record<L, "L"> &
									Record<R, "R"> &
									Record<B, "B"> &
									Record<A, "A">
							>
					: never
			: never
		: never
	: never;

type TKonamiMapping<Str extends string> =
	Str extends `${infer first}${infer rest}`
		? rest extends `${first}${string}`
			? TKonamiMap<Str> | TKonamiMapping<rest>
			: TKonamiMapping<rest>
		: never;

export const konamiMapping = <Str extends string>(
	str: Str,
): TKonamiMapping<Str> => {
	const match = regex.exec(str);
	if (!match?.groups) throw new Error("Konami code not found!");
	const map = {} as Record<string, string>;
	for (const [key, value] of Object.entries(match.groups)) {
		map[value] = key;
	}
	return map as never;
};
