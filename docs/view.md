### View

The most fundamental component for building a UI and is designed to be nested inside other views and can have 0 to many children.

#### Valid props

| Prop name    | Description                                                                     |  Type             |   Default   |
| ------------ |:-------------------------------------------------------------------------------:| -----------------:| -----------:|
| wrap         | Enable/disable page wrapping for element [See more](#page-wrapping)             | *Boolean*         | _false_     |
| style        | Defines view styles. [See more](#styling)                                       | *Object*, *Array* | _undefined_ |
| render       | Render dynamic content based on context [See more](#rendering-dynamic-content)  | *Function*        | _undefined_ |
| debug        | Enables debug mode on view bounding box. [See more](#debugging)                 | *Boolean*         | _false_     |

---
