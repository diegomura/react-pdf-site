import Installation from './installation.md'
import QuickStart from './quick-start.md'
import Document from './document.md'
import Page from './page.md'
import View from './view.md'
import Text from './text.md'
import Link from './link.md'
import Styling from './styling.md'
import PageWrapping from './page-wrapping.md'
import OrphanWidowProtection from './orphan-widow-protection.md'
import EmojiRendering from './emoji-rendering.md'
import DynamicContent from './dynamic-content.md'
import Hyphenation from './hyphenation.md'
import Debugging from './debugging.md'
import RenderingProcess from './rendering-process.md'

<Installation components={components} />
<QuickStart components={components} />

## Components
React-pdf follows the [React primitives](https://github.com/lelandrichardson/react-primitives) specification, making the learing process very straightforward if you came from another react environment (such as react-native). Additionally, it implements some custom Components types that represent PDF document particular structure.

<Document components={components} />
<Page components={components} />
<View components={components} />
<Text components={components} />
<Link components={components} />

---

<Styling components={components} />

## Advanced
<PageWrapping components={components} />
<OrphanWidowProtection components={components} />
<EmojiRendering components={components} />
<DynamicContent components={components} />
<Debugging components={components} />
<Hyphenation components={components} />
<RenderingProcess components={components} />
