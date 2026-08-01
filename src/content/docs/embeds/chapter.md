---
title: Chapter Update Embeds
description:
  Learn how Archivist displays AO3 chapter update embeds in Discord, showing
  chapter links, work details, ratings, warnings, and image galleries.
sidebar:
  order: 2
---

When Archivist finds a chapter link in a Discord message, it can post a shorter
chapter update embed that shows less information than works embeds. Chapter
update embeds are different from Archivist's other embeds which post
automatically. Before it posts this embed, Archivist asks if you want the
[work embed](/embeds/works/) or the chapter update embed. You pick the one you
want by clicking the button (`Work` or `Chapter`).

![Discord message from Archivist asking "Would you like a work or chapter embed?" with two buttons labeled "Work" and "Chapter" and the Archivist avatar on the left.](../../../assets/chapterEmbedQuestion.png)

Use a chapter update embed when people in the server already know the work and
are waiting for a new chapter.

## Included information

- Chapter name/link — link to the chapter; shows chapter number and title if
  available
- Work title — the name of the full work
- Author(s) — list of authors with links to their profiles
- Series — link to the series that contains this work (if any)
- Read from start — link to the first chapter so readers can catch up
- Words — the chapter word count (and the total words for the work)
- Chapters — shows published chapters and total expected (for example, 5/10)
- Rating — content rating shown by the sidebar color and by an icon
- Published — original publication date
- Updated — most recent update date
- Status — whether the work is "Complete" or "In progress"
- Warnings — AO3 content warnings that apply
- Summary — short summary of the chapter
- Gallery — image gallery for images in the chapter

If they are long, chapte updater embeds split into pages so you can see all the
content while the embed stays small. You can move through the pages using the
`Previous` and `Next` buttons.

The pages appear in a temporary message only you can see if you did not
originally ask for the embed. This lets each person control their own copy of
the embed.

The chapter update embed look can be changed by using the
[settings](/commands/settings) command. The [redirect](/commands/redirect)
command lets you control where these embeds post.
