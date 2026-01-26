import type { Utils } from "../../types/utils.types.js";

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

const regex =
	/(?<U>.)(?:\1)(?!\1)(?<D>.)(?:\2)(?!\1|\2)((?<L>.)(?!\1|\2|\4)(?<R>.)){2}(?!\1|\2|\4|\5)(?<B>.)(?!\1|\2|\4|\5|\6)(?<A>.)/u;

export const konamiMappingRegex = <Str extends string>(
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

const tryMap = (str: string): null | Record<string, string> => {
	const u = str[0] as string;
	if (u !== str[1]) return null;
	const map = {} as Record<string, string>;
	map[u] = "U";
	const d = str[2] as string;
	if (d in map || d !== str[3]) return null;
	map[d] = "D";
	const l = str[4] as string;
	const r = str[5] as string;
	if (l === r || l in map || r in map || l !== str[6] || r !== str[7])
		return null;
	map[l] = "L";
	map[r] = "R";
	const b = str[8] as string;
	const a = str[9] as string;
	if (b === a || b in map || a in map) return null;
	map[b] = "B";
	map[a] = "A";
	return map;
};

export const konamiMappingNonRegex = <Str extends string>(
	str: Str,
): TKonamiMapping<Str> => {
	if (str.length < 10) throw new Error("Konami code not found!");
	let curr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		curr = `${str[i] as string}${curr}`;
		if (curr.length >= 10) {
			const map = tryMap(curr);
			if (map) return map as never;
		}
	}
	throw new Error("Konami code not found!");
};
