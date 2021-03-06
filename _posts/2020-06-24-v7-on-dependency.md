---
layout: post
canonical: https://v7.robweychert.com/blog/2020/06/v7-on-dependency/
date: 2020-06-24 12:45:00-0400
title: On dependency
description: How I incorporate other people’s work into my own—and how I don’t
slug: v7-on-dependency
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

I might have expected quarantine life to be a boon to my site’s redesign process since most of my preferred social distractions were nullified. Instead, I’ve been using the time in isolation to make music videos, finalize a home purchase, move into said home, and try to find my place in our national reckoning on racism and public safety reform. But as I slowly shift some of my attention back to the redesign, I’ve been thinking about one aspect of it through the lens of the pandemic.

Early in the lockdown, when the future of the supply chain was uncertain and everyone was panic shopping, I imagined all the doomsday preppers out there must have been feeling pretty smug. While the rest of the world freaked out, I pictured them calmly swinging their bunker doors shut and gazing fetishistically at their stockpiles of food, fuel, and ammunition, secure in their self-sufficiency. But how self-sufficient are they really? Did they grow and can that food? Did they smelt the steel and fashion their firearms from it? Did they mix the gunpowder? Did they build the internal combustion engines that power their generators? Did they extract and refine the oil that powers those engines?

This coronavirus crisis has shone a light on one of the defining conflicts of American society: individualism versus collectivism. How much should we be willing to collectively sacrifice for the sake of relatively few individuals? Where do we fall on the spectrum between Ayn Rand and Karl Marx? Where do *I* end and *we* begin? When 20 million jobs evaporated in the space of a month, it wasn’t because the “free market” and “individual liberty,” two phrases that often appear in close proximity, are actually compatible. The enraged libertarians who flooded statehouses and demanded that the economy reopen were, on the one hand, insisting that they shouldn’t be affected by what they see as other people’s problems. On the other hand, ironically, they were expressing *a need to interact with other people*; people who can do things for them that they can’t or don’t want to do for themselves: cut their hair, serve them a cocktail, sell them a gun.

If everyone were truly self-sufficient, most of us would be too busy tending our crops and repairing our roofs to do much else. Advances in technology, medicine, art, sport, and so much more would be sacrificed for the sake of a lot of replicated effort with middling results. We’d be alive, but we’d hardly be living. Instead, we develop more focused skillsets and work together. I can make hammers and you can make nails; I’ll trade you some of mine for some of yours. By depending on each other, we can accomplish more and better things.

***

Back in the world of web design, I sometimes kid myself that I operate with a degree of self-sufficiency. I’m formally trained in graphic design and I’ve spent decades honing skills in user experience design, HTML, and CSS. My work is generally more content-focused than app-focused, so my limited JavaScript skills aren’t often an impediment. If you want a simple informational website (which, in my opinion, tends to be the best kind), I’ve got you covered.

But I can’t host your site or even my own site. I didn’t build the CMS. Other people made the hardware and software I use to generate and optimize images. Other people made the fonts. Other people standardized the digital formats for those images and fonts. I didn’t write the HTML and CSS specifications, nor the browsers that interpret them, nor the operating systems that run the browsers. I didn’t solder the circuit boards. And so on.

I say all this in the hopes of making it painfully clear that I’m a big believer in the power of collaboration, the reduction of replicated effort, and the beauty of human interdependency.

The open source community has produced countless wonderful examples of what collaboration and interdependency can achieve. My own work has benefitted greatly from it, and in recent years I’ve stepped up my efforts to contribute, making [tools](https://github.com/propublica/column-setter) available and sharing detailed write-ups of how my projects are [conceived](https://v6.robweychert.com/blog/2019/02/introducing-tinnitus-tracker/) and [created](https://v6.robweychert.com/blog/2018/09/revisiting-incomplete-open-cubes/).

**Nevertheless, I’m very selective about how I depend on other people’s work in my personal projects. Here are the factors I consider when evaluating dependencies.**

### Complexity

*How complex is it, who absorbs the cost of that complexity, and is that acceptable?*

The more use cases something is meant to accommodate, the more complex it is, and therefore, the less efficient it is. In many cases, this isn’t a big deal. Adobe Illustrator can do a zillion things I don’t need, but for the stuff I do need from it, the outsize CPU and hard drive space it uses are a worthy sacrifice. However, I prefer not to assume that someone visiting my website is willing to make that same sacrifice. A 2K SVG icon I created with Illustrator shouldn’t require you to download all 1.39GB of Illustrator to view that icon. That would be [passing too much complexity](https://daverupert.com/2020/06/tradeoffs-and-shifting-complexity/)—and therefore inefficiency—to the user, and I’m not okay with that. This is why I can’t abide frameworks like React and Bootstrap. They’re excessively complex, and the user shares the cost to an unacceptable degree.

### Comprehensibility

*Do I understand how it works, and if not, does that matter?*

I’m a designer who writes front-end code. I don’t wish to pretend that makes me a software engineer. So I try to keep my command line interactions to a minimum: mostly just a handful of Git, Sass, and Jekyll commands. I don’t understand their inner workings, but I have a satisfactory mental model of what they do, I know what to expect from them, and I rarely get into trouble.

Where I do get into trouble is with complicated tool chains: the “modern dev stack.” I get why they’re popular—compiling, optimizing, minifying, and deploying all in one keystroke sure can save you time. But even if, like Git and Sass, I understand well enough what each individual piece does, things get confusing quickly when they’re all bundled together. These tool chains are only as good as their weakest link, and when things start going wrong, I find myself in the weeds pretty quickly. The constant need for updates, Node version management, Bash versus Zsh, dependencies on dependencies on dependencies… No thanks. Maybe someday I’ll get onboard with that way of working, but for now, the extensibility isn’t worth the frustration of the incessant troubleshooting. I don’t understand well enough how it works (and believe me, I’ve tried), and that matters.

### Reliability

*How consistently and for how long can I expect it to work?*

I try to build things to last, so I need the stuff they’re made of to be sturdy. Hopefully it goes without saying that I want well constructed code and assets, but a big part of the reliability factor is also making sure those things have a stable home. Central to my current site redesign is reclaiming my content from ephemeral and/or otherwise untrustworthy social media services. Why shouldn’t I want to own the design as much as I own the content? As much as possible, I prefer to buy rather than rent, and to keep everything under one roof, which keeps me away from things like remote CDNs like AWS and hosted web font services like Typekit. I want to have access to all the pieces of my site in perpetuity, and I want them to live at a domain I control.

***

At the end of the day, I try to make sure every piece of what I put on the web is appropriate, necessary, and as simple as possible, which generally requires me to essentially handcraft the vast majority of it myself. My preferred approach isn’t a terribly efficient way of working. Starting with a simple boilerplate HTML file in lieu of “`npx create-react-app my-app`” has been somewhat derisively [described](https://dev.to/richharris/in-defense-of-the-modern-web-2nia) as “old guard” and “artisanal.” And I suppose it is to some degree tantamount to swinging my bunker door shut and gazing fetishistically at my stockpile of food, fuel, and ammunition.

But I have no illusions about being some kind of lone wolf. All the stuff I’m making “by hand”—the way it approaches form, function, and materials—has been informed by philosophies and techniques developed by an amorphous community that spans generations. This work proliferates through byzantine open source projects, yes, but it also proliferates through books, blog posts, and videos with titles like “[Custom Styling Form Inputs With Modern CSS Features](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/).” When I’m making things, that’s how I prefer to depend on others and have them depend on me: by sharing strong, simple ideas as a collective, and recombining them in novel ways with rigorous specificity as individuals.