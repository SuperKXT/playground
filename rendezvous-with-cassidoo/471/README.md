# partitionArray

[issue #471 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1fa81-the-worst-enemy-to-creativity-is-self/)

Given an array of integers, return a new array where `odd` numbers come first,
`even` numbers come next, and `zeros` appear at the end.

The relative order of elements within each group must be preserved.

Examples:

```ts
partitionArray([0, 3, 2, 1, 4, 0, 7]);
> [3, 1, 7, 2, 4, 0, 0];
```
