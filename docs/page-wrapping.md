import GoToExample from '../src/components/GoToExample'

### Page wrapping

By default each `<Page />` component represents a single page in the rendered document no matter how big their children are. However, there are scenarios in which you would expect to have page page breaks whenever the page contents exceeds their limits, specially when handling big chunks of text. React-pdf has a build-in wrapping engine that enables you to do just that very easily:

```
import { Document, Page } from '@react-pdf/react-pdf'

const doc = () => (
  <Document>
    <Page wrap>
      // something pretty here
    </Page>
  </Document>
);
```

And *voilà*. Now every time an element gets outside the page, it's wrapped to fill the remaining space (if any) and the remaining part is added into a new page. *Pretty handy right?*

<GoToExample name="page-wrap" />

#### Breakable vs. unbreakable components

We can identify two different types of components based on how they wrap:

- `Breakable components` tries to fill up the remaining space before jumping into a new page. By default, this group is composed by *View*, *Text* and *Link* components
- `Unbreakable components` are indivisible, therefore if there isn't enough space for them they just get rendered in the following page. In this group by default we only find *Image*

<GoToExample />

#### Disabling component wrapping

React-pdf also enables you to transform *breakable* elements into their opposite, forcing them to always render in a new page. This can be done by simply setting the prop `wrap={false}` to any valid component:

```
import { Document, Page, View } from '@react-pdf/react-pdf'

const doc = () => (
  <Document>
    <Page wrap>
      <View wrap={false}>
        // fancy things here
      </View>
    </Page>
  </Document>
);
```

Now, if the `<View />` components happens to be at the bottom of the page without enough space, it will be rendered in a new page as he would be *unbreakable*.

<GoToExample />

#### Fixed components

There is still another scenario we didn't talked about yet: what if I want to wrap pages but also being able to render a component in *all* produced pages? This is where the `fixed` prop comes into play.

```
import { Document, Page, View } from '@react-pdf/react-pdf'

const doc = () => (
  <Document>
    <Page wrap>
      <View fixed>
        // fancy things here
      </View>
    </Page>
  </Document>
);
```

Just by that, the `<View />` component will be layout repeatedly throughout all pages.

> **Protip:** This feature can be very handy for creating nice headers, footers or page numbers, among other use cases. You can even absolute position fixed elements into your page to create more complex layouts!

<GoToExample />

---
