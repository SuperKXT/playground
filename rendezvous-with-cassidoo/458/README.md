# shuffleLine

[issue #458 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u26d1-ufe0f-permit-yourself-to-change-your-mind/)

Given a queue of customer `names` and an integer `n`, move every `nth` customer to the
end of the line while preserving relative order otherwise.

Examples:

```ts
shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3); // cSpell: disable-line
> ['Ada', 'Ben', 'Diya', 'Eli', 'Cam', 'Fay'] // cSpell: disable-line
// Every 3rd customer is moved to the end, so "Cam" and "Fay"
// are moved after the others, preserving their original order.

shuffleLine(["A", "B", "C", "D", "E"], 2);
> ['A', 'C', 'E', 'B', 'D']

shuffleLine(["Mo", "Noah", "Oli"], 1);
> ['Mo', 'Noah', 'Oli']
```
