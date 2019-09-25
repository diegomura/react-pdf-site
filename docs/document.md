### Document

This component represents the PDF document itself. It _must_ be the root of your tree element structure, and under no circumstances should it be used as child of another react-pdf component. In addition, it should only have children of type `<Page />`.

#### Valid props

| Prop name              |                               Description                               |               Type |       Default |
| ---------------------- | :---------------------------------------------------------------------: | -----------------: | ------------: |
| title                  |               Sets title info on the document's metadata                |           _String_ |   _undefined_ |
| author                 |               Sets author info on the document's metadata               |           _String_ |   _undefined_ |
| subject                |              Sets subject info on the document's metadata               |           _String_ |   _undefined_ |
| keywords               |        Sets keywords associated info on the document's metadata         |           _String_ |   _undefined_ |
| creator                |              Sets creator info on the document's metadata               |           _String_ | _"react-pdf"_ |
| producer               |              Sets producer info on the document's metadata              |           _String_ | _"react-pdf"_ |
| onRender               | Callback after document renders. Receives document blob argument in web |         _Function_ |   _undefined_ |

---
