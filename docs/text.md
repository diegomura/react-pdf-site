### Text

A React component for displaying text. Text supports nesting of other Text or Link components to create inline styling.

#### Valid props

| Prop name           |                                  Description                                  |              Type |     Default |
|---------------------|:-----------------------------------------------------------------------------:|------------------:|------------:|
| wrap                |  Enables/disables page wrapping for element [See more](/advanced#page-wrapping) |         _Boolean_ |      _true_ |
| render              | Renders dynamic content based on context [See more](/advanced#dynamic-content) |        _Function_ | _undefined_ |
| style               |                   Defines view styles. [See more](/styling)                   | _Object_, _Array_ | _undefined_ |
| debug               |    Enables debug mode on view bounding box. [See more](/advanced#debugging)   |         _Boolean_ |     _false_ |
| fixed               |   Renders component in all wrapped pages. [See more](/advanced#page-wrapping)  |         _Boolean_ |     _false_ |
| hyphenationCallback |              Specifies how much hyphenated breaks should be avoided             |         _Integer_ |       _600_ |

---
