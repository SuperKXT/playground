# maxCandy

[issue #478 of rendezvous with cassidoo.](https://cassidoo.co/newsletter/2026-10-11/)

You’re trick-or-treating down a street, and you’re given an array that shows how
many pieces of candy each house gives out. You can’t visit two houses that are
next to each other. Return the maximum number of candy pieces you can collect.

Examples:

```ts
> maxCandy([2, 7, 9, 3, 1]);
> 12 // visit houses with 2, 9, and 1

> maxCandy([5, 1, 1, 5]);
> 10 // it's worth it to skip the middle two

> maxCandy([4]);
> 4
```
