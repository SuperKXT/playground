/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { assertType, test } from "vitest";

import type { Utils } from "./utils.types.js";

test("test prettify type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.prettify<{ x: 1 } & { y: { a: 2 } | { b: 2 } }>,
				{ x: 1; y: { a: 2 } | { b: 2 } }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test equal type util", () => {
	interface TInt1 {
		x: 1;
	}
	interface TInt2 extends TInt1 {
		y: 2;
	}
	type TTrueTests = Utils.trueTuple<
		[
			Utils.equal<1, 1>,
			Utils.equal<1 | 2 | 3, 1 | 2 | 3>,
			Utils.equal<[1, 2, 3], [1, 2, 3]>,
			Utils.equal<[2] | [1, 2, 3], [1, 2, 3] | [2]>,
			Utils.equal<{ x: 1 } | { y: 2 }, { y: 2 } | { x: 1 }>,
			Utils.equal<{ x: 1 } & { y: 2 }, { x: 1; y: 2 }>,
			Utils.equal<TInt2, { x: 1; y: 2 }>,
			Utils.equal<
				TInt2 & { z: { a: 3; b: 4 } },
				{ x: 1; y: 2; z: { a: 3 } & { b: 4 } }
			>,
			Utils.equal<TInt2[] | TInt2, { x: 1; y: 2 }[] | { x: 1; y: 2 }>,
			Utils.equal<Record<string, unknown>, Record<string, unknown>>,

			Utils.notEqual<any, unknown>,
			Utils.notEqual<any, 1>,
			Utils.notEqual<any, never>,
			Utils.notEqual<any, {}>,
			Utils.notEqual<unknown, never>,
			Utils.notEqual<unknown, {}>,
			Utils.notEqual<1, 1 | 2 | 3>,
			Utils.notEqual<[1], [1 | 2 | 3]>,
			Utils.notEqual<{ foo: 1 }, { foo: 2 }>,
			Utils.notEqual<{ x: 1 }, Record<string, unknown>>,
			Utils.notEqual<object, Record<string, unknown>>,
		]
	>;
	assertType<TTrueTests>(true);
});

test("test satisfies type util", () => {
	type _TTests = [
		Utils.satisfies<1, 1>,
		Utils.satisfies<1 | 2 | 3, number>,
		Utils.satisfies<[1, 2, 3], unknown[]>,
		Utils.satisfies<{ x: 1; y: 2; z: 3 }, { x: 1; y: 2 }>,
		Utils.satisfies<(val: string) => void, (...args: any[]) => unknown>,
		// @ts-expect-error does not satisfies
		Utils.satisfies<1 | 2, string>,
		// @ts-expect-error does not satisfies
		Utils.satisfies<{ x: 1 }, { x: 1; y: 2 }>,
		// @ts-expect-error does not satisfies
		Utils.satisfies<[1, 2, "3"], number[]>,
	];
});

test("test dropFirst type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.dropFirst<[1, 2, 3]>, [2, 3]>,
			Utils.equal<Utils.dropFirst<[]>, []>,
			Utils.equal<Utils.dropFirst<readonly string[]>, readonly string[]>,
		]
	>;
	assertType<TTests>(true);
});

test("test tuple type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.tuple<5>, [1, 1, 1, 1, 1]>,
			Utils.equal<Utils.tuple<1, 1 | 2>, [1 | 2]>,
			Utils.equal<Utils.tuple<0, string>, []>,
			Utils.equal<Utils.tuple<1, string | { foo: 1 }>, [string | { foo: 1 }]>,
		]
	>;
	assertType<TTests>(true);
});

test("test repeatString type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.repeatString<"1", 5>, "11111">,
			Utils.equal<Utils.repeatString<"", 5>, "">,
			Utils.equal<Utils.repeatString<"", 0>, "">,
			Utils.equal<Utils.repeatString<"foo" | "bar", 2>, "foofoo" | "barbar">, // cSpell: disable-line,
		]
	>;
	assertType<TTests>(true);
});

test("test trim type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.trim<"  1   ">, "1">,
			Utils.equal<Utils.trim<"">, "">,
			Utils.equal<Utils.trim<"  foo">, "foo">,
			Utils.equal<Utils.trim<"foo  " | " bar" | "baz">, "foo" | "bar" | "baz">,
		]
	>;
	assertType<TTests>(true);
});

