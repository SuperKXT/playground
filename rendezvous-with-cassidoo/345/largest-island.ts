type TVisited = Map<`${number}${number}`, true>;
type TItem = 0 | 1;

const exploreIsland = (
	arr: TItem[][],
	row: number,
	col: number,
	visited: TVisited,
): number => {
	const curr = arr[row]?.[col];
	if (!curr || visited.has(`${row}${col}`)) return 0;
	visited.set(`${row}${col}`, true);
	let length = 1;
	length += exploreIsland(arr, row, col + 1, visited);
	length += exploreIsland(arr, row, col - 1, visited);
	length += exploreIsland(arr, row + 1, col, visited);
	length += exploreIsland(arr, row - 1, col, visited);
	return length;
};

export const largestIsland = (arr: TItem[][]): number => {
	const visited = new Map<`${number}${number}`, true>();
	let largest: number = 0;
	for (let row = 0; row < arr.length; row++) {
		for (let col = 0; col < (arr[row] as TItem[]).length; col++) {
			const currLength = exploreIsland(arr, row, col, visited);
			largest = Math.max(largest, currLength);
		}
	}
	return largest;
};
