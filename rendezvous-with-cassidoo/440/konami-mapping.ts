const regex =
	/(?<U>.)(?:\1)(?!\1)(?<D>.)(?:\2)(?!\1|\2)((?<L>.)(?!\1|\2|\4)(?<R>.)){2}(?!\1|\2|\4|\5)(?<B>.)(?!\1|\2|\4|\5|\6)(?<A>.)/u;

export const konamiMapping = (str: string): Record<string, string> => {
	const match = regex.exec(str);
	if (!match?.groups) throw new Error("Konami code not found!");
	const map = {} as Record<string, string>;
	for (const [key, value] of Object.entries(match.groups)) {
		map[value] = key;
	}
	return map;
};
