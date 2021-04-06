export const metadata = {
  date: '04/06/2021',
  author: 'diegomura',
  title: 'Announcing react-pdf v2.0',
  image: {
    url: '/images/og-banner-v2.png',
    width: '950',
    height: '805'
  }
}

I'm very excited to announce **react-pdf 2.0** to the world! This is the culmination of almost an entire year of work and all the lessons learned since this project started [all way back in October 2016](https://github.com/diegomura/react-pdf/commit/272212a6847ad737be8241c64dbca7ad5a95ae8e). It's crazy, I feel it was just yesterday [I was announcing 1.0 as well](https://twitter.com/diegomura/status/1070743817232494592).

In essence, this new 2.0 version is a full reimplementation of the library. Starting from scratch it's always a risky move, especially when the previous version is stable and being used in production by many companies and developers. However, the more I thought about it, the more it made sense to go down this path. In this blog post I would like to explain the reasons behind the v2 ideas and how they were solved.

**TL;DR** - React-pdf 2.0 is backwards compatible with the previous versions so you should not need to change anything from your existing project to use it. If you're not interested in what changed internally, you can jump straight to [what's new](#what's-new) or the [FAQ](#faq) section.

## Motivation behind these changes

### 1. Separate layout from rendering

Similarly to how web browsers work, react-pdf has two very distinguishable steps.

The first consists of **layout**, the process of computing the coordinates of each node inside the document, transforming text into glyphs, computing image sizes, and anything in between. To keep concerns separated, it's very important for the layout process to be PDF agnostic, this means, not having to deal with the underlying complexities of the PDF format.

After layout is computed then we can move to the **rendering** phase, which is essentially drawing the nodes in the target PDF document. This step takes all the layout data for granted, it's all about dealing with PDF specific stuff, rendering borders, backgrounds, images, text, etc.

You can see the benefits of having these two steps separate right away: easier development, testing and debugging, and even having the ability to export not just PDF but any other format in the future. However, in previous react-pdf implementations there was no code separation of these concerns whatsoever. Each node was responsible for how it should layout and render, implemented in the same place. Not to mention that creating the PDF instance was the first thing we did, and did not use until the very end of the whole process. This needed to change.

### 2. First class immutability

One of the main causes of issues right now is dealing with the mutable nature of `react-reconciler` while having an asynchronous rendering process. The reconciler is a React piece responsible for transforming the JSX code into calls to the underlying platform you are working on. If you think about react-dom or react-native, mutability makes sense: you create native views once, and then it's all about changing that instance (ex. changing some styling when the JSX changes). There's a state being shared in successive reconciler calls.

PDFs are different. When anything inside the document changes, we need to recompute the entire document. There's no way of just "change a PDF text color" and keeping everything else the same.

Previous react-pdf versions dealt with this by keeping class instances in memory that knew how to clone themselves in some very complex ways, so each successive render could be "independent" from the previous one but also sharing these instances. Working with this however has become increasingly hard and the cause of many bugs that were very difficult to track down.

Under this perspective, immutability is a must have. If I could find a way of making the renderer work with immutable structures it would make bugs easier to find, but also make each render truly independent from the previous or future ones.
### 3. Performance

I believe react-pdf can be much much faster than what v1 currently is. It is already faster than other solutions out there such as HTML-to-PDF, at least for most use cases, but my goal is to keep pushing this to the limit.

There are some bottlenecks we can't avoid, such as assets fetching or Yoga layout time, but there's a lot of room for improvements. The old implementation made it very difficult to both measure and improve rendering times, at least without being unsure something didn't break along the way.

### 4. Better testing

No need to explain here the benefits of having extensive tests for an open-source library, especially for ones like react-pdf that supports so many different features and CSS properties. Even though previous versions have many features tested, it was only possible to accomplish this by basically simulating an entire document from the top and seeing how it turned out to be. Doing that to test a simple margin is just too much.

## How this was fixed

Enough of talking about problems. Let's now talk about solutions instead.

### 1. Redefining rendering process

Most of the points mentioned above were only visible after having experienced how this library evolved over time, and spending a lot of time developing it and understanding what the pain points were. So I asked myself: knowing what I know now about this library, what would I have done differently? The first thing would've been rethinking the whole rendering process.

As mentioned above, splitting layout from rendering makes a lot of sense. This could be easily achieved by moving all the PDF related logic to the end of the document creation pipeline. This also has an incredibly powerful side-effect as well: being able to produce other types of output besides PDF documents. Suddenly with this change a whole world of new possibilities opened in front of our eyes.

In addition, separating the text layout process from the rest of the pipeline turned out to be very helpful as well. Text layout is an incredibly complex task by itself, since it involves transforming chars into glyphs with the provided font, grouping those glyphs into lines intelligently, breaking words between lines, dealing with ligatures, orphan & widow protection, and the list goes on and on.

### 2. Functional approach

It's not that I don't like classes, but I believe that functional programming paradigms can help a lot in breaking the whole rendering process into smaller and testable bits. Functions are generally easier to understand, since they are all about inputs and outputs. Immutability is generally very easy to enforce as well.

We were already following this approach on textkit, the library responsible for performing text layout, and the benefits were just amazing. Rarely something bad was reported about it, and it has a test coverage that with the current way of testing would've been simply impossible to achieve.

At the same time this meant having to rewrite or at least re-organize much of the logic, which is mostly unchanged. It was daunting at first, and I was afraid of the criticism if things that worked suddenly did not. Hopefully it will pay off.

## What's new

But this new version is not just about internal changes! It also ships a lot of new features that are ready to use out of the box.

### SVG support

React-pdf now ships with a set of new primitives to render SVG images! This has been on the backburner since the beginning of this project, but postponed for several different reasons throughout the years for it being challenging to implement with the previous solution.

This is huge. Having SVG support opens this library to a whole new level of possibilities that were not possible before, or at the very least, were hacky to do. This does not just means being able to render your own SVG (such as your company logo or similar), but also building integrations with pre-existing libraries that output SVG, such as the popular chart library recharts. As a future reference, just bear in mind that react-pdf does not take the same React SVG primitives, but their own, so you will need to transform from one to the other. Should be as simple as cloning elements.

You can see this working [here](http://react-pdf.org/repl?example=svg).

### New hook API

React-pdf always tried to keep it's usage as simple as possible, without compromising flexibility and covering as many use cases as possible. For that, it ships a `<PDFViewer />` component for those who just want to see the document in the browser, and `<BlobProvider />` and `<PDFDownloadLink />` for more complex and custom interactions. However, it felt that something was missing.

Because of that, react-pdf 2.0 ships a new `usePDF` hook to fill the remaining needs. Through it you can access the blob, url and loading state of your document, and more importantly, have a fine control over when the document should re-render. That's something that wasn't possible before. I'm excited to see what interactions people build using this new API.

Read more about the new `usePDF` hook [here](http://react-pdf.org/hooks).

### More styles supported

Last but not least, a bunch of new CSS properties are supported, and more to come. Some new features includes:

- Rgb, rgba and cmyk color
- Overflow
- zIndex
- Percent border radius
- Better unit support

## Acknowledges

Would like to especially thank all the people that helped accomplish such an important milestone for this library. There were more than 39 people that participated on the [2.0 pull request](https://github.com/diegomura/react-pdf/pull/617), discussing different approaches, helping testing and patiently waiting for this work to be finished. That was truly amazing and something I didn't expect when I started working on this. It's definitely not always easy to keep up with all the work this library demands, but other people's involvement in the project makes it way more enjoyable to work on.

In addition, for anyone using or excited about this project, kind reminder to consider [donating to react-pdf](https://opencollective.com/react-pdf). It really means a lot and helps this project move forward.

## FAQ

### Is the new version going to be incompatible with the old one?

No! 2.0 will be backwards compatible. Because of this, there should be no reason to remain on v1. Please report any bugs to our issue tracker, preferably with a REPL link.

### Will the v1.X version still be maintained after 2.0 gets released?

Unfortunately no. If it's just a simple change or fix a new 1.X version will definitely be released (specially during the transition to 2.0), but no major feature will be added to it. That is mostly an issue due to a lack of time on my part. I hope we can focus efforts on the next version which is better in many ways and more stable.
