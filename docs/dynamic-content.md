### Dynamic content

With react-pdf it is now possible to render dynamic text based on the context in which a certain element is being rendered. All you have to do is to pass a function to the `render` prop of the `<Text />` component. The result will be rendered inside the text block as children.

```
import { Document, Page } from '@react-pdf/react-pdf'

const doc = () => (
  <Document>
    <Page wrap>
      <Text render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);
```

#### Available arguments

| Name        | Description                                                            |  Type             |
| ----------- |:----------------------------------------------------------------------:| -----------------:|
| pageNumber  | Current page number                                                    | *Integer*         |
| totalPages  | Total amount of pages in the final document                            | *Integer*         |


> **Protip:** Use this API in conjunction with fixed elements to render page number indicators

---
