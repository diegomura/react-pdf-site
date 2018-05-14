import NavigationButtons from '../src/components/NavigationButtons'
import Document from './document.md'
import Page from './page.md'
import View from './view.md'
import Image from './image.md'
import Text from './text.md'
import Link from './link.md'

## Components
React-pdf follows the [React primitives](https://github.com/lelandrichardson/react-primitives) specification, making the learing process very straightforward if you came from another React environment (such as react-native). Additionally, it implements some custom Components types that represent PDF document particular structure.

<Document components={components} />
<Page components={components} />
<View components={components} />
<Image components={components} />
<Text components={components} />
<Link components={components} />

<NavigationButtons
  backSrc="/rendering-process"
  backText="Rendering process"
  nextSrc="/styling"
  nextText="Styling"
/>
