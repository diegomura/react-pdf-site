### On the fly rendering `Web only`

There are some cases in which you may need to generate a document without showing it on screen. For those scenarios, react-pdf provides three different solutions:

#### Download link

Is it possible that what you need is just a "Download" button. If that's the case, you can use `<PDFDownloadLink />` to easily create and download your document.

```jsx
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const MyDoc = () => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);
```

> **Protip:** You still have access to blob's data if you need it.

#### Access blob data

However, react-pdf does not stick to just download the document but also enables direct access to the document's blob data for any other possible use case. All you have to do is make use of `<BlobProvider />`.

```jsx
import { BlobProvider, Document, Page } from '@react-pdf/renderer';

const MyDoc = (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const App = () => (
  <div>
    <BlobProvider document={MyDoc}>
      {({ blob, url, loading, error }) => {
        // Do whatever you need with blob here
        return <div>There's something going on on the fly</div>;
      }}
    </BlobProvider>
  </div>
);
```

You can also obtain the blob data imperatively, which may be useful if you are using react-pdf on a non-React frontend (web only).

```jsx
import { pdf, Document, Page } from '@react-pdf/renderer';

const MyDoc = (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const blob = pdf(MyDoc).toBlob();
```

#### Using the usePDF hook

React-pdf now ships a hook API that will give you direct access to the document data (such as blob or url state) as well as with an _update_ function to trigger document re-rendering. Since document re-computation can be an expensive operation, this hook is perfect solution for those cases in where you need a fine control over when this happens.

```js
import { usePDF, Document, Page } from '@react-pdf/renderer';

const MyDoc = (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const App = () => {
  const [instance, updateInstance] = usePDF({ document: MyDoc });

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong: {instance.error}</div>;

  return (
    <a href={instance.url} download="test.pdf">
      Download
    </a>
  );
}
```

> **Protip:** You still have access to blob's data inside `instance.blob` if you need it

---
