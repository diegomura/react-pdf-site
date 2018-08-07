import RulerPlayground from '../src/components/RulerPlayground'
import GoToExample from '../src/components/GoToExample'

### Ruler

If you need fine-grained control on proportions and where elements are rendered, you can use the Ruler props on `<Page />` to ease your work. This API enables you to define a fully customizable vertical and/or horizontal grid to visualize how elements arrange inside the page. For grid separation, you can specify both fixed or proportional values.

<RulerPlayground />

| Prop name            | Description                                               |  Type    |   Default   |
| -------------------- |:---------------------------------------------------------:| --------:| -----------:|
| ruler                | Enables vertical and horizontal rulers on page.         | *Boolean* | _false_ |
| rulerSteps           | Grid separation for horizontal and vertical rulers         | *Integer* *Float* *String* | 50 |
| verticalRuler        | Enables vertical ruler on page.         | *Boolean* | _false_ |
| verticalRulerSteps   | Grid separation for vertical ruler         | *Integer* *Float* *String*  | 50 |
| horizontalRuler      | Enables horizontal ruler on page.         | *Boolean* | _false_ |
| horizontalRulerSteps | Grid separation for horizontal rulers         | *Integer* *Float* *String*  | 50 |  

<GoToExample name="ruler" />

---
