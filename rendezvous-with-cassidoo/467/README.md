# fulfilledOrdersBeforeFailure

[issue #467 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f635-u1f4ab-time-you-enjoy-wasting-is-not/)

Given an array of ice cream orders and a freezer stock map,
return how many orders can be fulfilled before the first unavailable flavor.

Examples:

```ts
fulfilledOrdersBeforeFailure(
	[["chocolate"],["chocolate"],["chocolate"]],
	{ chocolate: 2 }
);
> 2

fulfilledOrdersBeforeFailure(
	[["vanilla","vanilla"],["chocolate","mint"],["strawberry"],["strawberry","mint"]],
	{ vanilla: 2, chocolate: 1, mint: 1, strawberry: 5 }
);
> 3

fulfilledOrdersBeforeFailure(
	[["rocky road"],["vanilla"]],
	{ vanilla: 3 }
);
> 0
```
