# ghostwriter

[issue #479 of rendezvous with cassidoo.](https://cassidoo.co/newsletter/2026-10-18/)

There’s a ghost in your keyboard! It keeps typing weird symbols in your words.
Given a string you typed (with the ghost), `#` deletes the last character and
`~` duplicates it, if one exists. Return the final text.

Examples:

```ts
ghostwriter("ghost");
> "ghost"

ghostwriter("a#~b");
> "b"

ghostwriter("ab~c#");
> "abb"

ghostwriter("BBB##O~");
> 'BOO'
```
