export const reorder = (arr: string[], indices: number[]): string[] => {
	const map = new Map<number, string>();
	for (let i = 0; i < arr.length; i++) {
		const str = arr[i] as string;
		const idx = indices[i];
		if (idx === undefined) throw new Error("missing index");
		map.set(idx, str);
	}
	return Array.from({ length: arr.length }, (_, idx) => map.get(idx) as string);
};
