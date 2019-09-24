### Page

Represents single page inside the PDF documents, or a subset of them if using the wrapping feature. A `<Document />` can contain as many pages as you want, but ensures not rendering a page inside any component besides Document.

#### Valid props

| Prop name            |                                                       Description                                                        |                        Type |      Default |
| -------------------- | :----------------------------------------------------------------------------------------------------------------------: | --------------------------: | -----------: |
| size                 | Defines page size. If _String_, must be one of the [available page sizes](https://github.com/diegomura/react-pdf/blob/master/src/utils/pageSizes.js). Height is optional, if ommited it will behave as "auto". | _String_, _Array_, _Number_, _Object_ |       _"A4"_ |
| orientation          |                           Defines page orientation. _Valid values: "portrait" or "landscape"_                            |                    _String_ | _"portrait"_ |
| wrap                 |                         Enables page wrapping for this page. [See more](/advanced#page-wrapping)                          |                   _Boolean_ |       _true_ |
| style                |                                        Defines page styles. [See more](/styling)                                         |           _Object_, _Array_ |  _undefined_ |
| debug                |                         Enables debug mode on page bounding box. [See more](/advanced#debugging)                         |                   _Boolean_ |      _false_ |
| ruler                |                       Enables vertical and horizontal rulers on page. [See more](/advanced#ruler)                        |                   _Boolean_ |      _false_ |
| rulerSteps           |                      Grid separation for horizontal and vertical rulers [See more](/advanced#ruler)                      |  _Integer_ _Float_ _String_ |           50 |
| verticalRuler        |                               Enables vertical ruler on page. [See more](/advanced#ruler)                                |                   _Boolean_ |      _false_ |
| verticalRulerSteps   |                              Grid separation for vertical ruler [See more](/advanced#ruler)                              |  _Integer_ _Float_ _String_ |           50 |
| horizontalRuler      |                              Enables horizontal ruler on page. [See more](/advanced#ruler)                               |                   _Boolean_ |      _false_ |
| horizontalRulerSteps |                            Grid separation for horizontal rulers [See more](/advanced#ruler)                             |  _Integer_ _Float_ _String_ |           50 |

---
