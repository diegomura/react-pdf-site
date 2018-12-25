### View

The most fundamental component for building a UI and is designed to be nested inside other views and can have 0 to many children.

#### Valid props

| Prop name |                                  Description                                  |              Type |     Default |
|-----------|:-----------------------------------------------------------------------------:|------------------:|------------:|
| wrap      |  Enable/disable page wrapping for element [See more](/advanced#page-wrapping) |         _Boolean_ |      _true_ |
| style     |                   Defines view styles. [See more](/styling)                   | _Object_, _Array_ | _undefined_ |
| render    | Render dynamic content based on context [See more](/advanced#dynamic-content) |        _Function_ | _undefined_ |
| debug     |    Enables debug mode on view bounding box. [See more](/advanced#debugging)   |         _Boolean_ |     _false_ |
| fixed     |   Render component in all wrapped pages. [See more](/advanced#page-wrapping)  |         _Boolean_ |     _false_ |

---
