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

### Logical Operators:

#### Logical AND (&&):
The logical AND operator is used to evaluate multiple expressions.  For the sake of learning this we will discuss it taking in two expressions.  Each expression is an operand on either side of our logical AND operator.  When executing this statement JavaScript will evaluate the expression on the left to determine it's Boolean value (true or false).  If it evaluates to true, then it will proceed to evaluating the expression on the right for it's Boolean value.  If that evaluates to true then it will execute whatever code you have placed in the curly braces.  If either is false it will skip past that code on to the next thing.
###### A Few Examples:
```
var A = "A", B = "B";
if (A === "A" &&& B === "B") { //This reads if variable A is equal to string A AND variable B is equal to string B then do...
  console.log("We received two trues!");
}

var carmpg = 28, hybridmpg = 40;
if (carmpg > hybridmpg &&& hybridmpg > 36) {
  console.log("You should have bought a hybrid!");
}
```

#### Logical OR (||):
The logical OR operator is used to evaluate multiple expressions.  Just like with the logical AND operator we are going to talk about how this works with two expressions.  Each expression is an operand on either side of our logical OR operator.  When executing this statement JavaScript will evaluate the expression on the left to determine it's Boolean value (true or false).  It will then proceed to evaluating the expression on the right for it's Boolean value.  If either of the two expressions evaluates to `true` then it will run the code inside of the curly braces.  If both expressions evaluate to `false` then it will skip past that code and on to the next thing.
###### A Few Examples:
```
var A = "A", B = "B";
if (A === "A" || B === "b") { //This reads if variable A is equal to string A OR variable B is equal to string b then do...
  console.log("At least one expression is right!");
}

var carmpg = 28, hybridmpg = 40;
if (carmpg > hybridmpg || carmpg > 30) {
  console.log("See, you should have bought a hybrid!")
}
```

#### Logical NOT (!):
The logical NOT operator is used to get the opposite Boolean value than would have been returned from the expression without it.  We would use if we were trying to determine which of something doesn't fit our criteria so that we could eliminate it from consideration.
###### A Few Examples:
```
var carmpg = 28, truckmpg = 14, hybridmpg = 40, planempg = 5;
if (carmpg !> 36) { //This would read if the value of carmpg (28) is NOT greater than the numeral 36, then do...
  console.log("Why do you still have that car?!?!");
}

if (truckmpg !== planempg) {
  console.log("But they are both big!");
}
```

### Comma Operator (,):
The comma operator evaluates each of it's operands from left to right and then returns the value of the last operand.  These are most commonly used when needing to give more than one expression in a location that is set up to recieve only one.
###### A Few Examples:
```
function someFunction() {
  var p = 2;
  console.log(p += 2, p)
} //This let's console.log assign the value of numeral 2 to the already existing value of numeral 2 in p and then print out the new value of p//
```

### typeof Operator:
The typeof operator evaluates an unevaluated operand and returns a string indicating the type.
###### A Few Examples:
```
typeof true //this would return 'boolean'
typeof "jelly" //this would return 'string'
typeof 7.65487 //this would return 'number'
typeof bareword //this would return 'undefined'.  This is because it thinks we set up the bareword as a variable or object somewhere else but can't find it.
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

## Control Flow Statements:
These are a set of compact statements that JavaScript supports that give us the ability to have a lot of interactivity when creating applications.  Remember that _control flow_ is the order in which the program executes statements within the script.

### Block Statements w/Block Operators ({}):
Block operators are the `{}` that you see all throughout JavaScript code.  They are meant to create boundaries around a single or collection of statements.  This is called a block statement.  Block statements are critical to the control flow of our script in that it helps to identify scope.  I will go into scope more in another part of this document but scope is what lets the control flow know what statements can access other statements and in what order they should do so.
###### A Few Examples:
```
function banana {
  //some statement code here...
}; The Block operators ({}) on either side of the statement code inside create a block statement.  This means that the code inside is local and therefore the control flow knows that code outside of the block cannot access it.

var orange = {
  0,
  1,
  "two"
};  Here the block operators do not contain a complete statement inside of them.  Instead they house values meant to be assigned to var orange which can be used by the global (_everywhere_) scope.
```

### Conditional Statements:
A set of commands that executes if the evaluated condition is true.

#### if...else:
An _if...else_ statement takes in a condition that can evaluate to a boolean value.  If the condition returns the boolean value of `true` then the code placed inside the _if...else_ statements block operators (`{}`) will execute.  If the condition returns the boolean value of `false` it will either do nothing and end the evaluation or you can use the `else` statement to specify what you want executed when `false`.
###### A Few Examples:
```
if (2 === 2) { //Here it says if the numeral 2 is exactly equal to numeral 2...
  console.log("Twins!"); //then print to my console the message
} else { //if it they are not exactly equal...
  console.log("It was too good to be true."); //then print to my console this message
};

