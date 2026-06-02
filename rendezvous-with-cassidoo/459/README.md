# packSuitcases

[issue #459 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1fa88-life-is-what-happens-when-youre-busy/)

Given an array of object weights and an array of suitcase capacities,
determine the minimum number of suitcases needed to pack all objects,
where each object must go into exactly one suitcase and each suitcase
can hold any number of objects up to its capacity.

Return `-1` if it is impossible to pack all objects.

Examples:

```ts
packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]);
> 3

packSuitcases([9, 7, 6], [10, 6]);
> -1
```
