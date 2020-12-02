---
canonical: https://v7.robweychert.com/blog/2020/01/v7-content-priorities/
date: 2020-01-08 08:50:00-0500
title: Content priorities
description: Making my projects more visible
slug: v7-content-priorities
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

I added a tiny bit of CSS to aid readability by keeping line lengths in check on larger viewports:

```css
body {
  margin: 0 auto;
  max-width: 75ch;
  padding: 1rem;
}
```

When calling the CSS file from the page `head`, I include a query string based on today’s date, which I’ll update when the CSS is updated. This will let updates get past the browser’s cache.

```
<link rel="stylesheet" href="/assets/css/main.css?20200108">
```

Hopefully this small stylistic addition will keep things tidy enough until I properly begin the visual part of the design process. Before I can get to that, though, let’s talk content priorities. From my list of reasons for the V7 redesign in its [introductory post](https://v7.robweychert.com/blog/v7-introduction/):

> * **Timeline:** The blog on the current version of my site, V6, [collects](https://v6.robweychert.com/blog/) most of what I’ve written for public consumption since 2001 across nearly 40 different sources. I’d like to expand that to include even more sources and content types, collecting virtually everything I’ve shared online in one sprawling, sortable/filterable timeline.
> * **Projects:** I’ve made a lot of cool things personally and professionally over the past few years, announced their launches, and written about why and how they were made, but I still need an easily browsable place to collect and share that work.

The timeline is listed first because it’s the more complex of the two, but projects are actually a higher priority.

As noted above, a version of the timeline already exists in V6, and while I want to rethink its structure a bit for V7, most of its substance is already in place. Whatever additions are made can be made post-launch if necessary. In the meantime, most of those additions (e.g. tweets and Flickr photos) are for now easily found and browsed elsewhere online, so their inclusion isn’t all that urgent.

Projects, on the other hand, are currently Easter eggs at best. They’re out there, and you might be able to find them if you’re looking for them, but you’re unlikely to stumble upon them, and they can’t be seen in aggregate as a body of work. Compared to the timeline additions, most of which are old and vary widely in terms of value and substance, the projects’ inclusion is a high priority, because they’re recent and substantial and they represent how I’m spending a lot of my time, so I want them to be much more visible.

So those are my high-level content priorities for V7. Almost the entirety of the site’s content will fall within one of these two areas, so their structure is the site’s structure. In the next post, I’ll get into my ideas for that structure and the challenges they present.