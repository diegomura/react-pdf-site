import GoToExample from '../src/components/GoToExample'

### Dynamic content

With react-pdf it is now possible to render dynamic text based on the context in which a certain element is being rendered. All you have to do is to pass a function to the `render` prop of the `<Text />` or `<View />` component. The result will be rendered inside the text block as children.

```
import { Document, Page } from '@react-pdf/renderer'

const doc = () => (
  <Document>
    <Page wrap>
      <Text render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />

      <View render={({ pageNumber }) => (
        pageNumber % 2 === 0 && (
          <View style={{ background: 'red' }}>
            <Text>I'm only visible in odd pages!</Text>
          </View>
        )
      )} />
    </Page>
  </Document>
);
```

#### Available arguments

| Name                   |                 Description                 |      Type |
| ---------------------- | :-----------------------------------------: | --------: |
| pageNumber             |             Current page number             | _Integer_ |
| totalPages `Text only` | Total amount of pages in the final document | _Integer_ |

Bare in mind that the `render` function is called twice for `<Text />` elements: once for layout on the page wrapping process, and another one after it's know how many pages the document will have.

> **Protip:** Use this API in conjunction with fixed elements to render page number indicators

<GoToExample name="page-numbers" />

---
