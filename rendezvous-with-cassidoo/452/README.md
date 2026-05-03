# validatePizza

[issue #452 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f9d1-u1f680-we-will-always-choose-earth-we-will/)

You're building a pizza ordering system that enforces strict ingredient layering rules.

Given an array of pizza layers (bottom to top) and a set of rules where each rule states that
ingredient `A` must appear somewhere below ingredient `B`, write a function that determines
whether the pizza is valid.

If any rule is violated, return the pair `[A, B]` that was violated first (in the order the rules are given).
If the pizza is valid, return `true`.

Example:

```ts
const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
const rules = [
  ["sauce", "cheese"],
  ["cheese", "pepperoni"],
  ["dough", "basil"],
];
const rules2 = [
  ["cheese", "pepperoni"],
  ["cheese", "sauce"], // "it's under the sauce"
];

validatePizza(layers, rules);
> true

validatePizza(layers, rules2);
> ['cheese', 'sauce']
```

---

<!-- [Solution Playground](https://tsplay.dev/WGLbkw) -->
