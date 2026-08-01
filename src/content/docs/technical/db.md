---
title: Database
description:
  Learn how Archivist stores server settings and rules in MySQL, why the
  database is more stable after moving from SQLite, and the type of data the bot
  keeps.
sidebar:
  order: 2
---

A database is a place where Archivist stores information it needs to work for
your Discord server. The bot saves settings and rules for each server, not
personal data from users.

Archivist recently moved from SQLite to MySQL. This change makes the database
more stable and better able to grow with more servers.

## What do we store?

Archivist remembers server settings such as:

- whether to show images in embeds
- whether to delete the original AO3 link message
- whether there is an ignore symbol set and what it is
- which details to show in work embeds, like chapter count, word count, and tags
- which details to show in chapter embeds, like summaries, notes, and thumbnail
  images
- which details to show in series embeds, like author names, work count, and
  series summary
- which details to show in user embeds, like pseudonyms, join date, works, and
  bookmarks
- tag words that the server wants Archivist to block
- redirect rules that send certain AO3 links to specific channels, forums, or
  threads

That means Archivist stores server preferences and link-handling rules, not
private user content.
