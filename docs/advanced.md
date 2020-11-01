import EditButton from '../src/components/EditButton'
import NavigationButtons from '../src/components/NavigationButtons'
import PageWrapping from './page-wrapping.md'
import OnTheFly from './on-the-fly.md'
import OrphanWidowProtection from './orphan-widow-protection.md'
import DynamicContent from './dynamic-content.md'
import Hyphenation from './hyphenation.md'
import Debugging from './debugging.md'
import Webpack from './webpack.md'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/advanced.md" />

## Advanced

<PageWrapping components={components} />
<OnTheFly components={components} />
<OrphanWidowProtection components={components} />
<DynamicContent components={components} />
<Debugging components={components} />
<Hyphenation components={components} />
<Webpack components={components} />

<NavigationButtons
  backSrc="/styling"
  backText="Styling"
  nextSrc="/repl"
  nextText="REPL"
/>
