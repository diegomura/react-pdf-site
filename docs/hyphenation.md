import GoToExample from '../src/components/GoToExample'

### Hyphenation

Hyphenation refers to the automated process of breaking words between lines to create a better visual consistency across a text block. This is a complex problem. It involves knowing about the language of the text, available space, ligatures, among other things.

React-pdf internally implements the [Knuth and Plass line breaking algorithm](http://www.eprg.org/G53DOC/pdfs/knuth-plass-breaking.pdf) that produces the minimum amount of lines without compromising text legibility. By default it's setup to hyphenate english words.

If you need more fine-grained control over how words break, you can pass your own callback and handle all that logic by yourself:

```
import { Font } from '@react-pdf/renderer'

const hyphenationCallback = (word) => {
  // Return word syllables in an array
}

Font.registerHyphenationCallback(hyphenationCallback);
```

You can use the [default hyphenation callback](https://github.com/diegomura/react-pdf/blob/master/src/layout/linebreaker/formatter.js#L65) as a starting point.

> **Protip:** If you don't want to hyphenate words at all, just provide a callback that returns the same words it receives. More information [here](/fonts#registerHyphenationCallback)

<GoToExample name="hyphenation-callback" />
