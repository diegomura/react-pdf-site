import EditButton from '../src/components/Docs/EditButton'
import GoToExample from '../src/components/Docs/GoToExample'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/fonts.md" />

## Fonts

React-pdf is shipped with a `Font` module that enables to load fonts from different sources, handle how words are wrapped and defined an emoji source to embed these glyphs on your document.

You can define multiple sources for the same font family, each with a different `fontStyle` or `fontWeight`. React-pdf will pick the appropriate font for each `<Text />` based on its style and the registered fonts.

```
import { StyleSheet, Font } from '@react-pdf/renderer'

// Register font
Font.register({ family: 'Roboto', src: source });

// Reference font
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto'
  }
})
```

---

### `register`

Fonts really make the difference when it comes on styling a document. For obvious reasons, react-pdf cannot ship a wide amount of them. Here's a list of available font families that are supported out of the box:

- `Courier`
- `Courier-Bold`
- `Courier-Oblique`
- `Courier-BoldOblique`
- `Helvetica`
- `Helvetica-Bold`
- `Helvetica-Oblique`
- `Helvetica-BoldOblique`
- `Times-Roman`
- `Times-Bold`
- `Times-Italic`
- `Times-BoldItalic`

In case you want to use a different font, you may load additional font files from many different sources via the `register` method very easily.

```
import { Font } from '@react-pdf/renderer'

Font.register({ family: 'FamilyName', src: source, fontStyle: 'normal', fontWeight: 'normal', fonts?: [] });
```

#### source

Specifies the source of the font. This can either be a valid URL, or an absolute path if you're using react-pdf on Node.

#### family

Name to which the font will be referenced on styles definition. Can be any unique valid string

#### fontStyle

Specifies to which font style the registered font refers to.

| Value   | Description                                                                                                                                             |
| ------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| normal  | Selects a font that is classified as normal _Default_                                                                                                   |
| italic  | Selects a font that is classified as italic. If no italic version of the font is registered, react-pdf will fail when a style of this type is present   |
| oblique | Selects a font that is classified as oblique. If no oblique version of the font is registered, react-pdf will fail when a style of this type is present |

#### fontWeight

Specifies the registered font weight.

| Value      | Description                          |
| ---------- | :----------------------------------- |
| thin       | Equals to value 100                  |
| ultralight | Equals to value 200                  |
| light      | Equals to value 300                  |
| normal     | Equals to value 400 _Default_        |
| medium     | Equals to value 500                  |
| semibold   | Equals to value 600                  |
| bold       | Equals to value 700                  |
| ultrabold  | Equals to value 800                  |
| heavy      | Equals to value 900                  |
| _number_   | Any integer value between 0 and 1000 |

When the exact font weight is not registered for a given text, react-pdf will fallback to the nearest registered weight in the same way browsers do. More information [here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights)

<GoToExample name="font-register" />

#### fonts

In many cases you will end up registering multiple sources for the same font family (each with different font-style and font-weight for instance). As an alternative of calling `Font.register` for each of this, you can use the `fonts` attribute to register them all at once:

```
Font.register({ family: 'Roboto', fonts: [
 { src: source1 }, // font-style: normal, font-weight: normal
 { src: source2, fontStyle: 'italic' },
 { src: source3, fontStyle: 'italic', fontWeight: 700 },
]});
```

---

### `registerHyphenationCallback`

Enables you to have fine-grained control over how words break, passing your own callback and handle all that logic for yourself:

```
import { Font } from '@react-pdf/renderer'

const hyphenationCallback = (word) => {
  // Return word parts in an array
}

Font.registerHyphenationCallback(hyphenationCallback);
```

<GoToExample name="hyphenation-callback" />

#### Disabling hyphenation

You can easily disable word hyphenation by just returning the same word as it is passed to the hyphenation callback

```
Font.registerHyphenationCallback(word => [word]);
```

<GoToExample name="disable-hyphenation" />

---

### `registerEmojiSource`

PDF documents do not support color emoji fonts. This is a bummer for the ones out there who love their expressiveness and simplicity. The only way of rendering this glyphs on a PDF document, is by embedding them as images.

React-pdf makes this task simple by enabling you to use a CDN from where to download emoji images. All you have to do is setup a valid URL (we recommend using [Twemoji](https://github.com/twitter/twemoji) for this task), and react-pdf will take care of the rest:

```
import { Font } from '@react-pdf/renderer'

Font.registerEmojiSource({
  format: 'png',
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});
```

> **Protip:** react-pdf will need a internet connection to download emoji's images at render time, so bare that in mind when choosing to use this API

<GoToExample name="emoji" />

<NavigationButtons
  backSrc="/styling"
  backText="Styling"
  nextSrc="/node"
  nextText="Node API"
/>
