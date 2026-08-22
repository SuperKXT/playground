# packRectangles

[issue #470 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f45b-the-most-certain-sign-of-wisdom-is/)

Given the dimensions of a large rectangle `n` x `m` and a second rectangle `a` x `b`,
return the maximum number of second rectangles that can be packed into
the larger one without overlapping.

You may rotate the smaller rectangle 90 degrees.

Examples:

```ts
packRectangles(10, 10, 3, 4);
> 6

packRectangles(10, 6, 2, 3);
> 10

packRectangles(10, 6, 11, 2);
> 0
```
