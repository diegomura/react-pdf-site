import EditButton from '../src/components/EditButton'
import GoToExample from '../src/components/GoToExample'
import NavigationButtons from '../src/components/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/quick-start.md" />

## Quick start guide
> *If you know React, you already know react-pdf*

React-pdf is what is called a *React renderer*. This  means that you can use React, that you already know and love, to render **PDF documents**. How awesome is this!

### 1. Install React and react-pdf

Since a renderer simply implements *how elements render into something*, you still need to have React to make it work. You can find instructions on how to do that [here](https://reactjs.org/docs/add-react-to-an-existing-app.html). React-pdf instructions are above.

### 2. Create your PDF document

This is where things start getting interesting. React-pdf exports a set of React primitives that enable you to render things into your document very easily. It also has an API for styling them, using CSS properties and Flexbox layout.

Let's make the code speak for itself:

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';

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

React-pdf enables you to render the document in three different environments: **web**, **server** and **mobile** *(under development)*. The process is essentially the same, but catered to needs of each environment.

#### Save in a file

```
import ReactPDF from '@react-pdf/node';

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
```

#### Render in DOM

```
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <MyDocument />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

#### Render in mobile

*Working on it...*

<GoToExample />

### 4. Have fun!

Maybe the most important step — make use of all react-pdf capabilities to create beautiful and awesome documents!

<NavigationButtons
  backSrc="/"
  backText="Installation"
  nextSrc="/rendering-process"
  nextText="Rendering process"
/>
