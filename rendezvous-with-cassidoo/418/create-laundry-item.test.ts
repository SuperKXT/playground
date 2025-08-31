import { assertType, expect, test } from "vitest";

import { createLaundryItem } from "./create-laundry-item.js";

import type { Utils } from "../../types/utils.types.js";
import type { TLaundryStep } from "./create-laundry-item.js";

test("testing createLaundryItem against test 1", () => {
	const laundry = createLaundryItem();
	const result = [
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
		laundry.nextCycle(),
	];
	const expected: TLaundryStep[] = [
		"soak",
		"wash",
		"rinse",
		"spin",
		"dry",
		"done",
		"done",
		"done",
	];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
