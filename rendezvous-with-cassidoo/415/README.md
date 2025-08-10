# canFormHexagon

[issue #415 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/simplicity-is-the-glory-of-expression-walt-whitman)

Given an array of side lengths, write a function to determine
they can form a hexagon with three side-length pairs
(as in, three pairs of equal sides needed).

Return `true` if possible.

Example:

```ts
canFormHexagon([2, 3, 8, 8, 2, 3]);
> true;

canFormHexagon([1, 2, 3, 4, 5, 6]);
> false;

canFormHexagon([2, 2, 2, 2, 2, 2, 2]);
> false;
```

---

[Solution Playground](https://tsplay.dev/NBOPpm)
