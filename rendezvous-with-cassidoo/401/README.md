# calculateIngredients

[issue #401 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/all-you-touch-and-all-you-see-is-all-your-life/)

Given an array of objects representing ingredients (each with a name and amount per serving),
and a target number of servings, write a function to calculate
the required amount of each ingredient for the target servings.

Return the results as an array of objects with name and amount.

Can you do this in less than 5 lines? In one?

Example:

```ts

const ingredients = [
  { name: "flour", amount: 200 }, // 200g per
  { name: "sugar", amount: 100 }, // 100g per
  { name: "eggs", amount: 2 }     // 2 eggs per
];
const targetServings = 3;

> calculateIngredients(ingredients, targetServings);
> [
   { name: "flour", amount: 600 },
   { name: "sugar", amount: 300 },
   { name: "eggs", amount: 6 }
]

```

---

[Solution Playground](https://tsplay.dev/WJdxDN)