if ("string" === true) { //Here it says if string word string is exactly equal to a boolean value of true...
  return "You've got string!"; //and the rest is the same as above.
} else {
  return "Guess you'll need to find another way";
};
```

### Loops and Iteration

#### do...while statement:
A `do...while` statement performs statements within the block operators until the specifed condition evaluates to a boolean value of `false`.  Regardless of the condition a `do...while` statement will execute the statements within the block operators at least once.
###### A Few Examples:
```
do {
  var x = 15; // This says that variable x starts with an assigned value of 15 and prints to the console that value.
  x -= 1; // Then the value of x (15) will subtract 1 and assign the new value (14) to x.
  console.log(i);
} while (x > 10); //While the current value of x (14) is greater than 10 it will go back and print that value to the console.
```

#### while statement:
The `while` statement is very similar to the `do...while` in the fact that it performs the statements within the block operators (`{}`) as long as the boolean value returned is `true`.  Unlike the `do...while` statement the `while` statement will not execute those statements unless the condition given results in `true` period.  You **MUST** make sure that your condition will eventually result in `false` or you will have created an infinite loop which will break your browser.
###### A Few Examples:
```
var exampleArray = [4, 6, 7, 2, 8, 9];
var i = exampleArray[i];
var x = 4;
while (i <= x) { //This says while the value of exampleArray location i is less than or equal to the value of x...
  return i + "is less than or equal to" + x; //return a string stating that it is...
}
```

## Functions:
Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs to determine the order in which your statements are executed.

### `function` **keyword**:
A function is a reusable block of code created to make something happen.  That can be behind the scenes or via a visual prompt or printout to the user.  Every function created with a function declaration (the code to set one up explicitly) is a function object and therefore gets access to the properties, methods, and behaviors of function objects.  When creating a function declaration you need three parts: the function name, the parameters you want to pass in if any and the statements you want to be executed when you call the function.  Below I will show you what this looks like.
###### A Few Examples:
Your basic function structure:
```
function name (parameters) {
  statements you want to execute
} close function
```
Your basic function invocation:
```
functionname(parameters if any);close statement
```
Real examples:
```
function printAbc () {
  var abcContainer = [A, B, C];
  for (var i = 0; i <= abcContainer.length; i++) {
    console.log(abcContainer[i]);
  }
};

