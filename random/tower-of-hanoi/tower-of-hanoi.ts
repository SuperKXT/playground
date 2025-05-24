type TTower = "A" | "C" | "B";
const towerMap = {
	A: { left: "B", right: "C" },
	C: { left: "A", right: "B" },
	B: { left: "C", right: "A" },
} satisfies Record<TTower, { left: TTower; right: TTower }>;

type TTowerMap = typeof towerMap;

type TStep = [TTower, TTower];

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

type TFillString<
	Size extends number,
	T extends string,
	res extends string = "",
	idx extends 1[] = [],
> = idx["length"] extends Size
	? res
	: TFillString<Size, T, `${res}${T}`, [...idx, 1]>;

type TCreateRings<
	Rings extends number,
	res extends string[] = [],
> = res["length"] extends Rings
	? res
	: TCreateRings<Rings, [...res, TFillString<[...res, 1]["length"], "-">]>;

type TIsOdd<T extends number> = `${T}` extends `${string}${1 | 3 | 5 | 7 | 9}`
	? true
	: false;

type TMoveTowers<
	towers extends Record<TTower, string[]>,
	from extends TTower,
	to extends TTower,
> = towers[from] extends [
	infer ring extends string,
	...infer updatedFrom extends string[],
]
	? {
			[k in keyof towers]: k extends from
				? updatedFrom
				: k extends to
					? [ring, ...towers[k]]
					: towers[k];
		}
	: towers;

type TFromAndTo<
	towers extends Record<TTower, string[]>,
	smallest extends TTower,
	tower1 extends TTower = smallest extends "A" ? "B" : "A",
	tower2 extends TTower = Exclude<TTower, smallest | tower1>,
> = [towers[tower1][0]] extends [undefined]
	? { from: tower2; to: tower1 }
	: towers[tower1][0] extends `${towers[tower2][0]}${string}`
		? { from: tower2; to: tower1 }
		: { from: tower1; to: tower2 };

type TTowerOfHanoi<
	Rings extends number,
	direction extends "left" | "right" = TIsOdd<Rings> extends true
		? "left"
		: "right",
	smallest extends TTower = "A",
	move extends "smallest" | "other" = "smallest",
	towers extends Record<TTower, string[]> = {
		A: TCreateRings<Rings>;
		C: [];
		B: [];
	},
	steps extends TStep[] = [],
> = steps["length"] extends 999
	? []
	: towers["B"]["length"] extends Rings
		? steps
		: move extends "smallest"
			? TTowerMap[smallest][direction] extends infer next extends TTower
				? TTowerOfHanoi<
						Rings,
						direction,
						next,
						"other",
						TMoveTowers<towers, smallest, next>,
						[...steps, [smallest, next]]
					>
				: never
			: TFromAndTo<towers, smallest> extends {
						from: infer from extends TTower;
						to: infer to extends TTower;
				  }
				? TTowerOfHanoi<
						Rings,
						direction,
						smallest,
						"smallest",
						TMoveTowers<towers, from, to>,
						[...steps, [from, to]]
					>
				: never;

export const towerOfHanoi = <Rings extends number>(
	rings: Rings,
): TTowerOfHanoi<Rings> => {
	const direction = rings % 2 === 0 ? "right" : "left";
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
			const next = towerMap[smallest][direction];
			towers[next].unshift(towers[smallest].shift() as string);
			steps.push([smallest, next]);
			smallest = next;
			move = "other";
		} else {
			const tower1 = smallest === "A" ? "B" : "A";
			const tower2 = smallest === "A" ? "C" : smallest === "B" ? "C" : "B";
			const ring1 = towers[tower1][0];
			const ring2 = towers[tower2][0] as string;
			const to = !ring1 || ring1 > ring2 ? tower1 : tower2;
			const from = to === tower1 ? tower2 : tower1;
			towers[to].unshift(towers[from].shift() as string);
			steps.push([from, to]);
			move = "smallest";
		}
	}
	return steps as never;
};
