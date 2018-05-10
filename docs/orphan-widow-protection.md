import GoToExample from '../src/components/GoToExample'

### Orphan & widow protection

> *"An orphan has no past; a widow has no future"*

When layout text, orphans and widows can make the difference between a *good* document and a *great* one. That's why react-pdf has a built-in orphan and widow protection that you can use right from out of the box.

But react-pdf does not reserve this protection just for text. You can adjust this protection to your convenience, by just overriding a some props attributes to **any react-pdf primitive**:

| Prop name                  | Description   |  Type  | Default  |
| -------------------------- |:-------------:| ------:| --------:|
| minPresenceAhead       | Hint that no page wrapping should occur between all sibling elements following the element within _n_ points     | *Integer* |   0 |
| orhpans *(text only)*  | Specifies the minimum number of lines in a text element that must be shown at the bottom of a page or its container.   | *Integer*   |   2 |
| widows *(text only)*   | Specifies the minimum number of lines in a text element that must be shown at the top of a page or its container.     | *Integer* |   2 |

> **Protip:** You can use this API to ensure that headings doesn't get rendered at the bottom of a page

<GoToExample />
