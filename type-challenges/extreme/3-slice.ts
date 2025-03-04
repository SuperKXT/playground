/*
  216 - Slice
  -------
  by Anthony Fu (@antfu) #extreme #array

  ### Question

  Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the three argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.

  For example

  ```ts
  type Arr = [1, 2, 3, 4, 5]
  type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
  ```

  > View on GitHub: https://tsch.js.org/216
*/

/* _____________ Your Code Here _____________ */

type AbsoluteNo<T extends number> = `${T}` extends `-${infer I extends number}`
	? I
	: T;

type AbsoluteIndex<
	T extends number,
	Arr extends unknown[],
	Idx extends 1[] = [],
> =
	AbsoluteNo<T> extends T
		? T
		: AbsoluteNo<T> extends Idx["length"]
			? Arr["length"]
			: Arr extends [...infer Rest, unknown]
				? AbsoluteIndex<T, Rest, [...Idx, 1]>
				: 0;

type Slice<
	Arr extends unknown[],
	Start extends number = 0,
	End extends number = Arr["length"],
	AbsStart extends number = AbsoluteIndex<Start, Arr>,
	AbsEnd extends number = AbsoluteIndex<End, Arr>,
	Idx extends 1[] = [],
	Output extends unknown[] = [],
> = Arr extends [infer First, ...infer Rest extends unknown[]]
	? Idx["length"] extends AbsEnd
		? Output
		: Idx["length"] extends AbsStart
			? Slice<
					Rest,
					never,
					never,
					AbsStart,
					AbsEnd,
					[...Idx, 1],
					[...Output, First]
				>
			: Output["length"] extends 0
				? Slice<Rest, never, never, AbsStart, AbsEnd, [...Idx, 1], Output>
				: Slice<
						Rest,
						never,
						never,
						AbsStart,
						AbsEnd,
						[...Idx, 1],
						[...Output, First]
					>
	: Output;

/* _____________ Test Cases _____________ */
// eslint-disable-next-line import/first
import type { Equal, Expect } from "@type-challenges/utils";

type _Arr = [1, 2, 3, 4, 5];

type _cases = [
	// basic
	Expect<Equal<Slice<_Arr, 0, 1>, [1]>>,
	Expect<Equal<Slice<_Arr, 0, 0>, []>>,
	Expect<Equal<Slice<_Arr, 2, 4>, [3, 4]>>,

	// optional args
	Expect<Equal<Slice<[]>, []>>,
	Expect<Equal<Slice<_Arr>, _Arr>>,
	Expect<Equal<Slice<_Arr>, _Arr>>,
	Expect<Equal<Slice<_Arr, 2>, [3, 4, 5]>>,

	// negative index
	Expect<Equal<Slice<_Arr, 0, -1>, [1, 2, 3, 4]>>,
	Expect<Equal<Slice<_Arr, -3, -1>, [3, 4]>>,

	// invalid
	Expect<Equal<Slice<_Arr, 10>, []>>,
	Expect<Equal<Slice<_Arr, 1, 0>, []>>,
	Expect<Equal<Slice<_Arr, 10, 20>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/216/answer
  > View solutions: https://tsch.js.org/216/solutions
  > More Challenges: https://tsch.js.org
*/