test("test distributedArray type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.distributedArray<1 | 2 | 3>, 1[] | 2[] | 3[]>,
			Utils.equal<Utils.distributedArray<{ foo: 1 | 2 }>, { foo: 1 | 2 }[]>,
		]
	>;
	assertType<TTests>(true);
});

test("test assertFunction type util", () => {
	const func1: Utils.assertFunction<string> = () => {
		return undefined;
	};
	const val1 = {} as unknown;
	assertType<unknown>(val1);
	func1(val1);
	assertType<string>(val1);

	const func2: Utils.assertFunction<{ foo: 1 }> = () => {
		return undefined;
	};
	const val2 = {} as unknown;
	assertType<unknown>(val2);
	func2(val2);
	assertType<{ foo: 1 }>(val2);
});

test("test keysOfType type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.keysOfType<{ foo: 1; bar: 2 }, 1 | 2>, "foo" | "bar">,
			Utils.equal<Utils.keysOfType<{ foo?: 1 }, 1 | undefined>, "foo">,
			Utils.equal<Utils.keysOfType<{ foo?: 1; bar: 2 }, 1>, never>,
			Utils.equal<Utils.keysOfType<{ foo: 1; bar: 2 }, 3>, never>,
			Utils.equal<
				Utils.keysOfType<
					{ foo: { baz: number }; bar: { baz: number | string } },
					{ baz: number }
				>,
				"foo"
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test allUnionKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.allUnionKeys<{ x: 1 } | { y: 2 }>, "x" | "y">,
			Utils.equal<Utils.allUnionKeys<{ x: 1 }>, "x">,
			Utils.equal<Utils.allUnionKeys<never>, never>,
		]
	>;
	assertType<TTests>(true);
});

test("test includeUnionKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.includeUnionKeys<{ x: 1 } | { y: 2 }>,
				{ x: 1; y?: never } | { y: 2; x?: never }
			>,
			Utils.equal<Utils.includeUnionKeys<{ x: 1 }>, { x: 1 }>,
		]
	>;
	assertType<TTests>(true);
});

test("test noUndefinedKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.noUndefinedKeys<{ x: 1; y: undefined } | { y: 2; x: undefined }>,
				{ x: 1; y: never } | { y: 2; x: never }
			>,
			Utils.equal<
				Utils.noUndefinedKeys<{ x: 1; y: undefined; z: 2 }>,
				{ x: 1; y: never; z: 2 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test strictly type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.strictly<{ foo: 1; bar: 2 }, { foo: 1 }>,
				{ foo: 1 } & { foo: 1; bar: never }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test allOrNone type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.allOrNone<{ foo: 1; bar: 2 } | { baz: 3 }>,
				| { foo: 1; bar: 2 }
				| { foo?: never; bar?: never }
				| { baz: 3 }
				| { baz?: never }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test allOrNullable type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.allOrNull<{ foo: 1; bar: 2 } | { baz?: 3 }>,
				| { foo: 1; bar: 2 }
				| { foo: null; bar: null }
				| { baz?: 3 }
				| { baz?: null }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test makeUndefinedOptional type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.makeUndefinedOptional<{ x: 1 }>, { x: 1 }>,
			Utils.equal<
				Utils.makeUndefinedOptional<{ x: 1; y: undefined; z?: 1 }>,
				{ x: 1; y?: undefined; z?: 1 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test removeIndexSignature type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.removeIndexSignature<{ x: 1; [x: PropertyKey]: number }>,
				{ x: 1 }
			>,
			Utils.equal<Utils.removeIndexSignature<{ x: 1 }>, { x: 1 }>,
		]
	>;
	assertType<TTests>(true);
});

test("test distributiveOmit type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.distributiveOmit<{ x: 1; y: 2 } | { z: 3 }, "y">,
				{ x: 1 } | { z: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test stringToUnion type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.stringToUnion<"1">, "1">,
			Utils.equal<Utils.stringToUnion<"hello">, "h" | "e" | "l" | "o">,
			Utils.equal<
				Utils.stringToUnion<"coronavirus">,
				"c" | "o" | "r" | "n" | "a" | "v" | "i" | "u" | "s"
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test unionToIntersection type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.unionToIntersection<"foo" | 42 | true>,
				"foo" & 42 & true
			>,
			Utils.equal<
				Utils.unionToIntersection<(() => "foo") | ((i: 42) => true)>,
				(() => "foo") & ((i: 42) => true)
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test takeOneFromUnion type util", () => {
	type TUnion = "foo" | 42 | true;
	type TMember = Utils.takeOneFromUnion<"foo" | 42 | true>;

	type TTests = Utils.trueTuple<
		[
			TMember extends TUnion ? true : false,
			Utils.isUnion<TMember> extends true ? false : true,
		]
	>;
	assertType<TTests>(true);
});

