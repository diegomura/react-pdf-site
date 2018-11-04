### Text

A React component for displaying text. Text supports nesting of other Text or Link components to create inline styling.

#### Valid props

| Prop name           |                                  Description                                   |              Type |     Default |
| ------------------- | :----------------------------------------------------------------------------: | ----------------: | ----------: |
| wrap                |      Enable/disable page wrapping for element [See more](#page-wrapping)       |         _Boolean_ |      _true_ |
| render              | Render dynamic content based on context [See more](#rendering-dynamic-content) |        _Function_ | _undefined_ |
| style               |                   Defines view styles. [See more](#styling)                    | _Object_, _Array_ | _undefined_ |
| debug               |        Enables debug mode on view bounding box. [See more](#debugging)         |         _Boolean_ |     _false_ |
| fixed               |   Render component in all wrapped pages. [See more](/advanced#page-wrapping)   |         _Boolean_ |     _false_ |
| hyphenationCallback |              Specify how much hyphenated breaks should be avoided              |         _Integer_ |       _600_ |

---
