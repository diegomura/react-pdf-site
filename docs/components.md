import EditButton from '../src/components/EditButton'
import NavigationButtons from '../src/components/NavigationButtons'
import Document from './document.md'
import Page from './page.md'
import View from './view.md'
import Image from './image.md'
import Text from './text.md'
import Link from './link.md'
import Note from './note.md'
import Canvas from './canvas.md'
import PDFViewer from './pdf-viewer.md'
import PDFDownloadLink from './pdfdownloadlink.md'
import BlobProvider from './blobprovider.md'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/components.md" />

## Components

React-pdf follows the [React primitives](https://github.com/lelandrichardson/react-primitives) specification, making the learning process very straightforward if you come from another React environment (such as react-native). Additionally, it implements custom Component types that allow you to structure your PDF document.

<Document components={components} />
<Page components={components} />
<View components={components} />
<Image components={components} />
<Text components={components} />
<Link components={components} />
<Note components={components} />
<Canvas components={components} />
<PDFViewer components={components} />
<PDFDownloadLink components={components} />
<BlobProvider components={components} />

<NavigationButtons
  backSrc="/rendering-process"
  backText="Rendering process"
  nextSrc="/styling"
  nextText="Styling"
/>
