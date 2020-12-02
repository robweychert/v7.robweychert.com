---
canonical: https://v7.robweychert.com/blog/2020/01/v7-structural-challenges/
date: 2020-01-14 09:50:00-0500
title: Structural challenges
description: The ambitous scope of the timeline section
slug: v7-structural-challenges
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

Most of this redesign’s structural challenges pertain to the timeline section, [previously described thusly](https://v7.robweychert.com/blog/2020/01/v7-introduction/):

> * **Timeline:** The blog on the current version of my site, V6, [collects](https://v6.robweychert.com/blog/) most of what I’ve written for public consumption since 2001 across nearly 40 different sources. I’d like to expand that to include even more sources and content types, collecting virtually everything I’ve shared online in one sprawling, sortable/filterable timeline.

Since the projects section is a [higher priority](https://v7.robweychert.com/blog/2020/01/v7-content-priorities/) and the new parts of the timeline may not even be included in the site’s initial launch, it’s tempting to just put the timeline on the back burner. But here’s the thing: the timeline’s structural challenges will inevitably introduce technical challenges, which will have a big influence on what tools I use to build the site. I want to pick the right tools the first time, and I’ll give myself a better chance of doing that by working out the specifics of the timeline concept now and trying to wrangle it into a good user experience that’s technically feasible.

However, I’m only willing to go to so much trouble to make the timeline a reality, so if it turns out that what I have in mind is too architecturally convoluted in terms of UX and/or execution, I’ll scale the concept back until I find the right compromise. But let’s start by thinking big.

My V6 blog currently contains 544 posts from 39 sources. That 544 number is a bit misleading, because a number of those posts are digests of many smaller posts. For example, I used to publish a haiku every weekday, and rather than make each haiku an individual post, I collected them in [monthly digests](https://v6.robweychert.com/blog/topic/daily-haiku/). Similarly, film reviews I’ve written on Letterboxd that are fewer than 100 words are collected in annual “[loose ends](https://v6.robweychert.com/blog/2019/12/letterboxd-loose-ends/)” posts. I did this mainly for two reasons:

1. I wasn’t crazy about the idea of an entire webpage devoted to just a few words.
2. It’s a static site made with Jekyll, which means more posts make for longer build times. (The site currently takes about 40 seconds to build, due to a variety of factors.)

The former doesn’t bother me so much anymore, but it does introduce design challenges. The latter is emblematic of the technical challenges that may lie ahead, especially considering that I’m trying to add a *lot* more content. Here are the biggest troublemakers:

* [Tweets](https://twitter.com/robweychert) (more than 8,300)
* [Letterboxd film diary entries](https://letterboxd.com/robweychert/films/diary/) (more than 1,200)
* [Flickr photos](https://www.flickr.com/photos/robweychert/) (more than 1,200)
* [Tinnitus Tracker live music diary entries](https://tinnitus.robweychert.com/) (more than 400)

Even if most of the content to be added is bite-sized, accounting for each of those bites is a big task: the number of individual posts on the site will grow more than 20 times. Compounding the technical complexity introduced by that sheer volume are issues of taxonomy and UI. Some of the many open questions:

* How to handle the information architecture and URL structure? I kind of like the idea of keeping everything under /blog/, since this is a log of things I’ve done on the web, but “blog” has more specific connotations now. Maybe the aggregate of posts can be browsed under /timeline/ and individual posts can be categorized à la /blog/, /notes/, /images/, etc?
* How to handle tweet replies and threads, especially ones that occur over extended time periods? Is there a good way to make a tweet an individual post but still acknowledge its context among other tweets, many of which are from other people?
* Given the issue of build times, can this still be a static site? I really like being able to build my site from a local directory of text files, without relying on server-side software that abstracts the content away into a database and requires remote maintenance. But is that still a viable option for a site this big? If I need to switch to another kind of CMS, how much of a lift will data migration be?
* For data sources that I’m still updating regularly, like Twitter and Letterboxd, can/should I syndicate them out from my site, presumably with the help of some [IndieWeb](https://indieweb.org/) technology? Or download my data from those services periodically and backfill? Will I be able to integrate multiple collections of downloaded JSON data with my existing blog posts?
* How much metadata should I publish? On Letterboxd in particular, I have a fairly rich tagging system. Can/should I integrate that into my site? What relationship should it have with my site’s existing tag/topic system? Should incoming data without tags (like Twitter) somehow be retroactively tagged?
* **What the hell am I getting myself into??**

Next up: sketches and research!