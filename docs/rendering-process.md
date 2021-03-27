import EditButton from '../src/components/Docs/EditButton'
import OverviewTimeline from '../src/components/Docs/OverviewTimeline'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/rendering-process.md" />

## Rendering process overview

At a high level, the document creation process is composed by 6 concrete steps.

<OverviewTimeline />

### 1. Internal structures creation

The first step involves transforming the *React element tree* into the appropriate internal instances for each component type. This involves saving the relationship between these (parent-child) nodes.

Besides **Document**, all nodes will represent a block inside a document, with a height, width, paddings and margins (yet to be discovered).

From now on, react-pdf works over this data structure to start inferring where each block goes inside the final document.

### 2. Resolve styles

This step involves pre-processing node styles, as well as defining default values for the needed properties that were not provided by the user. This way, all successive steps can work on the basis that all required styles are defined in the tree.

Part of the pre-processing involves unit conversion, style inheritance and styles expansion.

### 3. Fetching assets

Time to ask for all needed resources! We traverse the internal nodes tree fetching any required *font*, *image* or *emoji*.

We run all these requests asynchronously, but we won't move forward until all requests are finished (with success or failure).

### 4. Layout text

Now that we have all fonts loaded, we can layout text into paragraphs. This is a critical and complex step: we first convert characters into glyphs using the appropriate font family and size, embed images or emoji images if present and ultimately break them into lines either on whitespaces or by breaking words based on language (or custom) rules.

### 5. Wrapping pages

This is the most time-consuming step, since it involves not just calculating where each element is in the document and how much space it will need, but also splitting these elements into different pages.

We internally use [Yoga layout](https://yogalayout.com/) to compute node's size and coordinates inside the document, and perform page breaking based on a set of customizable heuristics.

### 6. Rendering

The creation of the PDF document itself. For this task, we use the awesome [pdfkit](https://github.com/devongovett/pdfkit).

Once in this stage, we have our internal tree structure with all the needed data to generate our document. All it remains is deciding what we want to do with this data. This will vary depending on the binding you are using, but basically it means either displaying or saving it.

<NavigationButtons
  backSrc="/"
  backText="Quick start guide"
  nextSrc="/components"
  nextText="Components"
/>
