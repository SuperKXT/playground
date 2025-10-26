import { assertType, expect, test } from "vitest";

import { splitByWidths } from "./split-by-widths.js";

import type { Utils } from "../../types/utils.types.js";

test("testing splitByWidths against test 1", () => {
	const result = splitByWidths("Supercalifragilisticexpialidocious", [5, 9, 4]);
	// cSpell: disable
	const expected = [
		"Super",
		"califragi",
		"list",
		"icex",
		"pial",
		"idoc",
		"ious",
	] as const;
	// cSpell: enable
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
