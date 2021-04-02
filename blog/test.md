export const metadata = {
  date: '03/31/2021',
  author: 'diegomura',
  title: 'Announcing react-pdf v2.0',
}

Introduction goes here

TL;DR - You should not change anything. If interested only in what's new, jump to the bottom

## Motivation behind these changes

- Separate layout from rendering
- First class immutability
- Better testing

## How this was fixed

Functional approach

Process shift (animation)

Lerna usage

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

No! 2.0 will be backwards compatible. The reason why the major version will be increased it's mostly because 2.0 is a complete reimplementation of the library.

### Will the v1.X version still be maintained after 2.0 gets released?

Unfortunately not. If it's just simple change or fix a new 1.X version will definitely be released (specially during the transition to 2.0), but no major feature will be added on it. That mostly responds to a lack of time, and desire to focus on the next version which it's better and more stable.
