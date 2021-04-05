export const metadata = {
date: '03/31/2021',
author: 'diegomura',
title: 'Announcing react-pdf v2.0',
}

I'm very excited to annouce **react-pdf 2.0** to the world! This is the culmination of almost an entire year of work and all the lessons learned since this project started [all way back to October 2016](https://github.com/diegomura/react-pdf/commit/272212a6847ad737be8241c64dbca7ad5a95ae8e). It's crazy, I feel it was just yesterday [I was announcing 1.0 as well](https://twitter.com/diegomura/status/1070743817232494592).

In escense, this new 2.0 version is a full reimplementation of the library. Starting from scratch it's always risky move, specially when the previous version is stable an being used in production by many companies and developers. However, the more I thought about it the more it made sense to go down this path. In this blog post I would like to explain the reasons behind this crazy idea and how they were solved.

**TL;DR** - React-pdf 2.0 is backwards compatible with the previous versions so you should not change anything of your previous solution to use it. If you're not interested in what changed internally, you can jump right to [what's new](#what's-new) or the [FAQ](#faq) section.

## Motivation behind these changes

### 1. Separate layout from rendering

Similarly to how web browsers work, react-pdf has two very distinguishable steps.

The first consist on **layout**, the process of computing the coordinates of each node inside the document, transforming text into glyphs, computing image sizes, and anything in between. To keep concerns separately, it's very important for the layout process to be PDF agnostic, this means, not having to deal with the underlying complexities of the PDF format.

After layout is computed, then we can move to the **rendering** phase, which is essentially drawing the nodes in the target PDF document. This step takes all the layout data for granted, it's all about dealing with PDF specific stuff, rendeing borders, backgrounds, images, text, etc.

You can see the benefits of having these two steps separate right away: easier development, testing and debugging, and even having the ability to export not just PDF but images, SVGs or any other format in the future. However, in previous react-pdf implementations there was no code separation of these concerns whatsoever. Each node was responsible of how it should layout and render, implemented in the same place. Not to mention that creating the PDF instance was the first thing we did, and not used but just until the very end of the whole process. This needed to change.

### 2. First class immutability

One of the main cause of issues right now is dealing with the mutable nature of `react-reconciler` while having an asynchronous rendering process. T

### 3. Performance

I believe react-pdf can be much much faster. There are some bottlenecks we can't avoid, such as assets fetching, but there are some other fields in which there's a lot of room for improvements. I already rewrote textkit to be much faster and reliable, and has proven to be so

### 4. Better testing

## How this was fixed

### 1. Redefining rendering process

### 2. Functional approach

It's not that I don't like classes, but I believe that functional programming paradigms can help a lot on breaking the whole rendering process in smaller and testable bits (see below). We are already using ramda on textkit, so this will come basically for free.

Process shift (animation)

## What's new

But this new version is not just about internal changes! It also ships a lot of new features that a ready to use from out of the box.

### SVG support

SVG explanation and why this is great

Example

### New hook API

usePDF explanation

### More styles supported

- zIndex
- Overflow
- Percent border radius
- Better unit support
- Rgb, rgba and cmyk color

## FAQ

### Is the new version going to be incompatible with the old one?

No! 2.0 will be backwards compatible. The reason why the major version is increased it's mostly because 2.0 is a complete reimplementation of the library.

### Will the v1.X version still be maintained after 2.0 gets released?

Unfortunately not. If it's just simple change or fix a new 1.X version will definitely be released (specially during the transition to 2.0), but no major feature will be added on it. That mostly responds to a lack of time, and desire to focus on the next version which it's better and more stable.
