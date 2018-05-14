import GoToExample from '../src/components/GoToExample'

## Quick start guide
> *If you know React, you already know react-pdf*

React-pdf is what it's called a *React renderer*. This basically means that enables you to use React capabilities that you already know and love, but to produce something else than web or mobile apps. In this case: **PDF documents**

### 1. Install React and react-pdf

Since a renderer simply implements *how elements render into something*, you still need to have React installed to make it work. You can find instructions on how to do that [here](https://reactjs.org/docs/add-react-to-an-existing-app.html). React-pdf instructions are above.

### 2. Create your PDF document

This is where things start getting interesting. React-pdf exports a set of React primitives that enables you to render things into your document very easily. It also has an API for styling them, using CSS properties and Flexbox layout.

Let's make the code speak from itself:

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/core';

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

This will produce a PDF document with a single page in it. Inside, two different blocks, each of them rendering a different text. These are not the only valid primitives you can use. Please refer to the Components or Examples sections for more information.

### 3. Choose where to render the document

React-pdf enables you to render the document in 3 different environments: **web**, **server** and **mobile** *(under development)*. The process is escentially the same, but adjusted to the peculiarities of each one of them.

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

Maybe the most important step: make use of all react-pdf capabilities to create beautiful and awesome documents!
