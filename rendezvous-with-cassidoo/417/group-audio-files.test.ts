import { expect, expectTypeOf, test } from "vitest";

import { groupAudioFiles } from "./group-audio-files.js";

test("testing groupAudioFiles against test 1", () => {
	const result = groupAudioFiles([120, 90, 60, 150, 80], 200);
	const expected = [[150], [120, 80], [90, 60]];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing groupAudioFiles against test 2", () => {
	const result = groupAudioFiles([120, 90, 60, 150, 80], 160);
	const expected = [[150], [120], [90, 60], [80]];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
