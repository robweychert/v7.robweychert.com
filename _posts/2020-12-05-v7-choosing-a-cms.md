---
layout: post
canonical: https://v7.robweychert.com/blog/2020/12/v7-choosing-a-cms/
date: 2020-12-05 23:00:00-0400
title: Choosing a CMS
description: Do my new content requirements need a new content management system?
slug: v7-choosing-a-cms
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

For awhile, I had basically resigned myself to the idea that the massive amount of stray content I’m planning to bring home (thousands of tweets, Flickr photos, etc) would necessitate moving my site onto a [LAMP](https://stackify.com/what-is-lamp-stack/) stack CMS. I started poking around in [WordPress](https://wordpress.com/), which I hadn’t touched in years, and [Craft](https://craftcms.com/), which I use regularly in my work at [ProPublica](https://www.propublica.org/). The former felt bloated and the latter’s setup presumed a level of back-end know-how that I don’t possess. I was starting to realize that this project has put enough on my plate with regard to information architecture, content strategy, graphic and UI design, and front-end experimentation. I simply do not have the appetite right now to learn a new CMS, a new templating language, and/or new server-side skills. I’ve been using [Jekyll](https://jekyllrb.com/) for several years, I really like it, and I’d like to continue using it. But can it handle the amount of stuff I’ll need to throw at it?

As luck would have it, CSS-Tricks recently published an interesting post by Sean C Davis called “[Comparing Static Site Generator Build Times](https://css-tricks.com/comparing-static-site-generator-build-times/).” In Sean’s benchmark tests (which acknowledge that a lot of variables factor into build times and every site is different), Jekyll performed surprisingly well, and the tests also marked my first time hearing anyone suggest that a static site generator could feasibly take on a site with tens of thousands of posts.

So I thought I’d do a test of my own. I started a fresh Jekyll site and added some of my old blog posts to it, duplicating and back-dating them to artificially increase the volume of content until I had about 2,600 posts. Using Jekyll’s default theme (Minima), the site compiled in less than 15 seconds, which I found encouraging. My current site, with 562 posts, takes around 40 seconds to compile, presumably due to inefficiencies—some necessary, some avoidable—in the way I structured the site and built my templates. When I’m working on the site and that build time gets cumbersome, I usually run Jekyll with a `--limit_posts 10` flag to speed things up, since I don’t often need the entire site to be built out until I’m ready to publish whatever changes I’ve made.

So I’ve decided to try to make Jekyll work, and if it does, it will allow me to avoid one of this project’s most dreaded learning curves. I’ve already integrated my minimal V7 content and barebones templates, resulting in just about the simplest Jekyll site possible. It currently compiles in less than a second. The plan now is to begin bringing in more content and setting up the basic skeleton of the site, keeping track of build times as I go.