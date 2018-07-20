import GoToExample from '../src/components/GoToExample'

### Hyphenation

Hyphenation refers to the automated process of breaking words between lines to create a better visual consistency across a text block. This is a complex problem. It involves knowing about the language of the text, available space, ligatures, among other things.

React-pdf internally implements the [Knuth and Plass line breaking algorithm](http://www3.interscience.wiley.com/journal/113445055/abstract) that produces the minimum amount of lines without compromising text legibility. By default it's setup to hyphenate english words.

If you need more fine-grained control over how words break, you can pass your own callback and handle all that logic for yourself:

```
import { Font } from '@react-pdf/react-pdf'

const hyphenationCallback = (words) => {
  // Iterate through words
}

Font.registerHyphenationCallback(hyphenationCallback);
```

You can use the [default hyphenation callback](https://github.com/react-pdf/text-layout/tree/master/src/linebreaker) as a starting point.

> **Protip:** If you don't want to hyphenate words at all, just provide a callback that returns the same words it receives

<GoToExample />
