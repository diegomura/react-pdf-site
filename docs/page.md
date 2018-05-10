### Page
Represents single page inside the PDF document, or a subset of them if using the wrapping feature. A `<Document />` can contain as many pages as you want, but ensure not rendering a page inside any component besides Document.

#### Valid props

| Prop name       | Description                                               |  Type    |   Default   |
| --------------- |:---------------------------------------------------------:| --------:| -----------:|
| size            | Defines page size. See [available page sizes](https://github.com/diegomura/react-pdf/blob/master/packages/react-pdf/src/utils/pageSizes.js) | *String*, *Object*, *Array* | _"A4"_ |
| orientation     | Defines page orientation. _Valid values: "portrait" or "landscape"_     | *String* | _"portrait"_ |
| wrap            | Enable page wrapping for this page. [See more](#page-wrapping)          | *Boolean* | _false_ |
| style           | Defines page styles. [See more](#styling)               | *Object*, *Array* | _undefined_ |
| debug           | Enables debug mode on page bounding box. [See more](#debugging)         | *Boolean* | _false_ |
