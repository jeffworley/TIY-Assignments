var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(3), "three");
  assert.equal(toEnglish(4), "four");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(7), "seven");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");
  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)

test('toEnglish: `10` to `20`', function(){
  // use `assert` again...
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(10), "ten");
  assert.equal(toEnglish(11), "eleven");
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eightteen");
  assert.equal(toEnglish(19), "nineteen");
  assert.equal(toEnglish(20), "twenty");
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  // this is where `toEnglish` starts to get interesting...
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(21), "twenty-one");
  assert.equal(toEnglish(22), "twenty-two");
  assert.equal(toEnglish(23), "twenty-three");
  assert.equal(toEnglish(24), "twenty-four");
  assert.equal(toEnglish(25), "twenty-five");
  assert.equal(toEnglish(26), "twenty-six");
  assert.equal(toEnglish(27), "twenty-seven");
  assert.equal(toEnglish(28), "twenty-eight");
  assert.equal(toEnglish(29), "twenty-nine");
  assert.equal(toEnglish(30), "thirty");
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
  // start simply and refactor...
  var engNumMap = [{id:0, name:"zero"}, {id:1, name:"one"}, {id:2, name:"two"}, {id:3, name:"three"}, {id:4, name:"four"}, {id:5, name:"five"}, {id:6, name:"six"}, {id:7, name:"seven"}, {id:8, name:"eight"}, {id:9, name:"nine"}, {id:10, name:"ten"}, {id:11, name:"eleven"}, {id:12, name:"twelve"}, {id:13, name:"thirteen"}, {id:14, name:"fourteen"}, {id:15, name:"fifteen"}, {id:16, name:"sixteen"}, {id:17, name:"seventeen"}, {id:18, name:"eightteen"}, {id:19, name:"nineteen"}, {id:20, name:"twenty"}, {id:21, name:"twenty-one"}, {id:22, name:"twenty-two"}, {id:23, name:"twenty-three"}, {id:24, name:"twenty-four"}, {id:25, name:"twenty-five"}, {id:26, name:"twenty-six"}, {id:27, name:"twenty-seven"}, {id:28, name:"twenty-eight"}, {id:29, name:"twenty-nine"}, {id:30, name:"thirty"}];

  /*I created an array full of key-value pair objects and then I will iterate through those key-value pairs and return the english string version of the value put in.*/

  for (var i = 0; i < engNumMap.length; i++) {
    if (engNumMap[i].id === value) {
      return engNumMap[i].name;
    }
  }
  /*switch(value) {
    case 0:
      return "zero";
      break;
    case 1:
      return "one";
      break;
    case 2:
      return "two";
      break;
    case 3:
      return "three";
      break;
    case 4:
      return "four";
      break;
    case 5:
      return "five";
      break;
    case 6:
      return "six";
      break;
    case 7:
      return "seven";
      break;
    case 8:
      return "eight";
      break;
    case 9:
      return "nine";
      break;
  }*/
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)

function toCheck(value) {
  var deciNum = value.toFixed(2); //This makes the input value show to the second decimal place.
  var strNum = deciNum.toString(); //This will take the precious number and "stringify" it.
}
