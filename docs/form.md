import EditButton from '../src/components/Docs/EditButton'
import GoToExample from '../src/components/Docs/GoToExample'
import NavigationButtons from '../src/components/Docs/NavigationButtons'

<EditButton to="https://github.com/react-pdf/site/blob/master/docs/form.md" />

## Forms

React-pdf includes the ability to use [AcroForm](https://experienceleague.adobe.com/en/docs/experience-manager-learn/forms/document-services/pdf-forms-and-documents#acroforms)-Forms in pdfs. AcroForm is part of interactive pdfs and includes annotations for e.g. text fields, checkboxes. The AcroForm is automatically initialized as soon as one of the form elements is used. 

### TextInput

The `<TextInput />` element represents a text field for inputting single- or multiline text. 

#### Valid props

| Prop name |                            Description                             |                                        Type |     Default |
| --------- | :----------------------------------------------------------------: | ------------------------------------------: | ----------: |
| align     |                   Defines the alignment of text                    |                                    _String_ |      _left_ |
| multiline | Defines if the user is allowed to input more than one line of text |                                   _Boolean_ |     _false_ |
| password  |        If set to true the text will be masked with e. g. *         |                                   _Boolean_ |     _false_ |
| noSpell   |   If set to true tells the pdf viewer to not spellcheck the text   |                                   _Boolean_ |     _false_ |
| format    |      Defines the format the textinput should be formatted to       | [TextInputFormatting](#textinputformatting) | _undefined_ |

See also [Common Form Attributes](#common-form-attributes)

<GoToExample name="textinput" />

##### TextInputFormatting

`format` is a definition how the value shall be formatted by the viewer. Take into account that not all viewers support this feature because it involves javascript execution.

| Prop name       |                     Description                      |                                        Type |     Default |
| --------------- | :--------------------------------------------------: | ------------------------------------------: | ----------: |
| type            |            Defines the alignment of text             | [TextInputFormatType](#textinputformattype) | _undefined_ |
| param           |          Defines a format for certain types          |                                    _String_ | _undefined_ |
| nDec            | Defines the number of places after the decimal point |                                    _Number_ | _undefined_ |
| sepComma        |   Defines if the seperator shall be a comma or not   |                                   _Boolean_ |     _false_ |
| negStyle        |         Defines  style for negative numbers          |                                    _String_ | _undefined_ |
| currency        |   Defines the symbol to be placed as currency sign   |                                    _String_ | _undefined_ |
| currencyPrepend |    If set to true the currency sign is prepended     |                                   _Boolean_ |     _false_ |

##### TextInputFormatType

`type` prop can take one of the following values.

| Value    |                             Description                             |
| -------- | :-----------------------------------------------------------------: |
| date     |          Expects the param prop to be a valid date format.          |
| time     |          Expects the param prop to be a valid time format.          |
| percent  | Uses the props nDec, sepComma, negStyle, currency, currencyPrepend. |
| number   | Uses the props nDec, sepComma, negStyle, currency, currencyPrepend. |
| zip      |                  Formats for the zip-code standard                  |
| zipPlus4 |                   Formats for the zip+4 standard                    |
| phone    |                     Formats for a phone number                      |
| ssn      |                      Formats for a ssn number                       |

For deeper knowledge into the formatting you might want to look into the [pdfkit doc](https://pdfkit.org/docs/forms.html#text_field_formatting) and into the [API Reference for Forms](https://experienceleague.adobe.com/docs/experience-manager-learn/assets/FormsAPIReference.pdf) Page 119.

---

### Checkbox

The `<Checkbox />` element represents one of two states the user can toggle between. Some viewers behave differently based on wether the `name` prop is set or not and wether there are name duplicates or not. This can result in inconsistencies which makes the `name` prop recommendable to use and to achieve a consistent result across various viewers.

#### Valid props

| Prop name       |                                 Description                                  |      Type |     Default |
| --------------- | :--------------------------------------------------------------------------: | --------: | ----------: |
| backGroundColor |       It defines the color of the inside of the checkbox it applies to       |  _String_ | _undefined_ |
| borderColor     |         Defines the color used to paint the outline of the checkbox          |  _String_ | _undefined_ |
| checked         |                    If set to true the checkbox is checked                    | _Boolean_ |     _false_ |
| onState         |        If set to true tells the pdf viewer to not spellcheck the text        |  _String_ |       _Yes_ |
| offState        |           Defines the format the textinput should be formatted to            |  _String_ |        _No_ |
| xMark           | If set to true the onState appears as a X otherwise a checkmark is displayed | _Boolean_ |     _false_ |

See also [Common Form Attributes](#common-form-attributes)

<GoToExample name="checkbox" />

---

### Picker

The `<Picker />` element represents a dropdown menu for the selection of predefined options.

#### Valid props

| Prop name |                                        Description                                        |      Type | Default |
| --------- | :---------------------------------------------------------------------------------------: | --------: | ------: |
| edit      |               If set to true allows the user to enter a value in the field                | _Boolean_ | _false_ |
| noSpell   | If set to true and edit is set to true it tells the pdf viewer to not spellcheck the text | _Boolean_ | _false_ |

For more attributes head to [Picker and FormList Attributes](#picker-and-formlist-attributes).

<GoToExample name="picker-formlist" />

---

### FormList

The `<FormList />` element represents a scrollable list for the selection of predefined options.

#### Valid props

For attributes head to [Picker and FormList Attributes](#picker-and-formlist-attributes).

<GoToExample name="picker-formlist" />

---

### Picker and FormList Attributes

These attributes are shared by the picker and formlist elements.

#### Valid props

| Prop name   |                          Description                          |       Type | Default |
| ----------- | :-----------------------------------------------------------: | ---------: | ------: |
| sort        |     Defines if the options shall be sorted alphabetically     |  _Boolean_ | _false_ |
| multiSelect | If set to true the user is allowed to select multiple options |  _Boolean_ | _false_ |
| select      |   Defines the options to show inside the field as an array    | _String[]_ |    _[]_ |

See also [Common Form Attributes](#common-form-attributes)

---

### FormField

The `<FormField />` element is used to group other form elements together. On the form level this creates a hierarchical structure most important for data extraction and naming clearance. It is fully invisible. The usage of this element is optional and not required by any other element. Because of not beeing a element on its own the FormField is the only element not sharing the common form attributes.

#### Valid props

| Prop name |        Description        |     Type |     Default |
| --------- | :-----------------------: | -------: | ----------: |
| name      | The name of the FormField | _String_ | _undefined_ |

<GoToExample name="formfield" />

---

### Common Form Attributes

Common form attributes are attributes that are shared by a variety of elements. 

#### Supported attributes

| Prop name    |                                              Description                                               |               Type |     Default |
| ------------ | :----------------------------------------------------------------------------------------------------: | -----------------: | ----------: |
| name         |                  Describes the name of the specific element when submitting the form                   |           _String_ |     _empty_ |
| required     |            Describes if the specific element needs to have a value when submitting the form            |          _Boolean_ |     _false_ |
| noExport     |                If set to true the specific element is not exported at a form submission                |          _Boolean_ |     _false_ |
| readOnly     | Defines if the specific element is editable or not. If set to true, the user shall not edit the value. |          _Boolean_ |     _false_ |
| value        |        Defines the value of the specific element. For further information look at the element.         | _String_, _Number_ | _undefined_ |
| defaultValue |        Describes what the default state for the value is. Can be used when resetting the form.         | _String_, _Number_ | _undefined_ |

<NavigationButtons
  backSrc="/svg"
  backText="SVG Images"
  nextSrc="/hooks"
  nextText="Hooks"
/>