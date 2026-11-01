
## Changes and decisions

Initial Idea and Intended Users:
My initial idea was to create an interactive desktop companion website that reflected the user’s status through different cat animations. However, I realised that if the status was only visible to the user, the website would mainly serve as personal entertainment rather than solve a clear practical problem. I therefore reconsidered its intended users and context of use.

An experience from my internship helped shape the project’s direction. I once left my desk to attend a meeting, and my computer went into sleep mode. A colleague came looking for me, saw that I was absent and that the screen showed no information, and assumed I had taken the day off. This caused a misunderstanding. The experience made me recognise a need for a simple, clear way for office workers to communicate their status when away from their desks. I therefore developed the project into a desk status display for office workers.

Design and Development Process:
For the visual design, I initially chose a dark colour scheme, then changed to a warm, soft palette. I wanted the website to communicate information while creating a relaxed, friendly atmosphere that suited the cat imagery.

Development took place in two stages. The first version did not include GIFs and focused on implementing and checking the core timer logic: starting, pausing, resuming, resetting and ending a session, as well as handling the timer when switching statuses. The second version introduced a different cat GIF for each status and refined the connection between status selection and image display. This approach allowed me to check that the main interaction worked before adding visual assets.

Feature Decisions and Revisions:
Initially, the website included working and watching a movie alongside taking a break, eating, attending a meeting and sleeping. After reconsidering the office context, I found that a working status offered limited value: when users are working at their desks, colleagues can usually see that they are present. Watching a movie was also less relevant to everyday office needs and distracted from the project’s purpose. I removed both options, keeping four preset statuses and a custom input for other situations.

I also added a clear privacy notice to the message area. It explains that messages appear on the desk screen and may be seen by anyone who passes by and looks at it. Messages should therefore be limited to work-related information suitable for public display, without personal or sensitive details. This change helps colleagues understand who can see their messages before submitting them.

## Real user
I invited a university friend to try the website and collected his feedback on its visual design and main features. He liked the visuals and colour palette, describing the overall style as relaxed, friendly and pleasant to look at. This suggested that the warm colours and cat imagery conveyed the atmosphere I intended, so I kept this design direction.

The test also revealed a problem with the visual hierarchy. In the version he tested, the timer was small and positioned in the top-right corner, so he did not notice it. Based on this observation, I increased its size and moved it closer to the centre of the page, making the current status and elapsed time easier to see together.

Regarding the messaging feature, he considered the perspective of a colleague visiting the desk. After submitting a message, he could see that it appeared on the page, but without any further feedback, he could not tell whether the recipient had read it. This helped me recognise that “message submitted” and “message read” are two separate stages. The website currently supports only the former, so I have positioned the messaging feature as a way to leave non-urgent information.

## AI disclosure and credits
At the beginning of the project, I used ChatGPT to help plan the GitHub repository structure and summarise the assignment’s submission requirements. During development, I used OpenAI Codex to help write and refine the timer’s start, pause, resume, reset and end logic, as well as status switching, GIF display and messaging features. I also used ChatGPT to polish and translate the project documentation.

I adopted the AI suggestion to complete the timer functionality before adding GIFs, allowing me to validate the core interaction first. I did not follow the earlier suggestion to create an interactive companion GIF experience. Instead, I drew on my internship experience to develop the project for a more specific audience: office workers. I made the decisions about the intended users, visual direction, status options and changes based on user testing. I selected the cat images and used Adobe Photoshop to animate them and export them as GIFs.
