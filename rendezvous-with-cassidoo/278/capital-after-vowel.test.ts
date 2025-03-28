import { expect, test } from "vitest";

import { capitalAfterVowel } from "./capital-after-vowel.js";

type TTest = {
	input: string;
	output: string;
};

const TESTS: TTest[] = [
	{ input: "hello world", output: "heLlo WoRld" },
	/** cSpell: disable-next-line */
	{ input: "xaabeuekadii", output: "xaaBeueKaDii" },
	{ input: "ab", output: "aB" },
];
test.each(TESTS)("testing capitalAfterVowel", ({ input, output }) => {
	expect(capitalAfterVowel(input)).toStrictEqual({
		withRegex: output,
		withoutRegex: output,
	});
});
