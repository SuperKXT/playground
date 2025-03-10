/*
  5 - Get Readonly Keys
  -------
  by Anthony Fu (@antfu) #extreme #utils #object-keys

  ### Question

  Implement a generic `GetReadonlyKeys<T>` that returns a union of the readonly keys of an Object.

  For example

  ```ts
  interface Todo {
    readonly title: string
    readonly description: string
    completed: boolean
  }

  type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
  ```

  > View on GitHub: https://tsch.js.org/5
*/

/* _____________ Your Code Here _____________ */

type GetReadonlyKeys<T extends object> = keyof {
	[K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
		? K
		: never]: unknown;
};

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

type _cases = [
	Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
	Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>,
];

type Todo1 = {
	readonly title: string;
	description: string;
	completed: boolean;
};

type Todo2 = {
	readonly title: string;
	readonly description: string;
	completed?: boolean;
};

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5/answer
  > View solutions: https://tsch.js.org/5/solutions
  > More Challenges: https://tsch.js.org
*/
