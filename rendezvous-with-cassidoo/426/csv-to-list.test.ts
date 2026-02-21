import { expect, expectTypeOf, test } from "vitest";

import { csvToList } from "./csv-to-list.js";

test("testing groupChangelog against test 1", () => {
	const result = csvToList(
		'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"', // cSpell: disable-line
	);
	// cSpell: disable
	const expected = `
- Ryu, Mi-yeong, age 30, from Seoul
- Zoey, age 24, from Burbank
` as const;

	// cSpell: enable
	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
