### Image

A React component for displaying network or local (Node only) JPG or PNG images, as well as base64 encoded image strings.

#### Valid props

| Prop name                       |                                             Description                                             |              Type |     Default |
| ------------------------------- | :-------------------------------------------------------------------------------------------------: | ----------------: | ----------: |
| src                             |                 Source of the image [See Source object](/components#source-object)                  |   _Source object_ | _undefined_ |
| source                          |                    Alias of _src_ [See Source object](/components#source-object)                    |   _Source object_ | _undefined_ |
| style                           |                              Defines view styles. [See more](/styling)                              | _Object_, _Array_ | _undefined_ |
| debug                           |              Enables debug mode on view bounding box. [See more](/advanced#debugging)               |         _Boolean_ |     _false_ |
| fixed                           |             Renders component in all wrapped pages. [See more](/advanced#page-wrapping)              |         _Boolean_ |     _false_ |
| cache                           |                          Enables image caching between consecutive renders                          |         _Boolean_ |      _true_ |
| safePath                        |                  The safe path from which local images (Node only) can be rendered                  |          _String_ |  _./public_ |
| allowDangerousPaths `Node only` | Allows local images to be retrieved from paths outside the _safePath_. _Use this at your own risk!_ |         _Boolean_ |     _false_ |

##### Source object

Defines the source of an image. Can be in any of these four valid forms:

| Form type   |                                                            Description                                                             | Example                                                    |
| ----------- | :--------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------- |
| String      |                                           Valid image URL or filesystem path (Node only)                                           | `www.react-pdf.org/test.jpg`                               |
| URL object  |                                       Enables to pass extra parameters on how to fetch images                                       | `{ uri: valid-url, method: 'GET', headers: {}, body: '' }` |
| Data buffer | Renders buffer image via the _data_ key. It's also recommended to provide the image _format_ so the engine knows how to proccess it | `{ data: Buffer, format: 'png' \| 'jpg' }`                 |
| Function | A function that returns (can also return a promise that resolves to) any of the above formats |  `() => String \| Promise<String>`              |

---
