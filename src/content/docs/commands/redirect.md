---
title: Redirect AO3 Embeds
description:
  Learn how to route Archivist's AO3 work, chapter, series, and profile embeds
  to Discord channels with /redirect add, list, and remove.
sidebar:
  order: 3
---

Use Archivist's `/redirect` command to send Archive of Our Own (AO3) embeds to
specific Discord channels, threads, or forums. Create a redirect rule with
filters such as rating, fandom, or embed type. You can also view and remove your
rules.

You need the **Manage Server** permission to manage redirect rules.

## `/redirect add`

Use `/redirect add` to create a redirect rule. First, choose a destination: any
channel, thread, or forum in your server. Then add one or more optional filters:

- **Rating:** Select an AO3 rating: Not Rated, General Audiences, Teen And Up
  Audiences, Mature, or Explicit.
- **Fandom:** Enter a fandom name. For the best match, use the name as it
  appears on AO3. Archivist also supports fuzzy matching.
- **Type:** Select the embed type: Work, Chapter, Series, or User Profile.

You can combine filters in one rule. For example, set a rating and a type to
route only works with that rating, or choose a fandom and type to narrow the
rule to a specific kind of embed.

### Examples

Route Explicit-rated Work and Chapter embeds to `#nsfw`:

```text
/redirect add destination:#nsfw rating:Explicit
```

Route only Explicit-rated Work embeds to `#nsfw`:

```text
/redirect add destination:#nsfw rating:Explicit type:Work
```

Send User Profile embeds to `#server-intros`:

```text
/redirect add destination:#server-intros type:User Profile
```

Send Work, Chapter, or Series embeds for the Mass Effect fandom to
`#mass-effect`:

```text
/redirect add destination:#mass-effect fandom:Mass Effect
```

Send Explicit-rated Dragon Age Chapter embeds to `#da-nsfw-updates`:

```text
/redirect add destination:#da-nsfw-updates fandom:Dragon Age rating:Explicit type:Chapter
```

After a rule is created, Archivist confirms the destination and gives the rule a
unique eight-character ID. Keep this ID; you need it to remove the rule.

## `/redirect list`

Use `/redirect list` to view your active redirect rules. The list shows each
rule's ID, destination, and filters. Find the ID of a rule here if you want to
remove it.

## `/redirect remove`

Use `/redirect remove` and enter the rule's ID to delete it. For example:

```text
/redirect remove id:ebe20c77
```
