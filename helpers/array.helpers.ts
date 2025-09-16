export const areArraysEqual = <Type extends unknown[]>(
	first: Type,
	second: Type,
): boolean => {
	if (first.length !== second.length) return false;

	for (let index = 0; index < first.length; index++)
		if (first[index] !== second[index]) return false;

	return true;
};

export const inPlaceInsertToSortedArray = (
	arr: number[],
	value: number,
): void => {
	let low = 0;
	let high = arr.length - 1;
	let idx = 0;
	while (true) {
		if (low >= high) {
			idx = high;
			break;
		}
		const mid = Math.floor((low + high) / 2);
		const midVal = arr[mid] as number;
		if (midVal === value) {
			idx = mid;
			break;
		} else if (midVal < value) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	const idxVal = arr[idx] as number;
	arr.splice(idxVal > value ? idx : idx + 1, 0, value);
};

export const filterInPlace = <T>(
	array: T[],
	check: (row: NoInfer<T>) => boolean,
): number => {
	let removed = 0;
	for (let i = 0; i < array.length; i++) {
		const shouldKeep = check(array[i] as T);
		if (shouldKeep) continue;
		removed++;
		array.splice(i, 1);
		i -= 1;
	}
	return removed;
};
