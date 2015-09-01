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

#### Arithmetic:

##### Addition (+):
The addition operator performs one of two functions.  It either gives you the sum of your two *numeric* operands or it concatenates (pushes together) two *string* operands.  Operands are the values that you place on either side of the addition **(+)** operator.
###### A Few Examples:
```
5 + 4 //This would equal 9.  It's that simple when it's that simple :)//
"day" + "walker" //This would result in the string "daywalker" altogether.  Just like when we discussed what the String function can do we included the addition operator in our parameters.//
72 + "seventytwo" //This would result in the string "72seventytwo".  The reason for this is when using any operator, it is going to evaluate the types of your operands and try to figure out what type you want back.  If you mix types like we did, it will take the more specific type which is the string denoted by matching quotation marks and assume that you meant "72" and not the computer number 72.//
```

##### Subtraction (-):
The subtraction operator performs differently than the addition operator in that it only performs one function.  When you give it two *numeric* operands it will result the difference between the two.  If you attempt to give it mixed type operands it will try and convert the non numeric operand into a number and if it cannot it will result with *NaN*.  This stands for not a number and we will dive into that a bit further later in our README document.
###### A Few Examples:
```
89 - 43 //This would result as 46 or in other word the numerical difference between your operands.//
29 - true //This would result as 28.  The reason for this being that true is a *boolean* value as we discussed above and it can be converted to a number.  The number for a boolean value of false is 0 and the number for a boolean value of true is 1.//
"flappy" - 3 //This would result as NaN or not a number.  The computer is unable to directly convert a *string* to a numeric value and therefore says the result of trying this equation would be not a number.//
```

