import { assertType, expect, test } from "vitest";

import { csvToList } from "./csv-to-list.js";

import type { Utils } from "../../types/utils.types.js";

test("testing groupChangelog against test 1", () => {
	const result = csvToList(
		'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"', // cSpell: disable-line
	);
	// cSpell: disable
	const expected = `
- Ryu, Mi-yeong, age 30, from Seoul
- Zoey, age 24, from Burbank
`;
	// cSpell: enable
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
