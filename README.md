# Desk Cat Status · 桌边小猫

A local desk status display for office workers. Choose a status before stepping away; colleagues can see what you are doing, how long you have been away, and leave a note on the same screen.

## Run

No packages, build step, account, or internet connection required. From your checkout directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000` in a modern browser. Stop with Ctrl+C. You can also open `index.html` directly, though local-storage behavior for file URLs varies by browser. This is a browser project; Python only serves static files.

## Main interaction

Choose break, meal, meeting, sleep, or a custom status. Each of the five states has its own local GIF in assets/. A new status starts an elapsed timer. Selecting the same active status keeps its timer. Pause/resume and reset are explicit controls; going back to choose a status does not stop timing. “I'm back” ends the session. GIFs keep their original proportions inside a fixed display area. Their original backgrounds and animation are preserved. Missing images fall back to the built-in SVG cat. Reduced-motion preferences replace GIFs with the static SVG cat.

The status and timer recover after refresh if browser local storage is available. Timing uses timestamps rather than counting ticks. Unavailable storage shows a warning while the current session still works. Empty statuses and blank notes show feedback. Notes are visible to everyone at this screen, kept only in memory, and cleared on refresh or ending the session. Changing/resetting status does not delete them. Do not include sensitive information.

![A break session in Desk Cat Status](assets/screenshot.png)

## Limits

This is a single-device display, not a shared messaging service. It does not send notifications, authenticate colleagues, keep separate timer histories per status, or keep a computer awake. Timers depend on the device clock. No live site has been published. A real user trial remains to be recorded in PROCESS.md. The initial no-GIF version is preserved in Git history; a subsequent commit adds the five supplied GIFs.

## Credits

Based on the owner-supplied `index.html` prototype; original authorship and previous tool use still need confirmation. The warm palette, two-screen flow, status concept and notes are retained. OpenAI Codex assisted with the offline implementation, SVG fallback cat, GIF integration, documentation and automated checks. The five GIFs were supplied by the owner in gif.zip; original artists, source links and sharing permissions remain to be documented by the owner. No external fonts, libraries or audio are used. See PROCESS.md for decisions and AI disclosure.
