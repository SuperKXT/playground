type TTower = "A" | "C" | "B";
const towerMap: Record<TTower, { left: TTower; right: TTower }> = {
	A: { left: "B", right: "C" },
	C: { left: "A", right: "B" },
	B: { left: "C", right: "A" },
};
export type TStep = [TTower, TTower];

const getPadded = (val: string, rings: number) => {
	const pad = (rings - val.length) / 2;
	const left = " ".repeat(Math.ceil(pad));
	const right = " ".repeat(Math.floor(pad));
	return `${left}${val}${right}`;
};

const _getTowerString = (rings: number, towers: Record<TTower, string[]>) => {
	let str = "";
	const towerArr = Object.values(towers).map((arr) => [
		...Array.from({ length: rings - arr.length }, () => ""),
		...arr,
	]);
	const header = [
		getPadded("A", rings),
		getPadded("C", rings),
		getPadded("B", rings),
	];
	str += header.join(" | ");
	str += "\n";

	for (let i = 0; i < rings; i++) {
		const row = [] as string[];
		for (const tower of towerArr) {
			const curr = tower[i] ?? "";
			row.push(getPadded(curr, rings));
		}
		str += row.join(" | ");
		str += "\n";
	}
	return `${str}\n`;
};

export const towerOfHanoi = (rings: number): TStep[] => {
	const smallestDirection = rings % 2 === 0 ? "right" : "left";

	let smallest = "A" as TTower;
	let move: "smallest" | "other" = "smallest";
	const towers = {
		A: Array.from({ length: rings }, (_, idx) => "-".repeat(idx + 1)),
		C: [] as string[],
		B: [] as string[],
	};
	const steps: TStep[] = [];

	while (towers.B.length !== rings) {
		if (move === "smallest") {
			const next = towerMap[smallest][smallestDirection];
			towers[next].unshift(towers[smallest].shift() as string);
			steps.push([smallest, next]);
			smallest = next;
			move = "other";
		} else {
			const tower1 = smallest === "A" ? "B" : smallest === "B" ? "A" : "A";
			const tower2 = smallest === "A" ? "C" : smallest === "B" ? "C" : "B";
			const ring1 = towers[tower1].shift() as string;
			const ring2 = towers[tower2].shift() as string;
			const to = !ring1 || ring1 > ring2 ? tower1 : tower2;
			const from = to === tower1 ? tower2 : tower1;
			const toAdd = [] as string[];
			if (ring1) toAdd.push(ring1);
			if (ring2) toAdd.push(ring2);
			towers[to].unshift(...toAdd.sort());
			steps.push([from, to]);
			move = "smallest";
		}
	}
	return steps;
};
