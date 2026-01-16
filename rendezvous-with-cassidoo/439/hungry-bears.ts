import { inPlaceInsertToSortedArray } from "../../helpers/array.helpers.js";

export type TBear = { name: string; hunger: number };

export const hungryBearsImmutable = (bears: TBear[]): string[] => {
	const avg = bears.reduce((acc, cur) => acc + cur.hunger, 0) / bears.length;
	return bears
		.filter((r) => r.hunger > avg)
		.toSorted((a, b) => a.name.localeCompare(b.name))
		.map((r) => r.name);
};

const compareFn = (a: string, b: string) => a.localeCompare(b);

export const hungryBearsMutable = (bears: TBear[]): string[] => {
	const avg = bears.reduce((acc, cur) => acc + cur.hunger, 0) / bears.length;
	const res: string[] = [];
	for (const bear of bears) {
		if (bear.hunger > avg)
			inPlaceInsertToSortedArray(res, bear.name, compareFn);
	}
	return res;
};
