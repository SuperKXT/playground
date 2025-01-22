type TSolution = {
	part1: number;
	part2: number;
};

type TCoordInput = {
	row: number;
	col: number;
};

class Coord {
	row: number;
	col: number;

	constructor(input: TCoordInput) {
		this.row = input.row;
		this.col = input.col;
	}

	equals(coord: Coord) {
		return this.row === coord.row && this.col === coord.col;
	}

	existsIn(coords: Coord[]) {
		return coords.some(
			(coord) => coord.row === this.row && coord.col === this.col,
		);
	}
}

type TMapRow = ("." | "#" | "+" | "o")[];
type TMap = TMapRow[];

const SOURCE = new Coord({ col: 500, row: 0 });
const ROW_LENGTH = SOURCE.col * 2;

const getLanding = (
	map: TMap,
	row: number = SOURCE.row,
	col: number = SOURCE.col,
): Coord | null => {
	const mapRow = map[row];
	if (!mapRow || mapRow[col] !== "." || !map[row + 1]) return null;

	const colOffset = [0, -1, 1].find(
		(offset) => map[row + 1]?.[col + offset] === ".",
	);
	if (colOffset !== undefined) return getLanding(map, row + 1, col + colOffset);

	return new Coord({ col, row });
};

export const sandTetris = (input: string): TSolution => {
	const solution: TSolution = {
		part1: 0,
		part2: 0,
	};

	const paths = input.split("\n").map((row) =>
		row.split(" -> ").map(
			(coords) =>
				new Coord({
					col: Number(coords.split(",")[0]),
					row: Number(coords.split(",")[1]),
				}),
		),
	);

	const start = new Coord({ col: Infinity, row: 0 });
	const end = new Coord({ col: 500, row: -Infinity });

	const rocks = paths.reduce<Coord[]>(
		(current, path) =>
			current.concat(
				path.reduce((pathRocks: Coord[], from, index) => {
					const to = path[index + 1];
					if (!to) return pathRocks;

					if (from.existsIn(current) && to.existsIn(current)) return pathRocks;

					const direction =
						to.row < from.row
							? "left"
							: to.row > from.row
								? "right"
								: to.col < from.col
									? "up"
									: "down";

					const curr = new Coord(from);

					while (true) {
						if (curr.row > end.row) end.row = curr.row;

						if (curr.col < start.col) start.col = curr.col;

						if (curr.col > end.col) end.col = curr.col;

						if (!curr.existsIn(current)) pathRocks.push(new Coord(curr));

						if (curr.equals(to)) break;

						switch (direction) {
							case "left":
								curr.row--;
								break;
							case "right":
								curr.row++;
								break;
							case "up":
								curr.col--;
								break;
							case "down":
								curr.col++;
								break;
						}
					}

					return pathRocks;
				}, []),
			),
		[],
	);

	const part1Map: TMap = [...new Array<undefined>(end.row + 1)].map<TMapRow>(
		() => [...new Array<".">(ROW_LENGTH)].fill("."),
	);
	rocks.forEach(({ row, col }) => {
		const mapRow = part1Map[row];
		if (mapRow) (part1Map[row] as TMapRow)[col] = "#";
	});
	const part2Map: TMap = structuredClone(part1Map);
	part2Map.push(
		new Array<".">(ROW_LENGTH).fill("."),
		new Array<"#">(ROW_LENGTH).fill("#"),
	);

	while (true) {
		const coord = getLanding(part1Map);
		if (!coord) break;

		const { row, col } = coord;
		(part1Map[row] as TMapRow)[col] = "o";
		solution.part1++;
	}

	while (true) {
		const coord = getLanding(part2Map);
		if (!coord) break;

		const { row, col } = coord;
		(part2Map[row] as TMapRow)[col] = "o";
		solution.part2++;
	}

	return solution;
};
