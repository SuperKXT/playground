import type { Utils } from "../../../types/utils.types.js";

type TRow = 0 | 1 | 2 | 3 | 4;

type TCol = 0 | 1 | 2 | 3 | 4 | 5;

type TPosition = {
	row: TRow;
	col: TCol;
};

const MOVE = ["R", "L", "U", "D"] as const;
type TMove = (typeof MOVE)[number];

const isMove = (value: unknown): value is TMove =>
	typeof value === "string" && MOVE.includes(value);

const getUniquePositions = (array: TPosition[]) => {
	return array.reduce<TPosition[]>((positions, current) => {
		const duplicate = positions.some(
			(position) =>
				current.row === position.row && current.col === position.col,
		);
		if (!duplicate) positions.push(current);

		return positions;
	}, []);
};

export const ropeBridge = (
	input: string,
	start: TPosition = { col: 0, row: 0 },
): {
	firstTail: number;
	lastTail: number;
} => {
	const rope = Array.from({ length: 10 }, () => [{ ...start }]) as Utils.tuple<
		9,
		TPosition[]
	>;

	const head = rope.at(0) as TPosition[];
	const firstTail = rope.at(1) as TPosition[];
	const lastTail = rope.at(-1) as TPosition[];

	for (const current of input.split("\n")) {
		const [direction, repeat] = current.split(" ");
		if (!isMove(direction) || isNaN(Number(repeat))) continue;

		[...new Array<undefined>(Number(repeat))].forEach(() => {
			const headPosition = { ...head.at(-1) } as TPosition;

			switch (direction) {
				case "R":
					headPosition.col++;
					break;
				case "L":
					headPosition.col--;
					break;
				case "U":
					headPosition.row--;
					break;
				case "D":
					headPosition.row++;
					break;
			}
			head.push(headPosition);

			for (const tail of rope.slice(1)) {
				const index = rope.indexOf(tail);
				const last = rope.at(index - 1) as TPosition[];

				const lastTailPosition = last.at(-1) as TPosition;
				const tailPosition = { ...tail.at(-1) } as TPosition;

				const areAdjacent =
					Math.abs(lastTailPosition.row - tailPosition.row) < 2 &&
					Math.abs(lastTailPosition.col - tailPosition.col) < 2;

				const updateKnot = (key: "col" | "row") => {
					if (areAdjacent) return;

					if (tailPosition[key] > lastTailPosition[key]) tailPosition[key]--;
					else if (tailPosition[key] < lastTailPosition[key])
						tailPosition[key]++;
				};

				updateKnot("row");
				updateKnot("col");
				tail.push(tailPosition);
			}
		});
	}

	return {
		firstTail: getUniquePositions(firstTail).length,
		lastTail: getUniquePositions(lastTail).length,
	};
};
