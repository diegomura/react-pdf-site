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

---
