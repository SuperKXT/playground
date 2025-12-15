# latinSquare

[issue #435 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/try-to-create-things-that-are-an-extension-of/)

Write a function to generate a Latin Square given a positive integer `n`.
The values can be any `n` distinct values,
and don't have to be consistent for different `n`.

Example:

```ts
latinSquare(1);
[[1]];

latinSquare(2);
[
	[1, 2],
	[2, 1],
];

latinSquare(4);
[
	[1, 2, 3, 4],
	[2, 1, 4, 3],
	[3, 4, 1, 2],
	[4, 3, 2, 1],
];
```

---

[Solution Playground](https://tsplay.dev/Nnr2aN)
