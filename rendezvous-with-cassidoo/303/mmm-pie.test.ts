/** cSpell: disable */
import { assertType, expect, test } from "vitest";

import { mmmPie } from "./mmm-pie.js";

test("should test mmmPie", () => {
	const response = mmmPie(
		[
			{ name: "Joe", num: 9 },
			{ name: "Cami", num: 3 },
			{ name: "Cassidy", num: 4 },
		],
		8,
	);
	expect(response).toBe(2);
	assertType<2>(response);
});
