import EditButton from '../src/components/Docs/EditButton'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

import PageWrapping from './page-wrapping.md'
import DocumentNavigation from './document-navigation.md'
import OnTheFly from './on-the-fly.md'
import OrphanWidowProtection from './orphan-widow-protection.md'
import DynamicContent from './dynamic-content.md'
import Hyphenation from './hyphenation.md'
import Debugging from './debugging.md'
import Express from './express.md'
import WebWorkers from './web-workers.md'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/advanced.md" />

## Advanced

<PageWrapping components={components} />
<DocumentNavigation components={components} />
<OnTheFly components={components} />
<OrphanWidowProtection components={components} />
<DynamicContent components={components} />
<Debugging components={components} />
<Hyphenation components={components} />
<Express components={components} />
<WebWorkers components={components} />

<NavigationButtons
  backSrc="/styling"
  backText="Styling"
  nextSrc="/repl"
  nextText="REPL"
/>
