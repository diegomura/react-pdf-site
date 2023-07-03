import EditButton from '../src/components/Docs/EditButton'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/node.md" />

## Node API

### renderToFile

Helper function to render a PDF into a file.

#### Usage

```js
const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);

await renderToFile(<MyDocument />, `${__dirname}/my-doc.pdf`);
```

#### Arguments

| Prop name |                     Description                     | Default     |
| --------- | :-------------------------------------------------: | ----------- |
| document  |       Document's root element to be rendered        | _undefined_ |
| path      | File system path where the document will be created | _undefined_ |
| callback  |  Function to be called after rendering is finished   | _undefined_ |

### renderToString

Helper function to render a PDF into a string.

#### Usage

```js
const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);

const value = await renderToString(<MyDocument />);
```

#### Arguments

| Prop name |              Description               | Default     |
| --------- | :------------------------------------: | ----------- |
| document  | Document's root element to be rendered | _undefined_ |

#### Returns

String representation of PDF document

### renderToStream

Helper function to render a PDF into a Node Stream.

#### Usage

```js
const MyDocument = () => (
  <Document>
    <Page>
      <Text>React-pdf</Text>
    </Page>
  </Document>
);

const stream = await renderToStream(<MyDocument />);
```

#### Arguments

| Prop name |              Description               | Default     |
| --------- | :------------------------------------: | ----------- |
| document  | Document's root element to be rendered | _undefined_ |

#### Returns

PDF document Stream

<NavigationButtons
  backSrc="/fonts"
  backText="Fonts"
  nextSrc="/advanced"
  nextText="Advanced"
/>
