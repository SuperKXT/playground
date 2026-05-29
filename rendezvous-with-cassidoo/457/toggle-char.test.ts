import { expect, expectTypeOf, test } from "vitest";

import { toggleChar } from "./toggle-char.js";

test("testing toggleChar against test 1", () => {
	const result = toggleChar("Hello, world!");
	const expected = "hELLO, WORLD!" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing toggleChar against test 2", () => {
	const result = toggleChar("HeheHeheHEheheHeH"); // cSpell: disable-line
	const expected = "hEHEhEHEheHEHEhEh" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing toggleChar against test 3", () => {
	const result = toggleChar("This will be alternated", true);
	const expected = "ThIs WiLl Be AlTeRnAtEd" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
