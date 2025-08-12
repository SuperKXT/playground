import { assertType, expect, test } from "vitest";

import { groupAudioFiles } from "./group-audio-files.js";

import type { Utils } from "../../types/utils.types.js";

test("testing groupAudioFiles against test 1", () => {
	const result = groupAudioFiles([120, 90, 60, 150, 80], 200);
	const expected = [[150], [120, 80], [90, 60]];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing groupAudioFiles against test 2", () => {
	const result = groupAudioFiles([120, 90, 60, 150, 80], 160);
	const expected = [[150], [120], [90, 60], [80]];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
