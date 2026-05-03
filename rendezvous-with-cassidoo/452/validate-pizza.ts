export const validatePizza = (
	layers: string[],
	rules: Array<[string, string]>,
): true | [string, string] => {
	const map = new Map<string, number>();
	for (let i = 0; i < layers.length; i++) map.set(layers[i] as string, i + 1);
	for (const r of rules) {
		const aVal = map.get(r[0]);
		const bVal = map.get(r[1]);
		if (!aVal || !bVal) throw new Error("invalid layer name");
		if (bVal <= aVal) return r;
	}
	return true;
};
