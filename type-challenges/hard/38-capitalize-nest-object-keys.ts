/*
  9775 - Capitalize Nest Object Keys
  -------
  by MayanDev (@Mayandev) #hard #object #array

  ### Question

  Capitalize the key of the object, and if the value is an array, iterate through the objects in the array.

  > View on GitHub: https://tsch.js.org/9775
*/

/* _____________ Your Code Here _____________ */

type CapitalizeNestObjectKeys<T extends object> = T extends unknown[]
	? T extends [infer F, ...infer R]
		? [
				F extends object ? CapitalizeNestObjectKeys<F> : F,
				...CapitalizeNestObjectKeys<R>,
			]
		: T
	: {
			[K in keyof T as Capitalize<string & K>]: T[K] extends object
				? CapitalizeNestObjectKeys<T[K]>
				: T[K];
		};

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

type foo = {
	foo: string;
	bars: [{ foo: string }];
};

type Foo = {
	Foo: string;
	Bars: [
		{
			Foo: string;
		},
	];
};

type _cases = [Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9775/answer
  > View solutions: https://tsch.js.org/9775/solutions
  > More Challenges: https://tsch.js.org
*/
