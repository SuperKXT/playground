# getSundays

[issue #475 of rendezvous with cassidoo.](https://cassidoo.co/newsletter/2026-09-20/)

Given a `year` and `month`, return an array containing every date in
that month that falls on a Sunday.

Return each date in `YYYY-MM-DD` format.

Examples:

```ts
> getSundays(2026, 9);
> [ '2026-09-06', '2026-09-13', '2026-09-20', '2026-09-27' ]

> getSundays(2024, 2);
> [ '2024-02-04', '2024-02-11', '2024-02-18', '2024-02-25' ]
```
