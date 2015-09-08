var test = require('mocha').it,
  expect = require('chai').expect;

/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 */
function reverse(S){
  // YOUR CODE HERE: NO INTERNET COPY-PASTA!
  // Solved by iterating through the string given by each letters location.
/*  var revResult = '';
  for (var i = S.length - 1; i >= 0; i--) {
    revResult += S[i];
  }
  return revResult;
}*/

  // Solved smarter by using JavaScript built in methods
  return S.split('').reverse().join('');
}


console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */
function encode(phrase, N){
  // YOUR CODE HERE... EMPHASIS ON **YOUR**
  var secretCode = phrase.split(''); //Turning the string that was entered as a parameter into an array of characters.
  for (var i = 0; i < secretCode.length; i++) {
    secretCode[i] = secretCode[i].charCodeAt() + N; //Trying to get the Unicode number for the current character to determine shift.
    if (secretCode[i] > 122) { //evaluating the Unicode number against the Unicode number for Z.
      secretCode[i] = String.fromCharCode(secretCode[i] - 26); //Taking that Unicode number, doing the math I think it needs to move 13 characters and converting that back to a character.
    } else {
      secretCode[i] = String.fromCharCode(secretCode[i]);
    }
  }
  return secretCode.join('');
}

//I really have no clue how to write this function but have spent around 3 hours researching, looking up the methods associated with strings and arrays, and trying to glean help from my peers.

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
    // YOUR CODE HERE
}

// Produce more examples, please...
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");

console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
