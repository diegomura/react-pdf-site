import EditButton from '../src/components/Docs/EditButton'
import GoToExample from '../src/components/Docs/GoToExample'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/svg.md" />

## SVG Images

### Svg

The `<Svg />` element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents.

#### Valid props

| Prop name           |                                                                                    Description                                                                                     |               Type |     Default |
| ------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------: | ----------: |
| width               |                                                                  The displayed width of the rectangular viewport                                                                   | _String_, _Number_ | _undefined_ |
| height              |                                                                  The displayed height of the rectangular viewport                                                                  | _String_, _Number_ | _undefined_ |
| viewBox             |                                                             The SVG viewport coordinates for the current SVG fragment                                                              |           _String_ | _undefined_ |
| preserveAspectRatio | How the svg fragment must be deformed if it is displayed with a different aspect ratio. [See more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) |           _String_ | _undefined_ |
| style               |                                                                      Defines SVG styles. [See more](/styling)                                                                      |  _Object_, _Array_ | _undefined_ |

<GoToExample name="svg" />

---

### Line

The `<Line />` element is used to create a line.

#### Valid props

| Prop name |                        Description                        |               Type |     Default |
| --------- | :-------------------------------------------------------: | -----------------: | ----------: |
| x1        | Defines the x-axis coordinate of the line starting point. | _String_, _Number_ | _undefined_ |
| x2        |  Defines the x-axis coordinate of the line ending point.  | _String_, _Number_ | _undefined_ |
| y1        | Defines the y-axis coordinate of the line starting point. | _String_, _Number_ | _undefined_ |
| y2        |  Defines the y-axis coordinate of the line ending point.  | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="line" />

---

### Polyline

The `<Polyline />` element is used to create any shape that consists of only straight lines (that is connected at several points).

#### Valid props

| Prop name |                                                 Description                                                 |     Type |     Default |
| --------- | :---------------------------------------------------------------------------------------------------------: | -------: | ----------: |
| points    | This attribute defines the list of points (pairs of x,y absolute coordinates) required to draw the polyline | _String_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="polyline" />

---

### Polygon

The `<Polygon />` element is used to create a graphic that contains at least three sides.

Polygons are made of straight lines, and the shape is "closed" (all the lines connect up).

#### Valid props

| Prop name |                                                Description                                                 |     Type |     Default |
| --------- | :--------------------------------------------------------------------------------------------------------: | -------: | ----------: |
| points    | This attribute defines the list of points (pairs of x,y absolute coordinates) required to draw the polygon | _String_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="polygon" />

---

### Path

The `<Path />` element is the most powerful element in the SVG library of basic shapes. It can be used to create lines, curves, arcs, and more.

#### Valid props

| Prop name |                                                      Description                                                       |     Type |     Default |
| --------- | :--------------------------------------------------------------------------------------------------------------------: | -------: | ----------: |
| d         | This attribute defines the shape of the path. [See more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) | _String_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="path" />

---

### Rect

The `<Rect />` element is used to create a rectangle and variations of a rectangle shape.

#### Valid props

| Prop name |                Description                |               Type |     Default |
| --------- | :---------------------------------------: | -----------------: | ----------: |
| x         |       The x coordinate of the rect.       | _String_, _Number_ | _undefined_ |
| y         |       The y coordinate of the rect.       | _String_, _Number_ | _undefined_ |
| width     |          The width of the rect.           | _String_, _Number_ | _undefined_ |
| height    |          The height of the rect.          | _String_, _Number_ | _undefined_ |
| rx        | The horizontal corner radius of the rect. | _String_, _Number_ | _undefined_ |
| ry        |  The vertical corner radius of the rect.  | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="rect" />

---

### Circle

The `<Circle />` element is used to create a circle.

#### Valid props

| Prop name |                    Description                     |               Type |     Default |
| --------- | :------------------------------------------------: | -----------------: | ----------: |
| cx        | The x-axis coordinate of the center of the circle. | _String_, _Number_ | _undefined_ |
| cy        | The y-axis coordinate of the center of the circle. | _String_, _Number_ | _undefined_ |
| r         |             The radius of the circle.              | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="circle" />

---

### Ellipse

The `<Ellipse />` element is used to create an ellipse.

An ellipse is closely related to a circle. The difference is that an ellipse has an x and a y radius that differs from each other, while a circle has equal x and y radius.

#### Valid props

| Prop name |               Description                |               Type |     Default |
| --------- | :--------------------------------------: | -----------------: | ----------: |
| cx        |      The x position of the ellipse.      | _String_, _Number_ | _undefined_ |
| cy        |      The y position of the ellipse.      | _String_, _Number_ | _undefined_ |
| rx        | The radius of the ellipse on the x axis. | _String_, _Number_ | _undefined_ |
| ry        | The radius of the ellipse on the y axis. | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="ellipse" />

---

### Text

The `<Text />` element draws a graphics element consisting of text.

#### Valid props

| Prop name |                         Description                          |               Type |     Default |
| --------- | :----------------------------------------------------------: | -----------------: | ----------: |
| x         | The x coordinate of the starting point of the text baseline. | _String_, _Number_ | _undefined_ |
| y         | The y coordinate of the starting point of the text baseline. | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

<GoToExample name="svgtext" />

---

### Tspan

The SVG `<Tspan />` element defines a subtext within a `<Text />` element or another `<Tspan />` element. It allows for adjustment of the style and/or position of that subtext as needed.

