import GoToExample from '../src/components/GoToExample'

### Emoji rendering

PDF documents do not support color emoji fonts. This is a bummer for the ones out there who love their expressiveness and simplicity. The only way of rendering this glyphs on a PDF document, is by embedding them as images.

React-pdf makes this task simple by enabling you to use a CDN from where to download emoji images. All you have to do is setup a valid URL (we recommend using [Twemoji](https://github.com/twitter/twemoji) for this task), and react-pdf will take care of the rest:

```
import { Font } from '@react-pdf/core'

Font.registerEmojiSource({
  format: 'png',
  url: 'https://twemoji.maxcdn.com/2/72x72/',
});
```

> **Protip:** react-pdf will need internet connection to download emoji's images at render time, so bare that in mind when choosing to use this API

<GoToExample />
