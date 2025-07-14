# cursorPosition

[issue #413 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/first-we-build-the-tools-then-they-build-us/)

Given a multi-line string and a sequence of Vim navigation commands
(h for left, j for down, k for up, and l for right), and starting
at the top-left character, write a function that processes the
commands and returns the character under the cursor.

If the cursor tries to move out of bounds, keep it at the last valid position.

Examples:

```ts
const string = `Hello, world!
how are ya?`; // or "Hello, world!\nhow are ya?"
const commands = "jlhll"; // @cSpell: disable-line

cursorPosition(string, commands) > "w";
```

---

<!-- [Solution Playground](https://tsplay.dev/mqnZdW) -->
