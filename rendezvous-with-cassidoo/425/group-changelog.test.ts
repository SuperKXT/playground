import { expect, expectTypeOf, test } from "vitest";

import { groupChangelog } from "./group-changelog.js";

test("testing groupChangelog against test 1", () => {
	const edits = [
		{ timestamp: "2025-10-06T08:00:00Z", component: "Header" },
		{ timestamp: "2025-10-06T08:05:00Z", component: "Header" },
		{ timestamp: "2025-10-06T08:20:00Z", component: "Header" },
		{ timestamp: "2025-10-06T08:07:00Z", component: "Footer" },
		{ timestamp: "2025-10-06T08:15:00Z", component: "Footer" },
	];
	const result = groupChangelog(edits);
	const expected = [
		{
			component: "Footer",
			start: "2025-10-06T08:07:00Z",
			end: "2025-10-06T08:15:00Z",
		},
		{
			component: "Header",
			start: "2025-10-06T08:00:00Z",
			end: "2025-10-06T08:05:00Z",
		},
		{
			component: "Header",
			start: "2025-10-06T08:20:00Z",
			end: "2025-10-06T08:20:00Z",
		},
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
