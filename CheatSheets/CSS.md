# Reading CSS Reference

### Controlling the Layout:
#### Display Property:
This property helps us to tell the browser how we want our information layed out in the document window.  The defaults for most elements is either `block` or `inline`.
* The `block-level` element value is most commonly associated with the `div` element in HTML.  It starts on a new line and stretches out to the left and right as far as it can.
* The `inline` value is most commonly associated with the `span` element in HTML.  It can wrap text inside of another element without disrupting it's flow within the overall layout.
* The `none` value is typically associated with the `script` tag as well as `JavaScript` that we use when we want to hide elements from view temporarily but not get rid of completely.  It is almost like toggling visability from hidden to non-hidden.
* The `inline-block` element value is similar to the inline value but it also accepts/has height and width.  This is a great alternative to floating and doesn't require the use of a clear.
* The `column` property is made up of how many columns and their size.  It is considered a best practice to utilize columns in a grid format to help chunk your content in a digestible manner.

#### The Box Model:
##### Padding:
This is the amount of space you want to set between your content and your border.
##### Border:
The border is wherever the padding ends.  You can manipulte the style, thickness, and color of the border to fit your design preferences.
##### Margin:
The margin is the amount of space you want to set between the border of one element and the border of another element.  This is often used to create healthy separation visually and if used without a specific side it will set the value of all sides to be the same.

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


