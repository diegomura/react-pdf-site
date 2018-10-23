### Page
Represents single page inside the PDF document, or a subset of them if using the wrapping feature. A `<Document />` can contain as many pages as you want, but ensure not rendering a page inside any component besides Document.

#### Valid props

| Prop name            | Description                                               |  Type    |   Default   |
| -------------------- |:---------------------------------------------------------:| --------:| -----------:|
| size                 | Defines page size. See [available page sizes](https://github.com/diegomura/react-pdf/blob/master/src/utils/pageSizes.js) | *String*, *Object*, *Array*    | _"A4"_ |
| orientation          | Defines page orientation. _Valid values: "portrait" or "landscape"_     | *String* | _"portrait"_ |
| wrap                 | Enable page wrapping for this page. [See more](/advanced#page-wrapping)          | *Boolean* | _true_ |
| style                | Defines page styles. [See more](/styling)               | *Object*, *Array* | _undefined_ |
| debug                | Enables debug mode on page bounding box. [See more](/advanced#debugging)         | *Boolean* | _false_ |
| ruler                | Enables vertical and horizontal rulers on page. [See more](/advanced#ruler)         | *Boolean* | _false_ |
| rulerSteps           | Grid separation for horizontal and vertical rulers [See more](/advanced#ruler)         | *Integer* *Float* *String* | 50 |
| verticalRuler        | Enables vertical ruler on page. [See more](/advanced#ruler)         | *Boolean* | _false_ |
| verticalRulerSteps   | Grid separation for vertical ruler [See more](/advanced#ruler)         | *Integer* *Float* *String*  | 50 |
| horizontalRuler      | Enables horizontal ruler on page. [See more](/advanced#ruler)         | *Boolean* | _false_ |
| horizontalRulerSteps | Grid separation for horizontal rulers [See more](/advanced#ruler)         | *Integer* *Float* *String*  | 50 |

---
