*Within the contents of the ReadingJavaScript folder, I will include notes on my discoveries while reading as well as self-created resources that should aid in my progress as a front-end developer.*

# About JavaScript

### Basic Literal Types:

#### Null:
The value null (always used in all lowercase) is always empty, meaning that nothing is there.  The most popular use of the value null is as a return value when looking for an object that does not exist.  This informs that user that they either didn't create the object they were searching for or that they did it incorrectly and they can use that information to go back and review their code.

#### Boolean:
The Boolean object is an object wrapper for a boolean value.  This is different from the primitive boolean value which is simply either true (always in lowercase) or false (always in lowercase).   You should almost never use the Boolean object but instead use Boolean as a function to evaluate your input.  Your input for a boolean can be another basic literal type or an expression.
###### A Few Examples:
```
Boolean(4); //This would give you a boolean value of **true** because 0 is false and anything other than 0 is true.//
Boolean(45 < 36); //This would give you a value of **false** because 45 is not less than 36.//
Boolean("peanut butter");  //This would give you a boolean value of **true** because with strings if there is anything (this includes spaces) between the quotations it is true.  If you have empty quotations (i.e. "") it will return false.
```

#### Number:
A number is simply that, a number!  Depending on your hardware configuration the range of numbers you have access to vary.  Most often, numbers are used as themselves.  They are symbols that represent increments of counting something.  That could be iterations through a loop, how many donuts we want to buy, and so on and so forth.  If you pass the Number function a number or an expression with numbers it will produce either the number or the number result of the expression however, if you pass it something other than a number you will see NaN which stands for not a number.
###### A Few Examples:
```
Number(14); //This would return 14.//
Number(7 * 3 + 4); //This would return 25.  Remember that JavaScript adheres to the mathematical rule of P.E.M.D.A.S. (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction) for it's order of operations.//
Number("top hat"); //This would return NaN.  The reason for this being that you gave it a string as it's argument and it was expecting a number.//
```

#### String:
A string is a way to identify textual data or language.  In other words a string allows us to input human speech into the computer without it thinking that it is a code command or action to be processed.  All strings must be surrounded by matching quotation marks, either '' or "".  If you use the String function you can pass in a single string to be output or multiple strings that you would like to concatenate (mush together).  If you don't pass in a string, it will take your input and convert it to a string if possible.
###### A Few Examples:
```
String("yellow cat"); //This would return 'yellow cat'.  Remember because it outputs a string it will still have matching quotation marks surrounding it.//
String(76); //This would return '76'.  Although you input a number, because you used the String function it assumed that you wanted it resulted as a string.//
String("jump" + "around"); //This would return 'jumparound'.  When passed two strings to be added in the expression, the String function will push them together or concatenate them.//
```

### Basic Operators:
