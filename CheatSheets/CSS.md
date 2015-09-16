# Reading CSS Reference

### Controlling the Layout:
#### Display Property:
This property helps us to tell the browser how we want our information layed out in the document window.  The defaults for most elements is either `block` or `inline`.
* The `block-level` element value is most commonly associated with the `div` element in HTML.  It starts on a new line and stretches out to the left and right as far as it can.
* The `inline` value is most commonly associated with the `span` element in HTML.  It can wrap text inside of another element without disrupting it's flow within the overall layout.
* The `none` value is typically associated with the `script` tag as well as `JavaScript` that we use when we want to hide elements from view temporarily but not get rid of completely.  It is almost like toggling visability from hidden to non-hidden.
* The `inline-block` element value is similar to the inline value but it also accepts/has height and width.  This is a great alternative to floating and doesn't require the use of a clear.
* The `column` property is made up of how many columns and their size.  It is considered a best practice to utilize columns in a grid format to help chunk your content in a digestible manner.
* The `max-width` property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width.  the value of max-width overrides width, but min-width overrides max-width.
* The `min-width` property is used to set the minimum width of a given element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.  The value of min-width overrides both max-width and width.

#### Length Property:
The <length> CSS data type denotes distance measurements. It is a <number> immediately followed by a length unit (px, em, pc, in, mm, …). Like for any CSS dimension, there is no space between the unit literal and the number. The length unit is optional after the <number> 0.  Many CSS properties take <length> values, such as width, margin,  padding, font-size, border-width, text-shadow, …

For some properties, using negative lengths is a syntax error, but for some properties, negative lengths are allowed. Please note that although <percentage> values are also CSS dimensions and are accepted by some CSS properties that accept <length> values, they are not themselves, <length> values.
* `em` relative length unit - This unit represents the calculated font-size of the element. If used on the font-size property itself, it represents the inherited font-size of the element.

#### The Box Model:
##### Padding:
This is the amount of space you want to set between your content and your border.  This can be set via length or percentage values.
##### Border:
The border is wherever the padding ends.  You can manipulte the style, thickness, and color of the border to fit your design preferences.
##### Margin:
The margin is the amount of space you want to set between the border of one element and the border of another element.  This is often used to create healthy separation visually and if used without a specific side it will set the value of all sides to be the same.  This can be set via length or percentage values.
##### `box-sizing`:
The box-sizing property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.
###### Values:
* `content-box` - This is the default style as specified by the CSS standard. The width and height properties are measured including only the content, but not the padding, border or margin. Note: Padding, border & margin will be outside of the box e.g. IF .box {width: 350px}; THEN you apply {border: 10px solid black;} RESULT {rendered in the browser} .box {width: 370px;}
* `border-box` - The width and height properties include the padding and border, but not the margin. This is the box model used by Internet Explorer when the document is in Quirks mode. Note that padding and border will be inside of the box e.g.  .box {width: 350px; border: 10px solid black;} lead to a box rendered in the browser of width: 350px. The content box can't be negative and is floored to 0 making it impossible to use border-box to make the element disappear.

#### Position:
This is a value you can set to tell the DOM exactly where you want an element in the window, however the default value is static and is therefore controlled through your assignment of `display` properties.
* The `static` value has no positioning specified.  As stated above it is controlled by the `display` properties value for the overall layout.
* The `relative` value stays within the overall layout but then accepts parameters for top, bottom, right, and left.  This one is confusing and I have yet to see it used or know why it would be.
* The 'absolute` value does not have a space saved for it within the overall layout.  Instead it takes parameters of top, bottom, right and left as it relates to the parent block or overall window.
* The `fixed` value is similar to the absolute in that no space is saved for it within the overall layout.  However it doesn't care about it's parent element and remains in the same place within the window regardless of page scrolling or sizing.

##### Float:
The `float` property is mainly used when you want to wrap text around a photo.  This is accomplished by removing the desired element from the normal flow and sliding it beside (either left or right) of the container it is in.
##### Clear:
The `clear` property is used to control reactions to floated elements.  If used it will put the next element on a line below the floated element.
##### Clearfix:
The `clearfix` property is used when a floated image is bigger than the text or container meant to wrap around it.  It in essence adjusts the text or container element to be the same size as the floated picture to keep the layout nice and neat.

#### Media Queries:
Media queries are closely associated with the pracitce of responsive design.  This means designing your online content in a manner that will respond to various browser and screen sizes while still looking proportional and good.  They are called with the `@media` and associates display values to a set of associated statements.  They are powerful and look something similar to a function invocation of sorts.

#### `Pseudo-classes`:
A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. For example :hover will apply a style when the user hovers over the element specified by the selector.

Pseudo-classes, together with pseudo-elements, let you apply a style to an element not only in relation to the content of the document tree, but also in relation to external factors like the history of the navigator (:visited, for example), the status of its content (like :checked on some form elements), or the position of the mouse (like :hover which lets you know if the mouse is over an element or not).
##### Index of Standard Classes:
* :active
* :any
* :checked
* :default
* :dir()
* :disabled
* :empty
* :enabled
* :first
* :first-child
* :first-of-type
* :fullscreen
* :focus
* :hover
* :indeterminate
* :in-range
* :invalid
* :lang()
* :last-child
* :last-of-type
* :left
* :link
* :not()
* :nth-child()
* :nth-last-child()
* :nth-last-of-type()
* :nth-of-type()
* :only-child
* :only-of-type
* :optional
* :out-of-range
* :read-only
* :read-write
* :required
* :right
* :root
* :scope
* :target
* :valid
* :visited

#### `Pseudo-elements`:
Just like pseudo-classes, pseudo-elements are added to selectors but instead of describing a special state, they allow you to style certain parts of a document. For example, the ::first-line pseudo-element targets only  the first line of an element specified by the selector.
##### Index of pseudo-elements:
* ::after
* ::before
* ::first-letter
* ::first-line
* ::selection
* ::backdrop

### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`
