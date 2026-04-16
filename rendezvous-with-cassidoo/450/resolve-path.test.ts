import { expect, expectTypeOf, test } from "vitest";

import { resolvePath } from "./resolve-path.js";

const fs = {
  "/a": "/b",
  "/b": "/c",
  "/c": null,
  "/loop1": "/loop2",
  "/loop2": "/loop1",
  "/real": null,
  "/alias": "/real",
};

test("testing resolvePath against test 1", () => {
	const result = resolvePath(fs, '/a');
	const expected = '/c' as string | null;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing resolvePath against test 2", () => {
	const result = resolvePath(fs, '/alias');
	const expected = '/real' as string | null;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing resolvePath against test 3", () => {
	const result = resolvePath(fs, '/loop1');
	const expected = null as string | null;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing resolvePath against test 4", () => {
	const result = resolvePath(fs, '/real');
	const expected = '/real' as string | null;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
