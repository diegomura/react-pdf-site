### Document Navigation

There are two main ways to make a document navigable:

#### Destinations `v2.0.0`

Destinations are the simplest form of navigation. They allow to create interactive links that take the user directly to the defined place within the document.

A destination can be created by setting the `id` prop to a _String_ on any supported element ([see more](/components)). After that, the destination can be linked to by setting the `src` prop on the `<Link />` element to the same _String_, but with the leading hash (`#`) symbol:

```js
import { Document, Link, Page, Text } from '@react-pdf/renderer'

const doc = () => (
  <Document>
    <Page>
      <Link src='#Footnote'> // Notice the hash symbol
        Click me to get to the footnote
      </Link>

      // Other content here

      <Text id='Footnote'> // No hash symbol
        You are here because you clicked the link above
      </Text>
    </Page>
  </Document>
);
```

#### Bookmarks `v2.2.0`

Bookmarks allow the user to navigate interactively from one part of the document to another. They form a tree-structured hierarchy of items, which serve as a visual table of contents to display the document’s structure to the user.

A bookmark can be defined by the `bookmark` prop on any of the supported components ([see more](/components)), and can take the form of either a _String_ or a _Bookmark_ type

```js
import { Document, Page, Text } from '@react-pdf/renderer'

const doc = () => (
  <Document>
    <Page bookmark="Harry Potter and the Philosopher's Stone">
     <Text bookmark={{ title: "Chapter 1: The Boy Who Lived", fit: true }}>{...}</Text>
    </Page>
  </Document>
);
```

The example above will create a table of content of 2 nested items: The parent will be the book's name, and the child the chapter's name. You can nest as many bookmarks as you want.

Note that some older PDF viewers may not support bookmarks.

##### Bookmark type

Object that matches the following schema:

| Value                 |                                     Description                                     |      Type |
|-----------------------|:-----------------------------------------------------------------------------------:|----------:|
| title                 |                                   Bookmark value                                    |  _String_ |
| top _(Optional)_      |  Y coodinate from the document top edge where user get's redirected. Defaults to 0  |  _Number_ |
| left _(Optional)_     |  X coodinate from the document top edge where user get's redirected. Defaults to 0  |  _Number_ |
| zoom _(Optional)_     |                  Reader zoom value after clicking on the bookmark                   |  _Number_ |
| fit _(Optional)_      |                       Redirect user to the start of the page                        | _Boolean_ |
| expanded _(Optional)_ | Viewer should expand tree node in table of contents (not supported in some viewers) | _Boolean_ |

---
