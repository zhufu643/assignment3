# Desk Cat Status · 桌边小猫

A local desk status display for office workers. Choose a status before stepping away; colleagues can see what you are doing, how long you have been away, and leave a note on the same screen.

## Run

No packages, build step, account, or internet connection required. From your checkout directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in a modern browser. Stop with Ctrl+C. You can also open `index.html` directly, though local-storage behavior for file URLs varies by browser. This is a browser project; Python only serves static files.

## Main interaction

Choose working, break, meal, meeting, movie, sleep, or a custom status. A new status starts an elapsed timer. Selecting the same active status keeps its timer. Pause/resume and reset are explicit controls; going back to choose a status does not stop timing. “I'm back” ends the session. The cat stays anchored in a fixed, transparent SVG canvas; only its tail moves. Reduced-motion preferences stop the animation.

The status and timer recover after refresh if browser local storage is available. Timing uses timestamps rather than counting ticks. Unavailable storage shows a warning while the current session still works. Empty statuses and blank notes show feedback. Notes are visible to everyone at this screen, kept only in memory, and cleared on refresh or ending the session. Changing/resetting status does not delete them. Do not include sensitive information.

![A break session in Desk Cat Status](assets/screenshot.png)

## Limits

This is a single-device display, not a shared messaging service. It does not send notifications, authenticate colleagues, keep separate timer histories per status, or keep a computer awake. Timers depend on the device clock. No live site has been published. A real user trial remains to be recorded in PROCESS.md. This is the first working version without GIF assets; future GIF changes should be recorded in separate commits.

## Credits

Based on the owner-supplied `index.html` prototype; original authorship and previous tool use still need confirmation. The warm palette, two-screen flow, status concept and notes are retained. OpenAI Codex assisted with the offline implementation, original SVG pixel cat, documentation and automated checks. No external art, fonts, libraries or audio are used. See PROCESS.md for decisions and AI disclosure.
