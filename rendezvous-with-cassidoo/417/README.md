# groupAudioFiles

[issue #417 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/new-sentences-have-appeared-on-earth-not-written/)

Given an array of audio file durations, write a function to
group the files into playlists such that each playlist's
total duration does not exceed a given limit maxDuration.
Return an array of playlists, where each playlist is an array of file durations.
Try to minimize the number of playlists.

Example:

```ts
const files = [120, 90, 60, 150, 80];
const maxDuration = 200;

groupAudioFiles(files, maxDuration);
> [[150], [120, 80], [90, 60]];

groupAudioFiles(files, 160);
> [[150], [120], [90, 60], [80]];
```

---

<!-- [Solution Playground](https://tsplay.dev/NBOPpm) -->