##### Division (/):
The division operator will give you the quotient or how many times the **divisor** (*numeric* value on the right side) can go into the **dividend** (*numeric* value on the left side.  It is important to remember that while using JavaScript we may only see a whole number on the output screen, it actually is storing the numbers and decimal numbers in the background.  We encounter this when we use the division operator from time to time.
###### A Few Examples:
```
50 / 10 //This would result in a quotient of 5.//
5 / 10 //This would result in a quotient of .50.//
5 / 0 //This would reult in a quotient of **infinity**.  This is because we cannot reasonably know the exact number of times 0 would go into 5.//
```

##### Multiplication (*):
The multiplication operator will give you the product of your two *numeric* operands.  As discussed before within this document, if you give two diffent operand types the computer will attempt to convert the non numeric operand into a number to perform the multiplication.  If it cannot you will receive the NaN output.
###### A Few Examples:
```
7 * 4 //This would result in a product of 28.//
5 * false //This would result in a product of 0.  Remember that boolean operands can be converted to numeric values and in this case the numeric value of false is 0 and anything multiplied by 0 is 0.//
"spaceship" * 2015 //This would result in NaN.  The computer cannot convert the string "spaceship" to a numeric value and therefore the result is not a number.//
```

##### Remainder/Modulo (%):
The remainder/modulo operator perfoms division but instead of resulting in the quotient it instead results in the remainder.  I know this may sound confusing at first but I'll provide a couple examples to hopefully clear things up.
###### A Few Examples:
```
80 % 10 //This would result in a remainder/modulo of 0.  The reason for this is that 10 successfully goes into 80 evenly and therefore there is nothing left to account for numerically.//
45 % 7 //This would result in a remainder/modulo of 3.  The number 7 does not go into the number 45 evenly.  In fact 7 can only go into 45 six times without exceeding the number leaving 3 left over to account for.//
-36 % 6 //This would result in a remainder/modulo of -0.  Just like when you learned it in math class, if you divide a negative number by a positive number the result will be negative.  Even if it's on a number we typically associate with being the middle point between negative and positive numbers like 0.//
```

#### Comparison:

##### Equality Operators (==, !=, ===, !==):
###### Equality (==):
The equality operator takes two operands and converts them into the same type if they are mixed.  It then evaluates whether or not comparatively they are the same.  It results the determination in the form of a boolean value.
###### A Few Examples:
```
7 == 7 //This would result in a boolean value of true.//
7 == "7" //This would result in a boolean value of true.  Just like we have covered above, JavaScript will attempt to match the operand types for us.  In this case because we are performing a direct comparison, JavaScript could convert these operands to numeric or string and it would still be true.//
7 == 8 //This would result in a boolean value of false.//
```

###### Inequality (!=):
The inequality operator works the opposite of the equality operator.  It reads that if the two operands are not(!) equal(=) in a direct comparison then return the boolean value of true.  If they are return false.
###### A Few Examples:
```
7 != 7 //This would result in a boolean value of false because 7 is the same comparatively to 7.//
34 != "76" //This would result in a boolean value of true.  Regardless of is JavaScript converts the two operands to numeric or string values they do not match so the statement is true.//
```

###### Identity / Strict Equality (===):
The identity / strict equality operator does not do type conversion.  So unlike our equality operator, if the two operands are not an exact match of type of value you will return a boolean value of false.
###### A Few Examples:
```
82 === 82 //This would result in a boolean value of true.//
82 === "82" //This would result in a boolean value of false.  Remember the identity / strict equality operator does not convert types and the string "82" and numeric 82 are different in the eyes of JavaScript.//
```

###### Non-Identity / Strict Inequality (!==):
The non-identity / string inequality operator also does not do type conversion.  It evaluates the value and type of the two operands given and if they do not match results in a boolean value of true.  If they do match it results in a boolean value of false.
###### A Few Examples:
```
82 !== 82 //This would result in a boolean value of false because they are the same value and type.//
82 !== "82" //This would result in a boolean value of true because they are not the same value and type.//
```

##### Relational Operators:
###### Greater than (>):
The greater than operator returns the boolean value of true if the left operand is larger than the right operand.  It's really that simple.
###### A Few Examples:
```
92 > 74 //This would result in a boolean value of true.//
35 > 124 //This would result in a boolean value of false.//
45 > 45 //This would result in a boolean value of false.  Although the left operand is not less than the right operand it is also not greater than it.//
```

###### Greater than or Equal to (>=):
The greater than or equal to operator returns the boolean value of true if the left operand is larger or the same as the right operand.
###### A Few Examples:
```
76 >= 32 //This would return a boolean value of true.//
85 >= 81 //This would return a boolean value of false.//
64 >= 64 //This would return a boolean value of true.//
```

###### Less than (<):
The less than operator returns the boolean value true if the left operand is smaller than the right operand.
###### A Few Examples:
```
13 < 14 //This would result in a boolean value of true.//
24 < 12 //This would result in a boolean value of false.//
33 < 33 //This would result in a boolean value of false.  Just like with the plain greater than operator, if the numbers match the expression is false because we are evaluating if the left operand is less than the right operand.//
```

###### Less than or Equal to (<=):
The less than or equal to operator returns the boolean value of true if the left operand is smaller than or the same as the right operand.
###### A Few Examples:
```
9 <= 54 //This would result in a boolean value of true.//
89 <= 88 // This would result in a boolean value of false.//
61 <= 61 //This would result in a boolean value of true.//
```

#### Assignment:

##### Assignment (var = value):
The assignment operator simply takes the value on the right and gives it to the variable on the left or assigns it.
###### A Few Examples:
```
var peanut = "butter"; //This puts the string "butter" inside of the variable peanut.//
var racks = 10; //This takes the numeric value of 10 and assigns it to the variable racks.//
```

##### Addition Assignment (var += value):
The addition assignment operator takes the operand on the right and adds that value to the already held value of the variable.
###### A Few Examples:
```
var yo = 7; //Here we assign a value of 7 to the variable yo.//
yo += 2; //Then we say add the value 2 to the current value of the variable yo and then make the result the new value of yo.  The new value of yo is 9.//
yo += 3; //Remember yo now has a value of 9 and through this operator I am adding the operand 3 to that value.  The new value of yo is 12.//
```

##### Subtraction Assignment (var -= value):
The subtraction assignment operator takes the operand on the right and subtracts it from the already held value of the variable.
###### A Few Examples:
```
var heyhey = 34; //Here we assign a value of 34 to the variable heyhey//
heyhey -= 10; //Then we say subtract the value 10 from the current value of the variable heyhey and then make the result the new value of heyhey.  The new value of heyhey is 24.//
heyhey -= 7; //Remember heyhey now has a value of 24 and through this operator I am subtracting the operand 7 from that value.  The new value of heyhey is 17.//
```

##### Note regarding the Multiplication and Division Assignment Operators:
In an effort to avoid continuously typing text that only changes in a few places with the same general concept, I am combining these two here.  Just like the Addition and Subtraction Assignment operators, the Multiplication and Division Assignment operators have a variable either with or without a value already assigned to it.  Then based on the preceeding mathematical function (i.e. * or /) before the = sign, it will perform that function and assign the resulting value to the variable on the left.
###### A Few Examples:
```
var tops = 3; //Here we assign a value of 3 to the variable tops.//
tops *= 4; //Then we say mulitply the current value of 3 from tops by 4 and then make the result the new value of tops.  The value of tops is now 12.//
tops /= 3; //Now we divide the current value of 12 from tops by 3 and then make the result the new value of tops.  The value of tops is now 4.//
```

### Built-in Constants:

#### Undefined:
Undefined is a property of the global object.  This means that it is accessable from anywhere inside of JavaScript.  It's purpose is to inform us when something (i.e. variable by itself or within an expression) has not been assigned a value.
###### A Few Examples:
```
var item; //Here we created the item variable with no value therefore it is currently undefined.  It will change as soon as we assign a value to item.//
```

#### NaN:
NaN stand for not a number.  It is also a property of the global object so like undefined it is accessable from anywhere inside of JavaScript.  It's purpose is to inform us when something (i.e. a parameter or variable value) is not a number.
###### A Few Examples:
```
var item = "cheese"; //Here we created the item variable with a string value of "cheese".//
item * 2;  //In this expression we tell JavaScript to multiply the value of item 2 times.  Unfortunately as we learned previously you cannot multiply a string value and therefore we receive the output NaN.//
```

#### Infinity:
Infinity is also a property of the global object so we can access it from anywhere inside of JavaScript.  It's purpose is to represent the largest number possible.  Anything multiplied by Infinity is Infinity and anything divided by 0 is Infinity.  It is technically a measurement but not a precise one.
###### A Few Examples:
```
72 / 0 //This would result in Infinity.  We cannot know how many times 0 trully goes into 72 and therefore it is infinite.//
3 * Infinity //Because Infinity is an impercise measurement, when we multiply 3 by it we get a result of Infinity.  The largest possible number.//
```

