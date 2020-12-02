---
layout: post
canonical: https://v7.robweychert.com/blog/2020/01/v7-viewport-meta-tag/
date: 2020-01-04 17:00:00-0500
title: The “viewport” meta tag
description: Apparently it is still necessary!
slug: v7-viewport-meta-tag
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

The first thing I did when setting up this new version of my site was to put together some minimum viable HTML templates. Here’s the blog post template:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title><!--POST TITLE--> | RobWeychert.com V7</title>
  <meta name="description" content="<!--POST DESCRIPTION-->">
  <link rel="alternate" type="application/rss+xml" title="RobWeychert.com V7" href="/index.rss">
</head>

<body>

  <header>
    <h1><a href="/">RobWeychert.com V7</a></h1>
    <nav>
      <ul>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/index.rss">RSS</a></li>
      </ul>
    </nav>
  </header>

  <aside>I’m redesigning my site in public from the ground up, so if it looks undercooked, that’s why! Check out the <a href="/blog/">blog</a> to follow the process step by step, or visit the more polished <a href="https://v6.robweychert.com/">current version</a> of the site.</aside>

  <main>
    <header>
      <h2><!--POST TITLE--></h2>
      <p><!--POST DESCRIPTION--></p>
      <time datetime="<!--YYYY-MM-DD-->"><!--POST DATE--></time>
    </header>

    <!--POST CONTENT-->

  </main>

  <nav aria-label="Secondary">
    <h2>Most recent blog posts</h2>
    <ul>
      <li>
        <a href="/blog/<!--YYYY/MM/POST TITLE SLUG-->/">
          <h3><!--POST TITLE--></h3>
          <p><!--POST DESCRIPTION--></p>
          <time datetime="<!--YYYY-MM-DD-->"><!--POST DATE--></time>
        </a>
      </li>
    </ul>
  </nav>

</body>
</html>
```

The site is, for the time being, made exclusively of HTML, so I didn’t bother to test it on different devices since browsers would apply their own default styles. But then I noticed it was doing this on iOS:

![Screenshot of a shrunken blog post in iOS Firefox](/assets/images/2020-01-04-ios-shrunken.png)

<!-- figcaption -->iOS shrinks the page, treating it as if it were designed specifically for desktop browsers.

It turned out my minimum viable HTML wasn’t quite viable after all! I had left out the `<meta name="viewport">` tag from the `<head>`. It’s been part of my HTML boilerplate for years, and I’ve always generally understood what it does, but this incident prompted me to learn a little more. After digging around a bit, I found an in-depth [two](https://www.quirksmode.org/mobile/viewports.html)-[part](https://www.quirksmode.org/mobile/viewports2.html) post from Peter-Paul Koch on how browser viewports work with device pixels and CSS pixels. I also found Apple’s [documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html) for configuring the viewport using `<meta name="viewport">`. Both of those posts appear to have been published around 2010, but much of the information is still relevant.

Due to the complexity of the subject, those posts are illuminating if not quite elucidating, but here’s the gist: When the iPhone was first released, Apple proudly trumpeted its ability to bring mobile users the “real” internet: not the stripped down mobile versions of websites that were de rigeur at the time (on the rare occasions developers even bothered making them), but the “real” versions that you would see on a desktop computer. It rendered these desktop-optimized sites by assuming they were approximately 980 pixels wide and shrinking everything to fit on the iPhone’s screen, which was 320 pixels wide. The user could then zoom and pan the page to get a closer look. This was a reasonable compromise, but it meant that if anyone tried to optimize a site’s design for a mobile device, that page would likewise be shrunken when rendered on the iPhone. So Apple created the `<meta name="viewport">` tag, which would give developers control over how their work was rendered on the iPhone. Other mobile browser makers subsequently adopted it, making it a [de facto standard](https://drafts.csswg.org/css-device-adapt/#viewport-meta).

Fast-forward more than a decade and no one thinks of the desktop as the default way to experience the web anymore, so I thought I might be able to get away with omitting `<meta name="viewport">`. Apparently not! Maybe someday. In the meantime, you can see the aforementioned Apple [documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html) for details on how to use `<meta name="viewport">`, but this should cover you in most cases:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

![Screenshot of a correctly rendered blog post in iOS Firefox](/assets/images/2020-01-04-ios-correct.png)

<!-- figcaption -->No more shrinkage!