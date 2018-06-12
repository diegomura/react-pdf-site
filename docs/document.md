### Document
This component represent the PDF document itself. It *must* be the root of your tree element structure, and under no circumstances should it be used as children of another react-pdf component. In addition, it should only have childs of type `<Page />`.

#### Valid props

| Prop name              | Description                                               |  Type    | Default     |
| ---------------------- |:---------------------------------------------------------:| --------:| -----------:|
| title                  | Sets title info on the document's metadata                | *String* | _undefined_ |
| author                 | Sets author info on the document's metadata               | *String* | _undefined_ |
| subject                | Sets subject info on the document's metadata              | *String* | _undefined_ |
| keywords               | Sets keywords associated info on the document's metadata  | *String* | _undefined_ |
| creator                | Sets creator info on the document's metadata              | *String* | _react-pdf_ |
| producer               | Sets producer info on the document's metadata             | *String* | _react-pdf_ |

---
