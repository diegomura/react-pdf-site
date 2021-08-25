import EditButton from '../src/components/Docs/EditButton'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/hooks.md" />

## Hooks

### usePDF `Web only`

React-pdf now ships a hook called `usePDF` that enables accessing all PDF creation capabilities via a React hook API. This is great if you need more control over how the document gets rendered or how often it's updated.

#### Usage

```js
const [instance, update] = usePDF({ document });
```

#### Parameters

| Prop name |       Description       | Default     |
| --------- | :---------------------: | ----------- |
| document  | Document's root element | _undefined_ |

#### Instance object

| Prop name |                         Description                         | Default     |
| --------- | :---------------------------------------------------------: | ----------- |
| url       |   Rendered document blog url. Null if loading or errored    | _undefined_ |
| blob      | Rendered document blob instance. Null if loading or errored | _undefined_ |
| loading   |   Loading state. It's true if current render is in place    | _false_     |
| error     |              Error message if rendering failed              | _undefined_ |

#### Update function

Used to trigger a document re-render. By default, changing the document instance does not triggers a new PDF file creation. This is especially helpful when rendering a download button or something similar, where you might want to render the document right before the action gets triggered.

The update function takes no arguments and does not return anything.

> For more information about how this hook is used please refer to the [Using the usePDF hook](/advanced#using-the-usepdf-hook) section

---

<NavigationButtons
  backSrc="/svg"
  backText="SVG Images"
  nextSrc="/styling"
  nextText="Styling"
/>
