### Text

A React component for displaying text. Text supports nesting of other Text or Link components to create inline styling.

#### Valid props

| Prop name   | Description                                                                     |  Type             |   Default   |
| ----------- |:-------------------------------------------------------------------------------:| -----------------:| -----------:|
| wrap        | Enable/disable page wrapping for element [See more](#page-wrapping)             | *Boolean*         | _true_      |
| render      | Render dynamic content based on context [See more](#rendering-dynamic-content)  | *Function*        | _undefined_ |
| style       | Defines view styles. [See more](#styling)                                       | *Object*, *Array* | _undefined_ |
| debug       | Enables debug mode on view bounding box. [See more](#debugging)                 | *Boolean*         | _false_     |
| fixed       | Render component in all wrapped pages. [See more](/advanced#page-wrapping)     | *Boolean*         | _false_     |

---
