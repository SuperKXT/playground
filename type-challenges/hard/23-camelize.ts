/*
  1383 - Camelize
  -------
  by Denis (@denchiklut) #hard #union #recursion

  ### Question

  Implement Camelize which converts object from snake_case to to camelCase

  ```ts
  Camelize<{
    some_prop: string,
    prop: { another_prop: string },
    array: [{ snake_case: string }]
  }>

  // expected to be
  // {
  //   someProp: string,
  //   prop: { anotherProp: string },
  //   array: [{ snakeCase: string }]
  // }
  ```

  > View on GitHub: https://tsch.js.org/1383
*/

/* _____________ Your Code Here _____________ */

type CamelCase<T extends string> = T extends `${infer F}_${infer R}`
	? `${F}${Capitalize<CamelCase<R>>}`
	: T;

type Camelize<T> = T extends unknown[]
	? T extends [infer F, ...infer R]
		? [Camelize<F>, ...Camelize<R>]
		: []
	: T extends Record<string, unknown>
		? {
				[K in keyof T as CamelCase<K & string>]: T[K] extends object
					? Camelize<T[K]>
					: T[K];
			}
		: T;

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

type _cases = [
	Expect<
		Equal<
			Camelize<{
				some_prop: string;
				prop: { another_prop: string };
				array: [
					{ snake_case: string },
					{ another_element: { yet_another_prop: string } },
					{ yet_another_element: string },
				];
			}>,
			{
				someProp: string;
				prop: { anotherProp: string };
				array: [
					{ snakeCase: string },
					{ anotherElement: { yetAnotherProp: string } },
					{ yetAnotherElement: string },
				];
			}
		>
	>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1383/answer
  > View solutions: https://tsch.js.org/1383/solutions
  > More Challenges: https://tsch.js.org
*/
