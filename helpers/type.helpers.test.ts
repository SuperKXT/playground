/* eslint-disable vitest/prefer-importing-vitest-globals */
import { assertType, expect, test } from "vitest";

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
		assertType<unknown>(a);
		assert(isObject(a), error);
		assertType<object>(a);
	}).toThrowError(error);
	expect(() => {
		const a: unknown = { fist: "of fury" };
		assertType<unknown>(a);
		assert(isObject(a), error);
		assertType<object>(a);
	}).not.toThrowError();
});

test("should test isObject helper", () => {
	expect(isObject(2)).toBe(false);
	expect(isObject({ fist: "of fury" })).toBe(true);

	const a: unknown = 2;
	isObject(a) && assertType<object>(a);
});

test("should test isArray helper", () => {
	expect(isArray(2)).toBe(false);
	expect(isArray([2])).toBe(true);
	expect(isArray([2], isObject)).toBe(false);
	expect(isArray([2], isNumber)).toBe(true);
	expect(isArray({ fist: "of fury" })).toBe(false);
	expect(isArray([{ fist: "of fury" }])).toBe(true);

	const a: unknown = 2;
	isArray(a) && assertType<unknown[]>(a);
	isArray(a, isNumber) && assertType<number[]>(a);
	isArray(a, isObject) && assertType<object[]>(a);
});

test("should test assertObject helper", () => {
	let a: unknown = 2;

	expect(() => {
		assertObject(a);
		assertType<object>(a);
	}).toThrowError("Expected object, received number");
	expect(() => {
		a = { fist: "of fury" };
		assertObject(a);
		assertType<object>(a);
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
		assertType<unknown[]>(a);
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [2];
		assertArray(a);
		assertType<unknown[]>(a);
	}).not.toThrowError();
	expect(() => {
		a = [2, 3];
		assertArray(a, isObject);
		assertType<object[]>(a);
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [2];
		assertArray(a, isNumber);
		assertType<number[]>(a);
	}).not.toThrowError();
	expect(() => {
		a = { fist: "of fury" };
		assertArray(a);
		assertType<unknown[]>(a);
	}).toThrowError("Invalid array type");
	expect(() => {
		a = [[2]];
		assertArray(a, isArray);
		assertType<unknown[][]>(a);
	}).not.toThrowError();
});
