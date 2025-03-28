import { expect, test } from "vitest";

import { parenthesisSubstring } from "./parenthesis-substring.js";

const TESTS = [
	{ solution: 2, string: "(()(" },
	{ solution: 6, string: ")()(()))" },
	{ solution: 10, string: ")()(()(()))" },
	{ solution: 4, string: "())(())" },
];
test.each(TESTS)("testing parenthesisSubstring", ({ string, solution }) => {
	const response = parenthesisSubstring(string);
	expect(response).toStrictEqual(solution);
});
