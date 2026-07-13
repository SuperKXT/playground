/* eslint-disable @typescript-eslint/no-non-null-assertion */
type TDirection = "right" | "down" | "left" | "up";
const nextDirectionMap = {
	right: "down",
	down: "left",
	left: "up",
	up: "right",
} as const;

type TNextDirectionMap = typeof nextDirectionMap;

export const spiralGrid = (n: number): string => {
	const digits = n.toString().length;
	const size = Math.ceil(Math.sqrt(n + 1));
	const grid = Array.from({ length: size }, () =>
		Array.from({ length: size }, () => " ".repeat(digits)),
	);
	let curr = 0;
	let direction = "right" as TDirection;
	let directionIdx = 0;
	const indices = {
		up: 0,
		left: 0,
		right: size - 1,
		down: size - 1,
	};
	while (curr <= n) {
		const str = curr.toString().padStart(digits, " ");
		if (direction === "right") {
			grid[indices.up]![directionIdx] = str;
			directionIdx++;
			if (directionIdx > indices.right) {
				direction = nextDirectionMap[direction];
				indices.up++;
				directionIdx = indices.up;
			}
		} else if (direction === "down") {
			grid[directionIdx]![indices.right] = str;
			directionIdx++;
			if (directionIdx > indices.down) {
				direction = nextDirectionMap[direction];
				indices.right--;
				directionIdx = indices.right;
			}
		} else if (direction === "left") {
			grid[indices.down]![directionIdx] = str;
			directionIdx--;
			if (directionIdx < indices.left) {
				direction = nextDirectionMap[direction];
				indices.down--;
				directionIdx = indices.down;
			}
		} else {
			grid[directionIdx]![indices.left] = str;
			directionIdx--;
			if (directionIdx < indices.up) {
				direction = nextDirectionMap[direction];
				indices.left++;
				directionIdx = indices.left;
			}
		}
		curr++;
	}
	return grid.map((row) => row.join(" ")).join("\n");
};
