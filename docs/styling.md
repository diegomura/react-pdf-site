import EditButton from '../src/components/EditButton'
import GoToExample from '../src/components/GoToExample'
import NavigationButtons from '../src/components/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/styling.md" />

## Styling

Because a document without styles would be very boring, react-pdf ships a powerful styling solution using CSS and Flexbox.

### StyleSheet API

React-pdf also sticks with the primitives specs when it comes to styling.

#### StyleSheet.create()

Create a stylesheet. This method expects a valid JS object as only argument (containing as much css definitions as you want) and returns an object that you can pass down to components via the `style` prop

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';

const styles = StyleSheet.create({
  page: { backgroundColor: 'blue' },
  section: { color: 'white', textAlign: 'center', margin: 30 }
});

const doc = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(doc);
```

<GoToExample name="styles" />

#### Inline styling

There's no need to call `StyleSheet.create` in order to style components. You can also just pass a plain JS object to the `style` prop and react-pdf will get the job done.

```
import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/react-pdf';

const MyDocument = () => (
  <Document>
    <Page size="A4" style={{ backgroundColor: 'blue' }}>
      <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);
```

<GoToExample name="inline-styles" />

#### Mixing both solutions

The `style` prop also accepts an Array as value, containing any possible combination of the last two alternatives

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';

const styles = StyleSheet.create({
  page: { backgroundColor: 'blue' },
  section: { textAlign: 'center', margin: 30 }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={[styles.section, { color: 'white' }]}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);
```

> **Protip:** This can be useful when you want to apply both predefined styles, and styles based on props

<GoToExample name="mixed-styles" />

---

### Media queries

There may be times in which you'll need to apply different styles based on the document context. For that, we provide media-queries support (just as you would do it for the web!). You can query based on both `width` and `height` (min and max), and also `orientation`:

```
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/react-pdf';

const styles = StyleSheet.create({
  section: {
    width: 200,
    '@media max-width: 400': {
      width: 300,
    },
    '@media orientation: landscape': {
      width: 400,
    },
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
    </Page>
  </Document>
);
```

<GoToExample name="media-queries" />

<NavigationButtons
  backSrc="/components"
  backText="Components"
  nextSrc="/advanced"
  nextText="Advanced"
/>
