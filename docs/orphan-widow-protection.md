import GoToExample from '../src/components/GoToExample'

### Orphan & widow protection

When you layout text, orphans and widows can make the difference between a _good_ document and a _great_ one. That's why react-pdf has a built-in orphan and widow protection that you can use right out of the box.

But react-pdf does not reserve this protection just for text. You can adjust this protection to your convenience by just setting some props to **any react-pdf primitive**:

| Prop name             |                                                     Description                                                      |      Type | Default |
| --------------------- | :------------------------------------------------------------------------------------------------------------------: | --------: | ------: |
| minPresenceAhead      |     Hint that no page wrapping should occur between all sibling elements following the element within _n_ points     | _Integer_ |       0 |
| orphans _(text only)_ | Specifies the minimum number of lines in a text element that must be shown at the bottom of a page or its container. | _Integer_ |       2 |
| widows _(text only)_  |  Specifies the minimum number of lines in a text element that must be shown at the top of a page or its container.   | _Integer_ |       2 |

> **Protip:** You can use this API to ensure that headings do not get rendered at the bottom of a page

<GoToExample />

---