test("test unionToSingleTuple type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.unionToSingleTuple<"foo" | 42 | true>,
				["foo" | 42 | true, "foo" | 42 | true, "foo" | 42 | true]
			>,
			Utils.equal<
				Utils.unionToSingleTuple<(() => "foo") | ((i: 42) => true)>,
				[(() => "foo") | ((i: 42) => true), (() => "foo") | ((i: 42) => true)]
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test deepMerge type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.deepMerge<
					{ a: { b: 1; c: 2 }; c: 2 },
					{ a: { b: 11; d: 33 }; c: 1 }
				>,
				{ a: { b: 11; c: 2; d: 33 }; c: 1 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test unionToTuples type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.unionToTuples<never>, []>,
			Utils.equal<
				Utils.unionToTuples<1 | 2 | 3>,
				[1, 2, 3] | [1, 3, 2] | [2, 1, 3] | [2, 3, 1] | [3, 1, 2] | [3, 2, 1]
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test nonNullableKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.nonNullableKeys<
					{ foo: 1 | null } | { foo: 2 | null } | { foo?: 3 | null }
				>,
				{ foo: 1 } | { foo: 2 } | { foo?: 3 }
			>,
			Utils.equal<
				Utils.nonNullableKeys<
					{ foo: 1 | null | undefined; bar: 2 | null },
					"foo"
				>,
				{ foo: 1; bar: 2 | null }
			>,
			Utils.equal<
				Utils.nonNullableKeys<{
					foo: 1 | null;
					bar?: 2 | 3 | undefined;
					baz: null;
				}>,
				{ foo: 1; bar?: 2 | 3; baz: never }
			>,
			Utils.equal<
				Utils.nonNullableKeys<
					{ foo: 1 | null } | { bar: 2 | null } | { baz?: 3 },
					"foo" | "bar"
				>,
				{ foo: 1 } | { bar: 2 } | { baz?: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test nullableKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.nullableKeys<{ foo: 1 } | { foo: 2 | null } | { foo?: 3 }>,
				{ foo: 1 | null } | { foo: 2 | null } | { foo?: 3 | null }
			>,
			Utils.equal<
				Utils.nullableKeys<{ foo: 1; bar: 2 }, "foo">,
				{ foo: 1 | null; bar: 2 }
			>,
			Utils.equal<
				Utils.nullableKeys<{ foo: 1; bar?: 2 | 3; baz: 4 | null }>,
				{ foo: 1 | null; bar?: 2 | 3 | null; baz: 4 | null }
			>,
			Utils.equal<
				Utils.nullableKeys<
					{ foo: 1 } | { bar: 2 | null } | { baz?: 3 },
					"foo" | "bar"
				>,
				{ foo: 1 | null } | { bar: 2 | null } | { baz?: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test nullishKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.nullishKeys<{ foo: 1 } | { foo: 2 | null } | { foo?: 3 }>,
				| { foo: 1 | null | undefined }
				| { foo: 2 | null | undefined }
				| { foo?: 3 | null | undefined }
			>,
			Utils.equal<
				Utils.nullishKeys<{ foo: 1; bar: 2 }, "foo">,
				{ foo: 1 | null | undefined; bar: 2 }
			>,
			Utils.equal<
				Utils.nullishKeys<{ foo: 1; bar?: 2 | 3; baz: 4 | null }>,
				{
					foo: 1 | null | undefined;
					bar?: 2 | 3 | null | undefined;
					baz: 4 | null | undefined;
				}
			>,
			Utils.equal<
				Utils.nullishKeys<
					{ foo: 1 } | { bar: 2 | null } | { baz?: 3 },
					"foo" | "bar"
				>,
				| { foo: 1 | null | undefined }
				| { bar: 2 | null | undefined }
				| { baz?: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test optionalKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.optionalKeys<{ foo: 1 } | { foo: 2 | null } | { foo?: 3 }>,
				{ foo?: 1 } | { foo?: 2 | null } | { foo?: 3 }
			>,
			Utils.equal<
				Utils.optionalKeys<{ foo: 1; bar: 2 }, "foo">,
				{ foo?: 1; bar: 2 }
			>,
			Utils.equal<
				Utils.optionalKeys<{ foo: 1; bar?: 2 | 3; baz: 4 | null }>,
				{ foo?: 1; bar?: 2 | 3; baz?: 4 | null }
			>,
			Utils.equal<
				Utils.optionalKeys<
					{ foo: 1 } | { bar: 2 | null } | { baz: 3 },
					"foo" | "bar"
				>,
				{ foo?: 1 } | { bar?: 2 | null } | { baz: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test requiredKeys type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.requiredKeys<{ foo?: 1 } | { foo: 2 | null } | { foo?: 3 }>,
				{ foo: 1 } | { foo: 2 | null } | { foo: 3 }
			>,
			Utils.equal<
				Utils.requiredKeys<{ foo?: 1; bar: 2 }, "foo">,
				{ foo: 1; bar: 2 }
			>,
			Utils.equal<
				Utils.requiredKeys<{ foo?: 1; bar?: 2 | 3; baz: 4 | null | undefined }>,
				{ foo: 1; bar: 2 | 3; baz: 4 | null | undefined }
			>,
			Utils.equal<
				Utils.requiredKeys<
					{ foo?: 1 } | { bar?: 2 | null } | { baz?: 3 },
					"foo" | "bar"
				>,
				{ foo: 1 } | { bar: 2 | null } | { baz?: 3 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test extractClassProps type util", () => {
	interface TTest {
		foo: 1;
		bar: 2;
		func: () => string;
		opt?: number;
		func2: () => string;
	}
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.extractClassProps<TTest>,
				{ foo: 1; bar: 2; opt?: number }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test numberEnumFromTuple type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<
				Utils.numberEnumFromTuple<["foo", "bar", "baz"]>,
				{ foo: 0; bar: 1; baz: 2 }
			>,
			Utils.equal<
				Utils.numberEnumFromTuple<["foo", "bar"] | ["baz"]>,
				{ foo: 0; bar: 1 } | { baz: 0 }
			>,
		]
	>;
	assertType<TTests>(true);
});

test("test isUnion type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.isUnion<string>, false>,
			Utils.equal<Utils.isUnion<boolean>, true>,
			Utils.equal<Utils.isUnion<string | number>, true>,
			Utils.equal<Utils.isUnion<"a" | "b" | "c" | "d">, true>,
			Utils.equal<Utils.isUnion<undefined | null | void | "">, true>,
			Utils.equal<Utils.isUnion<{ a: string } | { a: number }>, true>,
			Utils.equal<Utils.isUnion<{ a: string | number }>, false>,
			Utils.equal<Utils.isUnion<[string | number]>, false>,
			Utils.equal<Utils.isUnion<string | never>, false>,
			Utils.equal<Utils.isUnion<string | unknown>, false>,
			Utils.equal<Utils.isUnion<string | any>, false>,
			Utils.equal<Utils.isUnion<string | "a">, false>,
			Utils.equal<Utils.isUnion<never>, false>,
		]
	>;
	assertType<TTests>(true);
});

test("test atLeast type util", () => {
	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.atLeast<string, 2>, [string, string, ...string[]]>,
			Utils.equal<
				Utils.atLeast<string, 1 | 2>,
				[string, ...string[]] | [string, string, ...string[]]
			>,
			Utils.equal<Utils.atLeast<string, number>, string[]>,
		]
	>;
	assertType<TTests>(true);
});

test("test deepReadonly type util", () => {
	type T1 = {
		a: () => 22;
		b: string;
		c: {
			d: boolean;
			e: {
				g: {
					h: {
						i: true;
						j: "string";
					};
					k: "hello";
				};
				l: [
					"hi",
					{
						m: ["hey"];
					},
				];
			};
		};
	};

	type T2 = { a: string } | { b: number; foo: () => string };

	type TExpected1 = {
		readonly a: () => 22;
		readonly b: string;
		readonly c: {
			readonly d: boolean;
			readonly e: {
				readonly g: {
					readonly h: {
						readonly i: true;
						readonly j: "string";
					};
					readonly k: "hello";
				};
				readonly l: readonly [
					"hi",
					{
						readonly m: readonly ["hey"];
					},
				];
			};
		};
	};

	type TExpected2 =
		| { readonly a: string }
		| { readonly b: number; readonly foo: () => string };

	type TTests = Utils.trueTuple<
		[
			Utils.equal<Utils.deepReadonly<T1>, TExpected1>,
			Utils.equal<Utils.deepReadonly<T2>, TExpected2>,
		]
	>;
	assertType<TTests>(true);
});
