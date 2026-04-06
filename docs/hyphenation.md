import GoToExample from '../src/components/Docs/GoToExample'

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

You can use the [default hyphenation callback](https://github.com/diegomura/react-pdf/blob/master/packages/textkit/src/engines/wordHyphenation/index.ts) as a starting point.

Example of a custom implementation (German):
```
import { Font } from "@react-pdf/renderer";
import { hyphenateSync as hyphenateDE } from "hyphen/de";

const hyphenationCallback = (word) => {
  return hyphenateDE(word).split("\u00AD");
};

Font.registerHyphenationCallback(hyphenationCallback);
```

> **Protip:** If you don't want to hyphenate words at all, just provide a callback that returns the same words it receives. More information [here](/fonts#registerhyphenationcallback)

<GoToExample name="hyphenation-callback" />
