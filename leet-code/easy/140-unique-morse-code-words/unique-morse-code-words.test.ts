import { assertType, expect, test } from "vitest";

import { uniqueMorseCodeWords } from "./unique-morse-code-words.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing uniqueMorseCodeWords for test 1", () => {
	const result = uniqueMorseCodeWords(["gin", "zen", "gig", "msg"]);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing uniqueMorseCodeWords for test 2", () => {
	const result = uniqueMorseCodeWords(["a"]);
	const expected = 1;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
