# Lyft demo recordings

These MP4 and WebM files contain one complete loop of each recording embedded in Figma file `tYciSiz3y0YUu4qqqQbOeY`.

| File stem | Source node | Duration (seconds, rounded) |
| --- | --- | --- |
| existing-milestone | 4634:2632 | 8.33 |
| separate-page | 4637:8668 | 7.63 |
| drawer | 4637:8666 | 7.20 |
| expandable-list | 4635:4079 | 8.07 |
| sparkle | 4636:8234 | 6.23 |
| confetti | 4636:8235 | 6.40 |
| final-hub | 4669:2958 | 19.73 |
| share-badge | 4669:2973 | 8.77 |
| push-notification | 4669:2987 | 5.13 |

The previous exports were truncated to 2.03 seconds by the default Figma timeline duration. Recovery used temporary frames containing copies of the original video layers, with 60-second timelines exported at 30 fps. Repeated-frame comparison and visual inspection identified a complete source loop; each export was trimmed to that loop, rounded to the nearest output frame. Temporary frames were removed afterward. The original design layers were preserved.

When replacing these assets, use the original recordings where available. If exporting through Figma, explicitly set an export timeline long enough to include the entire embedded recording, verify the full interaction and loop boundary, and regenerate **both** formats. Browsers prefer the WebM source. `tests/lyft-videos.spec.js` checks expected durations, playback beyond the old cutoff, looping, and manual controls.
