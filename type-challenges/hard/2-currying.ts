/* eslint-disable new-cap */
/*
  17 - Currying 1
  -------
  by Anthony Fu (@antfu) #hard #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

  For example:

  ```ts
  const add = (a: number, b: number) => a + b
  const three = add(1, 2)

  const curriedAdd = Currying(add)
  const five = curriedAdd(2)(3)
  ```

  The function passed to `Currying` may have multiple arguments, you need to correctly type it.

  In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.

  > View on GitHub: https://tsch.js.org/17
*/

/* _____________ Your Code Here _____________ */

type Curry<T> = T extends (...args: infer A) => infer R
	? A extends [infer F, ...infer O]
		? (...args: [F]) => O extends [] ? R : Curry<(...args: O) => R>
		: T
	: never;

declare function Currying<T>(fn: T): Curry<T>;

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
	(
		a: string,
		b: number,
		c: boolean,
		d: boolean,
		e: boolean,
		f: string,
		g: boolean,
		// eslint-disable-next-line max-params
	) => true,
);
const curried3 = Currying(() => true);

type _cases = [
	Expect<
		Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
	>,
	Expect<
		Equal<
			typeof curried2,
			(
				a: string,
			) => (
				b: number,
			) => (
				c: boolean,
			) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
		>
	>,
	Expect<Equal<typeof curried3, () => true>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/17/answer
  > View solutions: https://tsch.js.org/17/solutions
  > More Challenges: https://tsch.js.org
*/
