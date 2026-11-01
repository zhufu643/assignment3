# Desk Cat Status — process

## Idea and audience

Office workers can leave this screen open before stepping away. A colleague arriving at the desk sees the worker's status and elapsed time and may leave a short note. The interaction loop is choose status → see cat, status and timer → change/pause/reset/end the session.

The owner supplied a single-file HTML prototype with a warm palette, two-screen flow, timers and visitor notes. It referenced missing GIF files and loaded Tailwind, Font Awesome and Google Fonts from CDNs. The owner clarified the office-worker audience, simple status timers, and a stationary cat with a naturally moving tail on a transparent fixed canvas.

## Changes and decisions

- Kept the warm palette, two screens and notes; replaced external dependencies with local HTML/CSS/JavaScript and an original SVG pixel cat. This is an interim cat, not a recovered version of the missing GIFs.
- Removed whole-cat floating and hover scaling. The cat has a fixed 160 × 144 viewBox. Only the tail rotates around its base; reduced-motion preferences disable it.
- Added work and movie alongside break, meal, meeting and sleep. Custom statuses cover other situations.
- Used elapsed time rather than guessed return times. Timestamps handle background tabs and refreshing; paused sessions preserve accumulated time.
- Repeated selection keeps the current timer. Changing/resetting status preserves notes. Ending a session asks for confirmation if notes would be cleared.
- Local storage saves only the status/timer. Notes stay in memory, use textContent for safe display, and have a visible public-screen privacy notice. Unavailable storage does not prevent the session from working.

## Real user trial — pending

No real-person trial has been observed or reported in this session. Automated browser checks are not a user trial. This section is not completed submission evidence.

Ask one colleague to use the page before explaining it. Suggested task: “You're leaving your desk for a meeting; show someone who comes by what is happening.” Then ask them to act as a visitor leaving a note.

Record their first action, hesitation, interpretation of the timer, and understanding of where messages go. Record one improvement based on that observation, or explain why you kept the design. No name or recording is needed.

## AI disclosure and credits

OpenAI Codex read the supplied prototype, implemented the offline browser version, drew the SVG cat, wrote documentation and ran automated checks. The owner supplied the office-worker audience, simplified timer concept, cat-motion constraints and prototype.

Suggestion kept: a fixed transparent SVG canvas with only the tail animated avoids inconsistent image crops and dark image-removal edges. Suggestion changed: the previously proposed Schotter slider-art direction was replaced by the owner's desk-status idea. The prototype's floating cat and external GIF fallback were rejected for this version because they conflicted with a stationary cat and dependable offline use. These decisions were not based on a real user trial.

Original prototype authorship/earlier AI use: owner to confirm before submission. No downloaded media or third-party code libraries are used in the new implementation.

## Validation

Chromium checks passed: selecting statuses, elapsed timestamps, repeated selection without reset, pause/resume, paused and running refresh recovery, timer reset preserving notes, empty custom input, custom status, empty notes, literal HTML in notes without execution, preserving notes across status changes, end-session cancel/confirm, sleep eyes, 375px mobile layout without horizontal overflow, reduced-motion animation stop, denied storage and corrupt saved data. No page JavaScript errors were reported. The screenshot in README.md was captured from the running page. JavaScript syntax and git whitespace checks also passed. These checks used Playwright with the environment-provided Chromium; no test dependency was added to the app. Public repository visibility, signed-out access, live hosting, Canvas submission and real user trial are not verified.

## Development milestone: first web version without GIF assets

At the owner's request, this working version is being saved as a separate development milestone before introducing the original cat GIFs. It contains the offline interface, elapsed timers, local SVG pixel-cat placeholder, visitor notes and screenshot. No GIF files were supplied or added. A future GIF integration should be a separate commit documenting the actual changes, including fixed canvas size, stationary cat placement, tail movement and transparency checks. This milestone does not claim that GIF integration or a real user trial has happened.

## Repository milestone

The owner selected zhufu643/assignment3 as the assignment repository. This commit adds the working no-GIF version on top of its existing README/PROCESS history. Implementation and browser validation were completed in the earlier workspace before copying these web files here. The earlier implementation history is not fabricated or backdated. Future changes and trial-driven revisions should be committed as they occur.
