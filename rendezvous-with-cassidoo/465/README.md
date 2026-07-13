# spiralGrid

[issue #465 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f420-the-most-meaningful-way-to-succeed-is-to/)

Write a function that takes a non-negative integer n and prints the numbers `0`
through n in a clockwise spiral, starting at the `top-left` of a square grid.

Hint: The grid size should be `ceil(sqrt(n + 1))`, and any unused cells should be blank.

Examples:

```ts
> spiralGrid(99);
 0  1  2  3  4  5  6  7  8  9
35 36 37 38 39 40 41 42 43 10
34 63 64 65 66 67 68 69 44 11
33 62 83 84 85 86 87 70 45 12
32 61 82 95 96 97 88 71 46 13
31 60 81 94 99 98 89 72 47 14
30 59 80 93 92 91 90 73 48 15
29 58 79 78 77 76 75 74 49 16
28 57 56 55 54 53 52 51 50 17
27 26 25 24 23 22 21 20 19 18

> spiralGrid(30);
 0  1  2  3  4  5
19 20 21 22 23  6
18          24  7
17 30       25  8
16 29 28 27 26  9
15 14 13 12 11 10
```
