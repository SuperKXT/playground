# mealPrepTasks

[issue #432 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/a-dream-is-just-a-dream-a-goal-is-a-dream-with-a/)

Given an array of meal prep tasks for Thanksgiving, where each task is represented
as `[taskName, startTime, endTime]`, return the maximum number of non-overlapping
tasks you can complete, along with the names of the chosen tasks in the order
they were selected.

Task times are inclusive of start but exclusive of end.

Example:

```ts
const tasks = [
  ["Make Gravy", 10, 11],
  ["Mash Potatoes", 11, 12],
  ["Bake Rolls", 11, 13],
  ["Prep Salad", 12, 13]
];

mealPrepTasks(tasks);
> {
    count: 3,
    chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"]
  }

```

---

<!-- [Solution Playground](https://tsplay.dev/wQavnw) -->
