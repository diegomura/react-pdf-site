import DebugSample from '../src/components/DebugSample'
import GoToExample from '../src/components/GoToExample'

### Debugging

React-pdf ships a built-in debugging system you can use whenever you have doubts about how elements are being layout inside the page. All you have to do is setting the prop `debug` to `true` on any valid primitive (except _Document_), and re-render the document to see the result on screen.

<DebugSample />

<GoToExample />
