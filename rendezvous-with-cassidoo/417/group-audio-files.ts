export const groupAudioFiles = (files: number[], max: number): number[][] => {
	const res: number[][] = [];
	const set = new Set<number>();
	const sorted = files.toSorted((a, b) => b - a);
	while (set.size !== sorted.length) {
		const group = { length: 0, files: [] as number[] };
		for (const file of sorted) {
			if (set.has(file)) continue;
			if (file > max) throw new Error("Bad file duration");
			if (group.length + file <= max) {
				group.length += file;
				group.files.push(file);
				set.add(file);
			}
		}
		res.push(group.files);
	}
	return res;
};
