type TResolvePath<
	Fs extends Record<string, string | null>,
	Path extends string,
	Visited extends string = never,
> = Path extends keyof Fs
	? Fs[Path] extends string
		? Path extends Visited
			? null
			: TResolvePath<Fs, Fs[Path], Visited | Path>
		: Path
	: never;

export const resolvePath = <
	Fs extends Record<string, string | null>,
	Path extends string,
>(
	fs: Fs,
	path: Path,
): TResolvePath<Fs, Path> => {
	const visited = new Set<string>();
	let key = path as string;
	while (true) {
		const val = fs[key];
		if (val === undefined) throw new Error(`path ${key} not found`);
		if (val === null) return key as never;
		if (visited.has(key)) return null as never;
		visited.add(key);
		key = val;
	}
};
