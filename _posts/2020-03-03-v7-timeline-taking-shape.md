---
canonical: https://v7.robweychert.com/blog/2020/03/v7-timeline-taking-shape/
date: 2020-02-09 11:27:00-0500
title: Timeline section inventory
description: Untangling the content
slug: v7-timeline-section-inventory
category: RobWeychert.com V7
series: The making of RobWeychert.com V7
tags:
  - design
  - projects
---

Progress on the redesign has slowed, partly because I’ve been busy with other things, and partly because, frankly, the open questions about the timeline section enumerated in my [previous post](https://v7.robweychert.com/blog/2020/01/v7-structural-challenges/) are an intimidating mess, a perfect example of the early stages of the [Design Squiggle](https://thedesignsquiggle.com/).

![](/assets/images/2020-02-09-design-squiggle.svg)

<!-- figcaption -->[The Design Squiggle](https://thedesignsquiggle.com/), by Damien Newman

In a fight or flight situation like this, here are the arguments for flight:

* “Uh, the timeline isn’t even your [top priority](https://v7.robweychert.com/blog/2020/01/v7-content-priorities/) for the site, remember? What’s more important: working on exciting projects and making it easy for people to find them, or laboring endlessly over a tortured accounting of years of less significant output?”
* “Isn’t this whole timeline thing just an exercise in narcissism anyway?”

They’re fair points. I’ll need to be careful not to get so bogged down in the timeline’s minutia that it jeopardizes the timely rollout of the projects section, which is more important. It’s also worth considering whether the timeline is more of an *accumulation* than a *collection*. I think of something Yoko Ono [said](https://twitter.com/yokoono/status/6801795928):

> Unclog your mind. Unclog your room. Arrange your room in a way you wish your mind would be.

In the physical world, I do periodic purges of inessential objects to keep things manageable and focused. However, I have a persistent belief that the timeline concept is more than the overwrought sum of its sprawling parts, something I’ve expressed [before](https://v6.robweychert.com/blog/2017/10/ten-years-twitter/) with regard to Twitter:

> I’m more interested in Twitter as an [archive](https://v6.robweychert.com/blog/2017/09/v6-the-archive/), as a collection of bite-sized dispatches from events in our lives that run the gamut from mundane to sublime, which can be recombined in various ways to tell a uniquely affecting story.

So for now I’ll choose fight over flight, and my first move is to take inventory of the timeline’s content sources and the various shapes they take. The only thing every timeline node has in common is a date. Otherwise, these are the categories I’ve settled on for the data in play:

* title
* description
* short text
* long text
* image
* video
* metadata (other than date)
* rating
* seriality (part of a series)

Below are the content sources and how data categories map to them, in descending order of volume, as of February 9, 2020:

<table>
	<thead>
		<tr>
			<th>Content source</th>
			<th>Active?</th>
			<th>Entries</th>
			<th>Always includes</th>
			<th>Sometimes includes</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="https://twitter.com/robweychert">Twitter</a></td>
			<td>yes</td>
			<td>8,372</td>
			<td></td>
			<td>
				<ul>
					<li>short text</li>
					<li>image(s)</li>
					<li>video</li>
					<li>seriality</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Amount includes unknown number of retweets, which will be omitted</li>
					<li>Some primary content is cross-posted from other timeline sources</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://letterboxd.com/robweychert/films/diary/">Letterboxd</a></td>
			<td>yes</td>
			<td>1,225</td>
			<td>
				<ul>
					<li>title</li>
					<li>metadata</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>short text</li>
					<li>long text</li>
					<li>rating</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Metadata includes location, format, and more, in the form of unclassified tags</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://www.flickr.com/photos/robweychert/">Flickr</a></td>
			<td>no</td>
			<td>1,188</td>
			<td></td>
			<td>
				<ul>
					<li>title</li>
					<li>short text</li>
					<li>long text</li>
					<li>image</li>
					<li>video</li>
					<li>metadata</li>
					<li>seriality</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Some primary content is cross-posted from other timeline sources</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://robweychert.com">RobWeychert.com</a></td>
			<td>yes</td>
			<td>317</td>
			<td>
				<ul>
					<li>metadata</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>title</li>
					<li>description</li>
					<li>short text</li>
					<li>long text</li>
					<li>image(s)</li>
					<li>video(s)</li>
					<li>seriality</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Metadata includes topic tags</li>
					<li>Some entries which V6 collects in digests (like <a href="https://v6.robweychert.com/blog/topic/daily-haiku/">Daily Haiku</a>) will be broken out into individual entries. Other entries (like <a href="https://v4.robweychert.com/consumption/">Consumption</a>) may have to remain digested because their original entry dates are lost.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://tinnitus.robweychert.com">Tinnitus Tracker</a></td>
			<td>yes</td>
			<td>427</td>
			<td>
				<ul>
					<li>title</li>
					<li>metadata</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>short text</li>
					<li>long text</li>
					<li>image(s)</li>
					<li>video(s)</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Metadata includes classified tags: genre(s), artist(s), venue, city, state</li>
					<li>Some primary content is cross-posted from other timeline sources</li>
				</ul>
			</td>
			</tr>
		<tr>
			<td><a href="https://instagram.com/therobweychert">Instagram</a></td>
			<td>yes</td>
			<td>184</td>
			<td></td>
			<td>
				<ul>
					<li>short text</li>
					<li>image(s)</li>
					<li>video(s)</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Some primary content is cross-posted from other timeline sources</li>
					<li>My previous Instagram account (2010–2012) was deleted but may be able to be reconstructed from cross-posts</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://dribbble.com/robweychert">Dribbble</a></td>
			<td>no</td>
			<td>42</td>
			<td>
				<ul>
					<li>title</li>
					<li>image</li>
					<li>metadata</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>short text</li>
					<li>seriality</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Metadata includes various unclassified tags</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><a href="https://v6.robweychert.com/blog/#browse-by-source">31 more miscellaneous sources</a></td>
			<td>mostly no</td>
			<td>114</td>
			<td>
				<ul>
					<li>title</li>
					<li>metadata</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>description</li>
					<li>short text</li>
					<li>long text</li>
					<li>image(s)</li>
					<li>video(s)</li>
					<li>rating</li>
					<li>seriality</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Metadata includes topic tags</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

This inventory will hopefully help me work through the UX/UI implications of the timeline, which I’ll do next with some sketches and mockups.

### Other updates

This post prompted me to add a little CSS to keep image sizes in check, as well as some simple table borders, because most browsers’ default table styles are not very useful:

```css
img,
svg {
  display: block;
  max-width: 100%;
}

table,
th,
td {
  border: 1px solid black;
}
```

I also replaced the reverse-chronological “Most recent blog posts” at the bottom of each post with previous/next navigation, and took a page out of [Frank Chimero’s book](https://frankchimero.com/blog/2019/redesign/) by making the [blog landing page](https://frankchimero.com/blog/2019/redesign/) a chronological table of contents.