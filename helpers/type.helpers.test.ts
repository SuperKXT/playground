/* eslint-disable vitest/prefer-importing-vitest-globals */
import { expect, expectTypeOf, test } from "vitest";

import {
	assert,
	assertArray,
	assertObject,
	isArray,
	isObject,
	readableTypeOf,
} from "./type.helpers.js";

const isNumber = (value: unknown): value is number => typeof value === "number";

test("should test readableTypeof helper", () => {
	expect(readableTypeOf(2)).toBe("number");
	expect(readableTypeOf("2")).toBe("string");
	expect(readableTypeOf(BigInt(2))).toBe("bigint");
	expect(readableTypeOf(Symbol(2))).toBe("symbol");
	expect(readableTypeOf(true)).toBe("boolean");
	expect(readableTypeOf(undefined)).toBe("undefined");
	expect(readableTypeOf({})).toBe("object");
	expect(readableTypeOf([2])).toBe("array");
	expect(readableTypeOf(null)).toBe("null");
	expect(readableTypeOf(() => false)).toBe("function");
});

test("should test assert helper", () => {
	const error = "invalid object!";

	expect(() => {
		const a: unknown = 2;

		expectTypeOf(a).toEqualTypeOf<unknown>();

		assert(isObject(a), error);

		expectTypeOf(a).toEqualTypeOf<object>();
	}).toThrowError(error);
	expect(() => {
		const a: unknown = { fist: "of fury" };

		expectTypeOf(a).toEqualTypeOf<unknown>();

		assert(isObject(a), error);

		expectTypeOf(a).toEqualTypeOf<object>();
	}).not.toThrowError();
});

test("should test isObject helper", () => {
	expect(isObject(2)).toBe(false);
	expect(isObject({ fist: "of fury" })).toBe(true);

	const a: unknown = 2;
	isObject(a) && expectTypeOf(a).toEqualTypeOf<object>();
});

test("should test isArray helper", () => {
	expect(isArray(2)).toBe(false);
	expect(isArray([2])).toBe(true);
	expect(isArray([2], isObject)).toBe(false);
	expect(isArray([2], isNumber)).toBe(true);
	expect(isArray({ fist: "of fury" })).toBe(false);
	expect(isArray([{ fist: "of fury" }])).toBe(true);

	const a: unknown = 2;
	isArray(a) && expectTypeOf(a).toEqualTypeOf<unknown[]>();
	isArray(a, isNumber) && expectTypeOf(a).toEqualTypeOf<number[]>();
	isArray(a, isObject) && expectTypeOf(a).toEqualTypeOf<object[]>();
});

test("should test assertObject helper", () => {
	let a: unknown = 2;

	expect(() => {
		assertObject(a);

		expectTypeOf(a).toEqualTypeOf<object>();
	}).toThrowError("Expected object, received number");
	expect(() => {
		a = { fist: "of fury" };
		assertObject(a);

		expectTypeOf(a).toEqualTypeOf<object>();
	}).not.toThrowError();
	expect(() => {
		assertObject({ fist: "of fury" });
	}).not.toThrowError();
});

test("should test assertArray helper", () => {
	let a: unknown = 2;

	expect(() => {
		a = 2;
		assertArray(a);

		expectTypeOf(a).toEqualTypeOf<unknown[]>();
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [2];
		assertArray(a);

		expectTypeOf(a).toEqualTypeOf<unknown[]>();
	}).not.toThrowError();
	expect(() => {
		a = [2, 3];
		assertArray(a, isObject);

		expectTypeOf(a).toEqualTypeOf<object[]>();
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [2];
		assertArray(a, isNumber);

		expectTypeOf(a).toEqualTypeOf<number[]>();
	}).not.toThrowError();
	expect(() => {
		a = { fist: "of fury" };
		assertArray(a);

		expectTypeOf(a).toEqualTypeOf<unknown[]>();
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [[2]];
		assertArray(a, isArray);

		expectTypeOf(a).toEqualTypeOf<unknown[][]>();
	}).not.toThrowError();
});
