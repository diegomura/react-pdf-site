### Image

A React component for displaying network or local (Node only) JPG or PNG images, as well as base64 encoded image strings.

#### Valid props

| Prop name |                                 Description                                |              Type |     Default |
|-----------|:--------------------------------------------------------------------------:|------------------:|------------:|
| src | Valid image URL / filesystem path (Node only) (string) or object with image data and format:<br/>`url-or-path: String \| { data: Buffer; format: 'png' \| 'jpg' };` | _String_, _Object_ | _undefined_ |
| style     |                  Defines view styles. [See more](/styling)                 | _Object_, _Array_ | _undefined_ |
| debug     |  Enables debug mode on view bounding box. [See more](/advanced#debugging)  |         _Boolean_ |     _false_ |
| fixed     | Render component in all wrapped pages. [See more](/advanced#page-wrapping) |         _Boolean_ |     _false_ |
| cache     |              Enables image caching between consecutive renders             |         _Boolean_ |      _true_ |
| safePath  |     The safe path from which local images (Node only) can be rendered      |          _String_ | `'./public'` |
| allowDangerousPaths&nbsp;:warning: | If truthy, allows local images (Node only) to be retrieved from paths outside the `safePath`. _Use this at your own risk!_ | _Boolean_ | _false_ |

---
