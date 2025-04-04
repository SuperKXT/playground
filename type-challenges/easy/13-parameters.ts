/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in

  ### Question

  Implement the built-in Parameters<T> generic without using it.

  For example:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...args: any[]) => unknown> = T extends (
	...args: infer U
) => unknown
	? U
	: never;

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

const foo = (_arg1: string, _arg2: number): void => undefined;
const bar = (_arg1: boolean, _arg2: { a: "A" }): void => undefined;
const baz = (): void => undefined;

type _cases = [
	Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
	Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
	Expect<Equal<MyParameters<typeof baz>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
