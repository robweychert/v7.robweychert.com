---
layout: post
canonical: https://v7.robweychert.com/blog/2021/01/v7-beginning-data-migration/
date: 2021-01-24 16:45:00-0500
title: Beginning data migration
description: Prepping hundreds of tiny blog posts for republishing
slug: v7-beginning-data-migration
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

Apropos of nothing, I decided that the first of the old entries I’d bring over to V7 would be granular ones:

* **Daily Haiku:** A section of the [fourth version](https://v4.robweychert.com/) of my site, beginning back in 2005. As the name suggests, I wrote a haiku every weekday based on the [Dictionary.com Word of the Day](https://www.dictionary.com/e/word-of-the-day/). Each haiku was originally its own entry, but when I brought them over to V6 a few years ago, I consolidated them into [monthly digests](https://v6.robweychert.com/blog/topic/daily-haiku/). I’m breaking them back out into individual entries for V7. There are 238 total.
* **Letterboxd film diary:** I’ve been using [Letterboxd](https://letterboxd.com/) for nearly 10 years to log every single movie I watch. Some of the reviews I’ve written have appeared on previous versions of my site, but I’m bringing the entire diary over to V7, including tiny entries that merely consist of the name of the movie and a star rating (which is most of them). There are currently 1,348 Letterboxd entries.

Daily Haiku hearkens back to the days my site ran on [Movable Type](https://en.wikipedia.org/wiki/Movable_Type), but the CMS and database are long gone. All that remains is the static site they generated, which means there’s no especially good way to export the site’s content in another format. I did a little bit of research on web scrapers, which would surely be up to the task, but before I got too far down that path, I decided instead to just spend a few hours clicking through the entries and manually copying and pasting them into Markdown files (which is the format Jekyll and other static site generators typically use for blog posts). There can be a certain zen to data entry once you hit a good rhythm, and the absorbing mindlessness of the work was a welcome reprieve from the feverish news cycle of the past few weeks.

As for Letterboxd, with nearly six times more entries than Daily Haiku, copying and pasting was a non-starter. But luckily Letterboxd’s data export is outstanding, and it only took a minute for me to get all my data formatted into a handful of tidy CSV files. I opened the diary file in Google Sheets, deleted the columns I didn’t need, renamed the headers and rearranged the columns for my purposes, and exported an updated CSV. From there, I made a few modifications to [a handy Python script](https://www.evanlovely.com/utilities/jekyll/spreadsheet-to-markdown/) by Evan Lovely that takes a CSV file and turns each of its rows into a Markdown file with YAML front matter. Running the script gave me the 1,348 Markdown files I needed, and after some batch find/replace cleanup (e.g. removing non-ASCII characters from filenames, putting quotes around title strings, etc.), they were done! Here’s an example:

```
---
layout: post 
date: 2020-02-13 23:59:00
title: "Portrait of a Lady on Fire"
year: 2019
rating: 0.9
tags_letterboxd: narrative, theater, angelika film center, nyc, film club
tags: film
category: Letterboxd
canonical: https://boxd.it/ZkLA5
---

This movie is so goddamned good, I’m not even mad that it neglects to incorporate Van Halen’s “On Fire.”
```

Neither the Daily Haiku nor the Letterboxd posts appear on V7 yet, but once I have some template architecture set up to support them, they should be ready to go.

Wrangling my Letterboxd data was easier than I expected, which is encouraging. I should be able to take a similar approach with my Twitter data, which is by far the largest single data source I’ll be dealing with (6,000+ entries). But that data is also more complex, and my batch find/replace tricks will probably only get me so far. It may be time for me to start properly learning [regular expressions](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285).