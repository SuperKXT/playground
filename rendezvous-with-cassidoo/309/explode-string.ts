export const explodeString = (string: string): string[] => {
	const counts = new Map<string, number>();
	for (const char of string) {
		if (char === " ") continue;
		counts.set(char, (counts.get(char) ?? 0) + 1);
	}

	return Array.from(counts.keys())
		.sort()
		.map((char) => char.repeat(counts.get(char) as number));
};
