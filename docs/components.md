import EditButton from '../src/components/Docs/EditButton'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/components.md" />

## Components

React-pdf follows the [React primitives](https://github.com/lelandrichardson/react-primitives) specification, making the learning process very straightforward if you come from another React environment (such as react-native). Additionally, it implements custom Component types that allow you to structure your PDF document.

### Document

This component represents the PDF document itself. It _must_ be the root of your tree element structure, and under no circumstances should it be used as child of another react-pdf component. In addition, it should only have children of type `<Page />`.

#### Valid props

| Prop name  |                               Description                               |                                      Type |       Default |
|------------|:-----------------------------------------------------------------------:|------------------------------------------:|--------------:|
| title      |               Sets title info on the document's metadata                |                                  _String_ |   _undefined_ |
| author     |               Sets author info on the document's metadata               |                                  _String_ |   _undefined_ |
| subject    |              Sets subject info on the document's metadata               |                                  _String_ |   _undefined_ |
| keywords   |        Sets keywords associated info on the document's metadata         |                                  _String_ |   _undefined_ |
| creator    |              Sets creator info on the document's metadata               |                                  _String_ | _"react-pdf"_ |
| producer   |              Sets producer info on the document's metadata              |                                  _String_ | _"react-pdf"_ |
| pdfVersion |                 Sets PDF version for generated document                 |                                  _String_ |       _"1.3"_ |
| language   |                        Sets PDF default language                        |                                  _String_ |   _undefined_ |
| pageMode   |       Specifying how the document should be displayed when opened       |     [PageMode](/components#pagemode-type) |     _useNone_ |
| pageLayout |        This controls how (some) PDF viewers choose to show pages        | [PageLayout](/components#pagelayout-type) |  _singlePage_ |
| onRender   | Callback after document renders. Receives document blob argument in web |                                _Function_ |   _undefined_ |

##### PageMode type

`pageMode` prop can take one of the following values. Take into account some viewers might ignore this setting.

| Value          |                                   Description                                    |
|----------------|:--------------------------------------------------------------------------------:|
| useNone        |             Neither document bookmarks nor thumbnail images visible              |
| useOutlines    |                            Document bookmarks visible                            |
| useThumbs      |                             Thumbnail images visible                             |
| fullScreen     | Full-screen mode, with no menu bar, window controls, or any other window visible |
| useOC          |                       Optional content group panel visible                       |
| useAttachments |                            Attachments panel visible                             |

##### PageLayout type

`pageLayout` prop can take one of the following values. Take into account some viewers might ignore this setting.

| Value          |                              Description                               |
|----------------|:----------------------------------------------------------------------:|
| singlePage     |                       Display one page at a time                       |
| oneColumn      |                    Display the pages in one column                     |
| twoColumnLeft  | Display the pages in two columns, with odd numbered pages on the left  |
| twoColumnRight | Display the pages in two columns, with odd numbered pages on the right |
| twoPageLeft    |  Display the pages two at a time, with odd-numbered pages on the left  |
| twoPageRight   | Display the pages two at a time, with odd-numbered pages on the right  |

---

### Page

Represents single page inside the PDF documents, or a subset of them if using the wrapping feature. A `<Document />` can contain as many pages as you want, but ensures not rendering a page inside any component besides Document.

#### Valid props

| Prop name   |                                                                                                         Description                                                                                                         |                                            Type |      Default |
|-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|------------------------------------------------:|-------------:|
| size        | Defines page size. If _String_, must be one of the [available page sizes](https://github.com/diegomura/react-pdf/blob/master/packages/layout/src/page/getSize.js). Height is optional, if ommited it will behave as "auto". |           _String_, _Array_, _Number_, _Object_ |       _"A4"_ |
| orientation |                                                                             Defines page orientation. _Valid values: "portrait" or "landscape"_                                                                             |                                        _String_ | _"portrait"_ |
| wrap        |                                                                          Enables page wrapping for this page. [See more](/advanced#page-wrapping)                                                                           |                                       _Boolean_ |       _true_ |
| style       |                                                                                          Defines page styles. [See more](/styling)                                                                                          |                               _Object_, _Array_ |  _undefined_ |
| debug       |                                                                          Enables debug mode on page bounding box. [See more](/advanced#debugging)                                                                           |                                       _Boolean_ |      _false_ |
| dpi         |                                                                                       Enables setting a custom DPI for page contents.                                                                                       |                                        _Number_ |         _72_ |
| id          |                                                                             Destination ID to be linked to. [See more](/advanced#destinations)                                                                              |                                        _String_ |  _undefined_ |
| bookmark    |                                                                                 Attach bookmark to element. [See more](/advanced#bookmarks)                                                                                 | _String_ or [Bookmark](/advanced#bookmark-type) |  _undefined_ |

---

### View

The most fundamental component for building a UI and is designed to be nested inside other views and can have 0 to many children.

#### Valid props

| Prop name |                                  Description                                   |                                            Type |     Default |
|-----------|:------------------------------------------------------------------------------:|------------------------------------------------:|------------:|
| wrap      | Enable/disable page wrapping for element. [See more](/advanced#page-wrapping)  |                                       _Boolean_ |      _true_ |
| style     |                   Defines view styles. [See more](/styling)                    |                               _Object_, _Array_ | _undefined_ |
| render    | Render dynamic content based on context. [See more](/advanced#dynamic-content) |                                      _Function_ | _undefined_ |
| debug     |    Enables debug mode on view bounding box. [See more](/advanced#debugging)    |                                       _Boolean_ |     _false_ |
| fixed     |   Render component in all wrapped pages. [See more](/advanced#page-wrapping)   |                                       _Boolean_ |     _false_ |
| id        |       Destination ID to be linked to. [See more](/advanced#destinations)       |                                        _String_ | _undefined_ |
| bookmark  |          Attach bookmark to element. [See more](/advanced#bookmarks)           | _String_ or [Bookmark](/advanced#bookmark-type) | _undefined_ |

---

### Image

A React component for displaying network or local (Node only) JPG or PNG images, as well as base64 encoded image strings.

#### Valid props

| Prop name |                                 Description                                 |                                            Type |     Default |
|-----------|:---------------------------------------------------------------------------:|------------------------------------------------:|------------:|
| src       |         Source of the image. [See more](/components#source-object)          |                                 _Source object_ | _undefined_ |
| source    |            Alias of _src_. [See more](/components#source-object)            |                                 _Source object_ | _undefined_ |
| style     |                  Defines view styles. [See more](/styling)                  |                               _Object_, _Array_ | _undefined_ |
| debug     |  Enables debug mode on view bounding box. [See more](/advanced#debugging)   |                                       _Boolean_ |     _false_ |
| fixed     | Renders component in all wrapped pages. [See more](/advanced#page-wrapping) |                                       _Boolean_ |     _false_ |
| cache     |              Enables image caching between consecutive renders              |                                       _Boolean_ |      _true_ |
| bookmark  |         Attach bookmark to element. [See more](/advanced#bookmarks)         | _String_ or [Bookmark](/advanced#bookmark-type) | _undefined_ |

##### Source object

Defines the source of an image. Can be in any of these four valid forms:

| Form type   |                                                             Description                                                             | Example                                                    |
|-------------|:-----------------------------------------------------------------------------------------------------------------------------------:|------------------------------------------------------------|
| String      |                                           Valid image URL or filesystem path (Node only)                                            | `www.react-pdf.org/test.jpg`                               |
| URL object  |                                       Enables to pass extra parameters on how to fetch images                                       | `{ uri: valid-url, method: 'GET', headers: {}, body: '' }` |
| Buffer      |                   Renders image directly from Buffer. Image format (png or jpg) will be guessed based on Buffer.                    | `Buffer`                                                   |
| Data buffer | Renders buffer image via the _data_ key. It's also recommended to provide the image _format_ so the engine knows how to proccess it | `{ data: Buffer, format: 'png' \| 'jpg' }`                 |
| Function    |                    A function that returns (can also return a promise that resolves to) any of the above formats                    | `() => String \| Promise<String>`                          |

---

### Text

A React component for displaying text. Text supports nesting of other Text or Link components to create inline styling.

#### Valid props

| Prop name           |                                       Description                                       |                                            Type |     Default |
|---------------------|:---------------------------------------------------------------------------------------:|------------------------------------------------:|------------:|
| wrap                |     Enables/disables page wrapping for element. [See more](/advanced#page-wrapping)     |                                       _Boolean_ |      _true_ |
| render              |     Renders dynamic content based on context. [See more](/advanced#dynamic-content)     |                                      _Function_ | _undefined_ |
| style               |                        Defines view styles. [See more](/styling)                        |                               _Object_, _Array_ | _undefined_ |
| debug               |        Enables debug mode on view bounding box. [See more](/advanced#debugging)         |                                       _Boolean_ |     _false_ |
| fixed               |       Renders component in all wrapped pages. [See more](/advanced#page-wrapping)       |                                       _Boolean_ |     _false_ |
| hyphenationCallback | Specify hyphenation callback at a text level. See [hypthenation](/advanced#hyphenation) |                                      _Function_ | _undefined_ |
| id                  |           Destination ID to be linked to. [See more](/advanced#destinations)            |                                        _String_ | _undefined_ |
| bookmark            |               Attach bookmark to element. [See more](/advanced#bookmarks)               | _String_ or [Bookmark](/advanced#bookmark-type) | _undefined_ |

---

### Link

A React component for displaying an hyperlink. Link’s can be nested inside a Text component, or being inside any other valid primitive.

#### Valid props

| Prop name |                                          Description                                          |                                            Type |     Default |
|-----------|:---------------------------------------------------------------------------------------------:|------------------------------------------------:|------------:|
| src       | Valid URL or destination ID. ID must be prefixed with `#`. [See more](/advanced#destinations) |                                        _String_ | _undefined_ |
| wrap      |         Enable/disable page wrapping for element. [See more](/advanced#page-wrapping)         |                                       _Boolean_ |      _true_ |
| style     |                           Defines view styles. [See more](/styling)                           |                               _Object_, _Array_ | _undefined_ |
| debug     |           Enables debug mode on view bounding box. [See more](/advanced#debugging)            |                                       _Boolean_ |     _false_ |
| fixed     |          Render component in all wrapped pages. [See more](/advanced#page-wrapping)           |                                       _Boolean_ |     _false_ |
| bookmark  |                  Attach bookmark to element. [See more](/advanced#bookmarks)                  | _String_ or [Bookmark](/advanced#bookmark-type) | _undefined_ |

---

### Note

A React component for displaying a note annotation inside the document.

#### Valid props

| Prop name |                                 Description                                 |              Type |     Default |
|-----------|:---------------------------------------------------------------------------:|------------------:|------------:|
| style     |                  Defines view styles. [See more](/styling)                  | _Object_, _Array_ | _undefined_ |
| children  |                             Note string content                             |          _String_ | _undefined_ |
| fixed     | Renders component in all wrapped pages. [See more](/advanced#page-wrapping) |         _Boolean_ |     _false_ |

---

### Canvas

A React component for freely drawing any content on the page.

#### Valid props

| Prop name |                                 Description                                 |                                            Type |     Default |
|-----------|:---------------------------------------------------------------------------:|------------------------------------------------:|------------:|
| style     |                  Defines view styles. [See more](/styling)                  |                               _Object_, _Array_ | _undefined_ |
| paint     |                              Painter function                               |                                      _Function_ | _undefined_ |
| debug     |  Enables debug mode on view bounding box. [See more](/advanced#debugging)   |                                       _Boolean_ |     _false_ |
| fixed     | Renders component in all wrapped pages. [See more](/advanced#page-wrapping) |                                       _Boolean_ |     _false_ |
| bookmark  |         Attach bookmark to element. [See more](/advanced#bookmarks)         | _String_ or [Bookmark](/advanced#bookmark-type) | _undefined_ |

React-pdf does not check how much space your drawing takes, so make sure you always define a `width` and `height` on the `style` prop.

##### Painter function

Prop used to perform drawings inside the Canvas. It takes 3 arguments:

- `Painter object`: Wrapper around _pdfkit_ drawing methods. Use this to draw inside the Canvas
- `availableWidth`: Width of the Canvas element.
- `availableHeight`: Height of the Canvas element.

##### Painter object

Wrapper around _pdfkit_ methods you can use to draw inside the Canvas. All operations are chainable. For more information about how these methods work, please refer to [pdfkit documentation](http://pdfkit.org/).

Available methods:

- dash
- clip
- save
- path
- fill
- font
- text
- rect
- scale
- moveTo
- lineTo
- stroke
- rotate
- circle
- lineCap
- opacity
- ellipse
- polygon
- restore
- lineJoin
- fontSize
- fillColor
- lineWidth
- translate
- miterLimit
- strokeColor
- fillOpacity
- roundedRect
- strokeOpacity
- bezierCurveTo
- quadraticCurveTo
- linearGradient
- radialGradient

---

### PDFViewer `Web only`

Iframe PDF viewer for client-side generated documents.

#### Valid props

| Prop name   |                       Description                        |               Type |     Default |
|-------------|:--------------------------------------------------------:|-------------------:|------------:|
| style       |                  Defines iframe styles                   |  _Object_, _Array_ | _undefined_ |
| className   |                Defines iframe class name                 |          _String _ | _undefined_ |
| children    |               PDF document implementation                |         _Document_ | _undefined_ |
| width       |               Width of embedded PDF iframe               | _String_, _Number_ | _undefined_ |
| height      |              Height of embedded PDF iframe               | _String_, _Number_ | _undefined_ |
| showToolbar | Render the toolbar. Supported on Chrome, Edge and Safari |          _Boolean_ |      _true_ |

Other props are passed through to the iframe.

---

### PDFDownloadLink `Web only`

Anchor tag to enable generate and download PDF documents on the fly.
Refer to [on the fly rendering](/advanced#on-the-fly-rendering) for more information.

#### Valid props

| Prop name |          Description          |                   Type |     Default |
|-----------|:-----------------------------:|-----------------------:|------------:|
| document  |  PDF document implementation  |             _Document_ | _undefined_ |
| fileName  |    Download PDF file name     |               _String_ | _undefined_ |
| style     |   Defines anchor tag styles   |      _Object_, _Array_ | _undefined_ |
| className | Defines anchor tag class name |               _String_ | _undefined_ |
| children  |      Anchor tag content       | _DOM node_, _Function_ | _undefined_ |

---

### BlobProvider `Web only`

Easy and declarative way of getting document's blob data without showing it on screen.
Refer to [on the fly rendering](/advanced#on-the-fly-rendering) for more information.

#### Valid props

| Prop name |                           Description                            |       Type |     Default |
|-----------|:----------------------------------------------------------------:|-----------:|------------:|
| document  |                   PDF document implementation                    | _Document_ | _undefined_ |
| children  | Render prop with blob, url, error and loading state as arguments | _Function_ | _undefined_ |

---

<NavigationButtons
  backSrc="/rendering-process"
  backText="Rendering process"
  nextSrc="/svg"
  nextText="SVG"
/>
