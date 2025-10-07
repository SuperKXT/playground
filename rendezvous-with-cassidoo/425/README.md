# groupChangelog

[issue #425 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/the-invention-of-the-ship-was-also-the-invention/)

You're building a tool that tracks component edits and groups them into a changelog.
Given an array of edit actions, each with a timestamp and a component name,
return an array of grouped changelog entries. Edits to the same component within
a 10-minute window should be merged into one changelog entry, showing the
component name and the range of timestamps affected.

Example:

```ts
const edits = [
  { timestamp: "2025-10-06T08:00:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:05:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:20:00Z", component: "Header" },
  { timestamp: "2025-10-06T08:07:00Z", component: "Footer" },
  { timestamp: "2025-10-06T08:15:00Z", component: "Footer" },
];

> groupChangelog(edits);
> [
    {
        "component": "Footer",
        "start": "2025-10-06T08:07:00Z",
        "end": "2025-10-06T08:15:00Z"
    },
    {
        "component": "Header",
        "start": "2025-10-06T08:00:00Z",
        "end": "2025-10-06T08:05:00Z"
    },
    {
        "component": "Header",
        "start": "2025-10-06T08:20:00Z",
        "end": "2025-10-06T08:20:00Z"
    }
]
```

---

<!-- [Solution Playground](https://tsplay.dev/NlrlOW) -->
