# perrinCombinations

[issue #451 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/9-ufe0f-u20e3-there-are-no-mistakes-only/)

ou are given a file system represented as an object where keys are absolute paths and
values are either `null` (real file/directory) or a `string` (a symlink pointing to another path).

Write a function that resolves a given path to its real destination,
following symlinks along the way.

If a symlink chain forms a cycle, return `null`.

Example:

```ts
perrinCombinations(7, 12);
> [[0,2,3,7],[0,5,7],[2,3,7],[5,7]]

perrinCombinations(6, 5);
> [[0,2,3],[0,5],[2,3],[5]]
```

---

<!-- [Solution Playground](https://tsplay.dev/WGLbkw) -->
