# alternativeArray

[issue #436 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/you-only-get-one-life-so-you-might-as-well-feel/)

An alternating array is a list of any length in which two (not necessarily different)
values are alternating (all even-indexed items are equal,
and all odd-indexed items are equal).

Given an array, return `true` if it is alternating.

Example:

```ts
alternativeArray([]); // True
alternativeArray([1]); // True
alternativeArray([1, 1]); // True
alternativeArray([1, 2, 1]); // True
alternativeArray([10, 5, 10, 5, 10]); // True
alternativeArray([2, 2, 3, 3]); // False
alternativeArray([5, 4, 3, 5, 4, 3]); // False
```

---

[Solution Playground](https://tsplay.dev/wRqoYW)
