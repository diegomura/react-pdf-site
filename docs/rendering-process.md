import EditButton from '../src/components/EditButton'
import OverviewTimeline from '../src/components/OverviewTimeline'
import NavigationButtons from '../src/components/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/rendering-process.md" />

## Rendering process overview

At a high level, the document creation process is composed by 6 concrete steps.

<OverviewTimeline />

### 1. Internal structures creation

The first step involves transforming the *React element tree* into the appropriate internal instances for each component type. This involves saving the relationship between these (parent-child), parsing styles and processing props.

Besides **Document**, all nodes will represent a block inside a document, with a height, width, paddings and margins (yet to be discovered). This instances also define how each element wraps in the page, how their dimensions are calculated, and finally, how they get rendered in the document.

From now on, react-pdf works over this data structure to start inferring where each block goes inside the final document.

### 2. PDF document creation & metadata

The creation of the PDF document itself. For this task, we use the awesome [pdfkit](https://github.com/devongovett/pdfkit).

This instance is then passed down to each node in the tree, that they will use it eventually to render themselves further in this process.

This step also involves adding any defined metadata to the final document.

### 3. Fetching assets

Time to ask for all needed resources! We traverse the internal element's tree fetching any required *font*, *image* or *emoji*.

We run all these requests asynchronously, but we won't move forward until all requests are finished (with success or failure).

### 4. Wrapping pages

Now that we have all fonts loaded, we can layout text and calculate how much space each glyph will take. The same goes for images: now that we have their data, we can read it and know beforehand how to scale the image for the available bounding box in we want to render it.

This is the most time-consuming step, since it involves not just calculating where each element is in the document and how much space it will need, but also splitting these elements into different pages.

### 5. Rendering

At this point we have every element’s dimensions, and in on wich page they are. All we have to do now is performing the actual rendering on the document created in step 2, by calling the *render* method in each instance recursively.

### 6. Finish document

Once in this stage, we have a valid PDF document instance with a bunch of stuff in it. All it remains is deciding what we want to do with this data. This will vary depending on the binding you are using, but basically it means either displaying or saving it.

<NavigationButtons
  backSrc="/quick-start-guide"
  backText="Quick start guide"
  nextSrc="/components"
  nextText="Components"
/>
