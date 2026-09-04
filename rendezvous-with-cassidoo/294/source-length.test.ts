import { expect, test } from "vitest";

import { getSourceLength } from "./source-length.js";

test("sourceLength should return the number of characters in its source code", async () => {
	const response = await getSourceLength();

	// this is the length of source-length.ts itself, so it has to be updated
	// whenever that file changes
	expect(response).toBe("one thousand, eight hundred ninety three");
});
