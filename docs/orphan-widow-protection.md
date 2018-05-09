import GoToExample from '../src/components/GoToExample'

### Orphan & widow protection

> *"An orphan has no past; a widow has no future"*

When layout text, orphans and widows can make the difference between a *good* document and a *great* one. That's why react-pdf has a built-in orphan and widow protection that you can use right from out of the box.

But react-pdf does not reserve this protection just for text. You can adjust this protection to your convenience, by just overriding a some props attributes to **any react-pdf primitive**:

| Prop name       | Description          | Type | Default  |
| ------------- |:-------------:| ------:| -----:|
| **orhpans**      | Enable/disable orphans protection   | *boolean*   |   *true* for Text, *false* otherwise |
| **widows**      | Enable/disable widows protection     | *boolean* |   *true* for Text, *false* otherwise |
| **orphanThreashold**      | Distance from the bottom of the page that an element needs to have to apply orphans protection | *integer* | 15 |
| **widowThreashold**    | The minimum height in points an element should have to apply widows protection on it  | *integer* |   *Infinity* |
| **orphanLines** *(text only)*     | Specify the minimum amount of lines a text should leave behind to be consider orphan | *integer* |   1 |
| **widowLines** *(text only)*     | Specify the minimum amount of lines you want to leave for widow  | *integer* |   2 |

> **Protip:** You can use this API to ensure that headings doesn't get rendered at the bottom of a page

<GoToExample />
