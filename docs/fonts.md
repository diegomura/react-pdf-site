## Fonts

React-pdf is shipped with a `Font` module that enables to load fonts from different sources, handle how words are wrapped and define an emoji source to embed these glyphs on your document.

---

### `register`

Fonts really make the difference when it comes on styling a document. For obvious reasons, react-pdf cannot ship a wide amount of them. That why we provide an easy way to load your custom fonts from many different sources via the `register` method vey easily.

```
import { Font } from '@react-pdf/renderer'

Font.register(source, { family: 'FamilyName' });
```

#### source

Specifies the source of the font. This can either be a valid URL, or an absolute path if you're using react-pdf on Node.

#### family

Name to which the font will be referenced on styles definition. Can be any unique valid string

```
import { StyleSheet, Font } from '@react-pdf/renderer'

// Register font
Font.register(source, { family: 'Roboto' });

// Reference font
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto'
  }
})
```

---

### `registerHyphenationCallback`

Enables you to have fine-grained control over how words break, passing your own callback and handle all that logic for yourself:

```
import { Font } from '@react-pdf/renderer'

const hyphenationCallback = (words) => {
  // Iterate through words
}

Font.registerHyphenationCallback(hyphenationCallback);
```

#### Disabling hyphenation

You can easily disable word hyphenation by just returning all words as they are passed to hte hyphenation callback

```
Font.registerHyphenationCallback(words => (
  words.map(word => [word])
));
```

---

### `registerEmojiSource`

PDF documents do not support color emoji fonts. This is a bummer for the ones out there who love their expressiveness and simplicity. The only way of rendering this glyphs on a PDF document, is by embedding them as images.

React-pdf makes this task simple by enabling you to use a CDN from where to download emoji images. All you have to do is setup a valid URL (we recommend using [Twemoji](https://github.com/twitter/twemoji) for this task), and react-pdf will take care of the rest:

```
import { Font } from '@react-pdf/renderer'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
});
```

> **Protip:** react-pdf will need a internet connection to download emoji's images at render time, so bare that in mind when choosing to use this API