printAbc();
```
The above would read that when I invoke the printAbc function I want to create a temporary variable i and assign it a value of numeral 0.  If the value of i is less than or equal to the length of the abcContainer array, then I want the temporary variable i to increase it's position/value by 1.  Then print out the current value for position i.  If the value of i is not less than or equal to the length of the abcContainer array, then stop printing out.

### Objects:

#### Math object (Math):
Math is an object that is built into JavaScript already.  It has many properties and methods for mathematical constants and functions.  Unlike JavaScript's other global objects, `Math` is not a constructor, meaning you don't create more "Math" objects by calling it like a constructor.  All properties and methods that `Math` has are "static" meaning they do not change with user input, but rather they are firmly defined so that they can be consistantly counted on _(no pun intended)_ to do their jobs.
##### A Few `Math` Methods:
 *The `Math.floor(x)` method recieves numeric input either from the user or another function and returns the largest integer less than or equal to that number.  For example if I were to say `Math.floor(4.6783);` it would return `4`.  This may seem counterintuitive because of what you learned in grade school math but this is a useful method in certain use cases.
  *The `Math.random()` method doesn't have to have any input to perform it's task.  It simple returns a pseudo-random number between 0 and 1.  You may ask how can it be random if it only has two numbers to choose from.  Remember that in JavaScript all numbers are decimal numbers, it just doesn't always render that to us visually.  Therefore the `Math.random()` function has a lot of potential options between `0.00 and 1.00`.  An example of which might be `0.46832`.
  
#### Array:
The JavaScript Array is a type of container.  It is also a global object which means that it can be used to construct other Array's and is built into JavaScript already.  It's purpose is to store data that may need to change as needed.  This means that it is not fixed and will not always hold a familiar shape or makeup.  Arrays are initialized either empty/`undefined` or which preset values and locations.  When accessing an array element you start with the first location at 0.  Below I will show you how to do this and provide an example or two.
```
var someArray = []; //This would create an empty array that we can use as we like
var someArray = [43, 87, 946, 2374]; //This would create an array with 4 values and indexed between 0 and 3
console.log(someArray[2]); //This would print to the console the value 946;
```
##### Array Property Length:
The `.length` property represents an unassigned 32 bit integer that is always greater than the highest index in the array it references.  You can manually manipulate the value that `.length` recognizes for the size of an array but it does not change the amount of contents within that array.  More often than not you will utilize the `.length` array property to iterate through the contents of an array.  This is particularly useful in `for` loops.  Below I will give you an example of what the `.length` property looks like and the types of output it can provide.
```
//let's take our someArray from our previous example
var howBigIsIt = someArray.length; //This will store the length of someArray, which is 4, in the variable howBigIsIt
for (var i = 0; i < someArray.length; i++) { //This says I want to walk through the array in increments of 1 as long as we don't exceed the length
  console.log(someArray[i]); //Then I want to print out the value of the current array location
};
```
##### Array Methods:
 *The `array.pop()` method removes the last element from an array and returns that element to you for use as specified.  This could be used for any number of reasons.  I'll provide a couple of examples below.
```
var boyNames = ['John', 'Henry', 'Gustof', 'Henrik', 'Neil', 'Isaac'];
var lastNameEntered = boyNames.pop(); //This would take 'Isaac', the last element in the array, and assign it to lastNameEntered
var newLastNameEntered - boyNames.pop(); //This would now take 'Neil' and assign it as 'Isaac' has already been removed from the array contents.
```
  *The `array.push()` method adds one or more new elements to the end of an already established array and returns the new length of the array.  This method is dependent on the value of the `.length` property as it's starting point.  As always, I will provide an example or two below.
```
var carBrands = ['Honda', 'Ford'];
var newCarBrands = carBrands.push('Lexus', 'Cheverolet', 'Maserati');
console.log(carBrands); //This would now equal ['Honda', 'Ford', 'Lexus', 'Cheverolet', 'Maserati']
consoel.log(newCarBrands);  //The new length would be 5
```
 *The `array.reverse()` method does exactly what it's name implies which is to reverse the order of an array's elements in place.  This means that whatever was at the last index is now at the first and vice versa.
```
var letterArray = ['a', 'b', 'c', 'd'];
letterArray.reverse();
console.log(letterArray); //This would now look like ['d', 'c', 'b', 'a']
```
 *The `array.shift()` method removes the first element of an array and returns it to the caller.  This does change the length of the array.
```
var pets = ['dog', 'cat', 'fish', 'bunny', 'snake'];
pets.shift();
console.log(pets); //The new array would be ['cat', 'fish', 'bunny', 'snake'];
```
 * The `array.splice()` method alters the contents of an array by removing elements and/or adding new elements.  The syntax typically takes in the parameters of starting point (this is the index that you want to start you alterations), then a deleteCount (this is how many elements you want to remove) and then optionally what new item you want to insert.  If the starting point is a negative number it is measured from the end of the array.  If the deleteCount is 0 or not specified then you don't remove anthing and more than likely are going to insert at that location.
```
var numbers = [54, 76, 983, 264];
numbers.splice(2, 1); //This would remove 983
numbers.splice(1, 0, 59);  //This would change the array to hold [54, 59, 76, 264]
```
 *The `array.slice()` method acts a lot like the `array.splice` method in the sence that it is asking for which part of the array you want to manipulate.  Unlike the `array.splice` method, the `array.slice` method doesn't alter the original array.  Instead it creates a new array with the portion of the original that you specified.  It requires parameters of a starting point and ending point, both of which based on the index location.
```
var food = ['hamburger', 'biscuit', 'bacon', 'potatoes'];
var favs = food.slice(2, 4);
console.log(favs); //This would return an array with ['bacon', 'potatoes'];
```
 *The `array.join()` method merges all of the elements in an array into a string.  For a parameter it takes what you want to use as a delimiter for each array element as a string if any.
```
var initials = ['JW', 'PT', 'QS', 'RG'];
var example1 = initals.join(); //This would look like 'JW,PT,QS,RG'
var example2 = initals.join(' + '); //This would look like 'JW + PT + QS + RG'
```
 *The `array.toString()` method does almost the exact same thing that `array.join` does but instead does not accept a delimiter parameter.  It simply creates one large string of all array elements separated by commas. **If you need to see an example, look above at the parameter-less `array.join` example**
 *The `array.split()` method splits a String object into an array of strings by separateing it into substrings.  As for a parameters, you have the option to identify a separator that would like to used or the limit on the number of splits() to be found within the String object.  This is great for iterating through information that was once in String form which cannot be iterated through.
```
var phrase = "Oh what a day it will be, what a day it will be";
var arrayPhrase = phrase.split(space);
console.log(arrayPhrase); //['Oh', 'what', 'a', 'day', 'it', 'will', 'be', ',', 'what', 'a', 'day', 'it', 'will', 'be']
```



### Hoisting:
In JavaScript, functions and variable are `hoisted`.  This is a behavior where JavaScript takes our declarations and moves them to the top of a scope (aka the global scope or current function scope).  What this means is that we are able to use a function or variable before it has been declared.  An example of this would be:
```
purpleMonster(); //This function invocation should log "eats people"

function purpleMonster() {
  console.log("eats people"); //log is also a "hoisted" function that we have not yet defined.
};
```
In the above example we were able to invoke our function before we had defined it.  In some programming languages you are unable to do this because of it's natural `control flow` or the order in which it processes the statements you have written.  In this way JavaScript is a bit smarter and knows that it should look to see if the function was defined/declared elsewhere before resulting the invocation.
