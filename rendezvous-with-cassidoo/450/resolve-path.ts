export const resolvePath = (fs: Record<string, string | null>, path: string): string | null => {
	const visited = new Set<string>();
	let key = path;
	while (true) {
		const val = fs[key];
		if (val === undefined) throw new Error(`path ${key} not found`);
		if (val === null) return key;
		if (visited.has(key)) return null;
		visited.add(key);
		key = val;
	}
};