#### Valid props

| Prop name |                         Description                          |               Type |     Default |
| --------- | :----------------------------------------------------------: | -----------------: | ----------: |
| x         | The x coordinate of the starting point of the text baseline. | _String_, _Number_ | _undefined_ |
| y         | The y coordinate of the starting point of the text baseline. | _String_, _Number_ | _undefined_ |

See also [Presentation Attributes](#presentation-attributes)

---

### G

The `<G />` SVG element is a container used to group other SVG elements.

Transformations applied to the `<G />` element are performed on its child elements, and its attributes are inherited by its children.

#### Valid props

This element only includes [Presentation Attributes](#presentation-attributes)

<GoToExample name="g" />

---

### Stop

The SVG `<Stop />` element defines a color and its position to use on a gradient. This element is always a child of a `<LinearGradient />` or `<RadialGradient />` element

#### Valid props

| Prop name   |                                 Description                                 |               Type |     Default |
| ----------- | :-------------------------------------------------------------------------: | -----------------: | ----------: |
| offset      |    Defines where the gradient stop is placed along the gradient vector.     | _String_, _Number_ | _undefined_ |
| stopColor   |  Defines the color of the gradient stop. It can be used as a CSS property.  |           _String_ | _undefined_ |
| stopOpacity | Defines the opacity of the gradient stop. It can be used as a CSS property. | _String_, _Number_ |         _1_ |

---

### Defs

The `<Defs />` element is used to store graphical objects that will be used at a later time. Objects created inside a `<Defs />` element are not rendered directly. To display them you have to reference them

---

### ClipPath

The `<ClipPath />` SVG element defines a clipping path, to be used by the `clipPath` property.

A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.

<GoToExample name="clippath" />

---

### LinearGradient

The `<LinearGradient />` element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.

#### Valid props

| Prop name |                                                   Description                                                   |               Type |     Default |
| --------- | :-------------------------------------------------------------------------------------------------------------: | -----------------: | ----------: |
| x1        | Defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn. | _String_, _Number_ | _undefined_ |
| x2        |  Defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.  | _String_, _Number_ | _undefined_ |
| y1        | Defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn. | _String_, _Number_ | _undefined_ |
| y2        |  Defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.  | _String_, _Number_ | _undefined_ |

<GoToExample name="lineargradient" />

---

### RadialGradient

The `<RadialGradient />` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.

#### Valid props

| Prop name |                                                                             Description                                                                             |               Type |     Default |
| --------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | -----------------: | ----------: |
| cx        |                                                 Defines the x coordinate of the end circle of the radial gradient.                                                  | _String_, _Number_ | _undefined_ |
| cy        |                                                 Defines the y coordinate of the end circle of the radial gradient.                                                  | _String_, _Number_ | _undefined_ |
| fr        | Defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% `<Stop>` is mapped to the perimeter of the start circle. | _String_, _Number_ | _undefined_ |
| fx        |                                                Defines the x coordinate of the start circle of the radial gradient.                                                 | _String_, _Number_ | _undefined_ |
| fy        |                                                Defines the y coordinate of the start circle of the radial gradient.                                                 | _String_, _Number_ | _undefined_ |

<GoToExample name="radialgradient" />

---

### Presentation Attributes

SVG presentation attributes are CSS properties that can be used as attributes on SVG elements. This means it can be passed either inside a `style` object or directly by element's props.

#### Supported attributes

| Prop name        |                                            Description                                             |               Type |     Default |
| ---------------- | :------------------------------------------------------------------------------------------------: | -----------------: | ----------: |
| color            |               Provides a potential indirect value for the fill or stroke attributes.               |           _String_ | _undefined_ |
| dominantBaseline |            Defines the baseline used to align the box’s text and inline-level contents.            |           _String_ |      _auto_ |
| fill             |             It defines the color of the inside of the graphical element it applies to.             |           _String_ | _undefined_ |
| fillOpacity      |      It specifies the opacity of the color or the content the current object is filled with.       | _String_, _Number_ |         _1_ |
| fillRule         |                It indicates how to determine what side of a path is inside a shape.                |           _String_ |   _nonzero_ |
| opacity          |                 It specifies the transparency of an object or a group of objects.                  | _String_, _Number_ |         _1_ |
| stroke           |                     Defines the color used to paint the outline of the shape.                      |           _String_ | _undefined_ |
| strokeWidth      |                    Defines the width of the stroke to be applied to the shape.                     | _String_, _Number_ |         _1_ |
| strokeOpacity    |                           Defines the opacity of the stroke of a shape.                            | _String_, _Number_ |         _1_ |
| strokeLinecap    |          Defines the shape to be used at the end of open subpaths when they are stroked.           |           _String_ |      _butt_ |
| strokeDasharray  |           Defines the pattern of dashes and gaps used to paint the outline of the shape.           |           _String_ | _undefined_ |
| transform        | Defines a list of transform definitions that are applied to an element and the element's children. |           _String_ | _undefined_ |
| textAnchor       |                          Defines the vertical alignment a string of text.                          |           _String_ | _undefined_ |
| visibility       |                       Lets you control the visibility of graphical elements.                       |           _String_ |   _visible_ |

<NavigationButtons
  backSrc="/components"
  backText="Components"
  nextSrc="/hooks"
  nextText="Hooks"
/>
