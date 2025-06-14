/* eslint-disable @typescript-eslint/naming-convention */

type _repeatString<
	S extends string,
	N extends number,
	T extends 1[] = [],
> = T["length"] extends N ? "" : `${S}${_repeatString<S, N, [...T, 1]>}`;

type _tuple<N extends number, T, R extends readonly T[]> = R["length"] extends N
	? R
	: _tuple<N, T, [T, ...R]>;

type _atLeast<
	T,
	N extends number,
	Res extends readonly T[] = [],
> = Res["length"] extends N ? [...Res, ...T[]] : _atLeast<T, N, [...Res, T]>;

type _equal<T, U> =
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
	(<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2
		? true
		: false;

type _recursivePrettify<T> = {
	[k in keyof T]: T[k] extends object ? _recursivePrettify<T[k]> : T[k];
} & {};

type _unionToSingleTuple<
	union,
	remaining extends union = union,
	curr extends remaining = remaining,
> = [remaining] extends [never]
	? []
	: curr extends curr
		? [union, ..._unionToSingleTuple<union, Exclude<remaining, curr>>]
		: never;

export declare namespace Utils {
	/** types that resolve as falsy  */
	type falsy = false | "" | 0 | null | undefined;

	/** type helper to prettify complex object types */
	type prettify<T> = { [k in keyof T]: T[k] } & {};

	/** checks if the two given types are the same */
	type equal<T, U> = [T, U] extends [object, object]
		? _equal<_recursivePrettify<T>, _recursivePrettify<U>>
		: _equal<T, U>;

	type not<T extends boolean> = T extends true ? false : true;

	type notEqual<T, U> = equal<T, U> extends true ? false : true;

	type trueTuple<T extends true[]> = T[number] extends true ? true : false;

	/** checks if the first type satisfies the second */
	type satisfies<T extends U, U> = T;

	type dropFirst<T extends readonly unknown[]> = number extends T["length"]
		? T
		: T extends readonly [unknown, ...infer U]
			? U
			: [];

	/** global type helper to repeat a type `N` times in a tuple */
	type tuple<N extends number, T = 1> = N extends N
		? number extends N
			? T[]
			: _tuple<N, T, []>
		: never;

	/** global type helper to repeat a string `N` times in a string literal type */
	type repeatString<S extends string, N extends number> = S extends S
		? _repeatString<S, N>
		: never;

	/** trim the empty spaces from the start and end of the string */
	type trim<str extends string> = str extends
		| ` ${infer trimmed}`
		| `${infer trimmed} `
		? trim<trimmed>
		: str;

	/** global type helper to create a union array type from a union type */
	type distributedArray<T> = T extends infer I ? I[] : never;

	/** global type helper to be able to use arrow functions for assertions */
	type assertFunction<Type> = (value: unknown) => asserts value is Type;

	/** return only the keys of the object whose value is assignable to the given type */
	type keysOfType<T, Match> = {
		[k in keyof T]-?: T[k] extends Match ? k : never;
	}[keyof T];

	/** Return a union of keys from all objects in the union */
	type allUnionKeys<T> = T extends infer U ? keyof U : never;

	/** returns a uniformed union of objects by adding missing keys in each union */
	type includeUnionKeys<T extends Record<string, unknown>, U = T> = U extends U
		? prettify<
				{
					[K in keyof U]: U[K];
				} & Partial<Record<Exclude<allUnionKeys<T>, keyof U>, never>>
			>
		: never;

	/** Disallow explicitly undefined value for object keys. Used when generic param is constrained to `Partial<ObjType>` */
	type noUndefinedKeys<T extends object> = {
		[k in keyof T]: T[k] extends undefined ? never : T[k];
	};

	/** matches a type to another exactly. Used with generic functions to make sure the object type matches exactly */
	type strictly<T, Shape> = Shape & {
		[k in keyof T]: k extends keyof Shape ? Shape[k] : never;
	};

	/** creates a union of the given object or an object where all the keys of the object are undefined */
	type allOrNone<T extends object> = T | { [k in keyof T]?: never };

	/** creates a union of the given object or an object where all the keys of the object are null */
	type allOrNull<T extends object> = T | { [k in keyof T]: null };

	/** make keys that can be undefined optional in the object */
	type makeUndefinedOptional<T extends object> = prettify<
		{
			[k in keyof T as undefined extends T[k] ? k : never]?: T[k];
		} & {
			[k in keyof T as undefined extends T[k] ? never : k]: T[k];
		}
	>;

	/** remove index signatures from an object type */
	type removeIndexSignature<T extends object> = {
		[k in keyof T as string extends k
			? never
			: number extends k
				? never
				: symbol extends k
					? never
					: k]: T[k];
	};

	/** omit utility that distributes over the union */
	type distributiveOmit<T, K extends PropertyKey> = T extends T
		? Omit<T, K>
		: never;

	/** takes a string literal as input and returns the union of all the characters */
	type stringToUnion<T extends string> = T extends `${infer U}${infer V}`
		? U | stringToUnion<V>
		: never;

	/** takes a union of types and converts it into intersection of the types */
	type unionToIntersection<T> = (
		T extends unknown ? (x: T) => unknown : never
	) extends (x: infer U) => unknown
		? U
		: never;

	/** takes one type from a union of types */
	type takeOneFromUnion<T> =
		unionToIntersection<T extends T ? (x: T) => 0 : never> extends (
			x: infer U,
		) => 0
			? U
			: never;

	/** converts a union to a single tuple where each member is of union type */
	type unionToSingleTuple<union> = _unionToSingleTuple<union>;

	/** merge two objects together. the second object has priority */
	type deepMerge<T extends object, U extends object> = prettify<{
		[k in keyof T | keyof U]: k extends keyof U
			? k extends keyof T
				? T[k] extends object
					? U[k] extends object
						? deepMerge<T[k], U[k]>
						: U[k]
					: U[k]
				: U[k]
			: k extends keyof T
				? T[k]
				: never;
	}>;

	/** convert a given union to a union of permutation of tuples */
	type unionToTuples<T, U = T> = [T] extends [never]
		? []
		: U extends U
			? [U, ...unionToTuples<Exclude<T, U>>]
			: [];

	/** make the given keys (all if second arg is omitted) of an object non-nullable (null and undefined are removed) */
	type nonNullableKeys<
		obj,
		keys extends allUnionKeys<obj> = allUnionKeys<obj>,
	> = {
		[k in keyof obj]: k extends keys ? NonNullable<obj[k]> : obj[k];
	};

	/** make the given keys (all if second arg is omitted) of an object nullable */
	type nullableKeys<obj, keys extends allUnionKeys<obj> = allUnionKeys<obj>> = {
		[k in keyof obj]: k extends keys ? obj[k] | null : obj[k];
	};

	/** make the given keys (all if second arg is omitted) of an object optional */
	type optionalKeys<
		obj,
		keys extends allUnionKeys<obj> = allUnionKeys<obj>,
	> = obj extends obj
		? prettify<
				{
					[k in keyof obj as k extends keys ? never : k]: obj[k];
				} & {
					[k in keyof obj as k extends keys ? k : never]?: obj[k];
				}
			>
		: never;

	/** make the given keys (all if second arg is omitted) of an object required */
	type requiredKeys<
		obj,
		keys extends allUnionKeys<obj> = allUnionKeys<obj>,
	> = obj extends obj
		? prettify<
				{
					[k in keyof obj as k extends keys ? never : k]: obj[k];
				} & {
					[k in keyof obj as k extends keys ? k : never]-?: obj[k];
				}
			>
		: never;

	/** extract the properties of a class */
	type extractClassProps<T> = {
		[k in keyof T as T[k] extends (...args: any[]) => unknown
			? never
			: k]: T[k];
	};

	type numberEnumFromTuple<Tuple extends readonly string[]> =
		Tuple extends Tuple
			? Utils.prettify<{
					-readonly [k in keyof Omit<Tuple, keyof unknown[]> as Tuple[k] &
						PropertyKey]: k & string extends `${infer num extends number}`
						? num
						: never;
				}>
			: never;

	/** checks if the given type is a union */
	type isUnion<T, U = T> = (
		T extends T ? (U extends T ? true : false) : false
	) extends true
		? false
		: true;

	/** Returns a tuple of given type with at least `N` elements. */
	type atLeast<T, N extends number> = N extends N
		? number extends N
			? T[]
			: _atLeast<T, N>
		: never;

	type deepReadonly<T> = {
		readonly [K in keyof T]: deepReadonly<T[K]>;
	};
}
