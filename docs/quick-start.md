import EditButton from '../src/components/Docs/EditButton'
import GoToExample from '../src/components/Docs/GoToExample'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

### 1. Install React and react-pdf

Starting with react-pdf is extremely simple.

#### Using Yarn

```
yarn add @react-pdf/renderer
```

#### Using npm

```
npm install @react-pdf/renderer --save
```

Since a renderer simply implements _how elements render into something_, you still need to have React to make it work (and react-dom for client-side document generation). You can find instructions on how to do that [here](https://react.dev/learn/add-react-to-an-existing-project).

### 2. Create your PDF document

This is where things start getting interesting. React-pdf exports a set of React primitives that enable you to render things into your document very easily. It also has an API for styling them, using CSS properties and Flexbox layout.

Let's make the code speak for itself:

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
```

This will produce a PDF document with a single page. Inside, two different blocks, each of them rendering a different text. These are not the only valid primitives you can use. Please refer to the Components or Examples sections for more information.

### 3. Choose where to render the document

React-pdf enables you to render the document in three different environments: **web** and **server**. The process is essentially the same, but catered to needs of each environment.

#### Save in a file

```
import ReactPDF from '@react-pdf/renderer';

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
```

#### Render to a stream

```
import ReactPDF from '@react-pdf/renderer';

ReactPDF.renderToStream(<MyDocument />);
```

#### Render in DOM

```
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

### 4. Have fun!

Maybe the most important step — make use of all react-pdf capabilities to create beautiful and awesome documents!

<NavigationButtons
  nextSrc="/rendering-process"
  nextText="Rendering process"
/>
