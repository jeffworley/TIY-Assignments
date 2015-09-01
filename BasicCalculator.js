/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function add(A, B) {
  return A + B;
} // END ADD

console.assert(add(0, 0) === 0);
console.assert(add(0, 1) === 1);
console.assert(add(0, 2) === 2);
console.assert(add(0, 3) === 3);
console.assert(add(0, 4) === 4);
console.assert(add(0, 5) === 5);
console.assert(add(0, 6) === 6);
console.assert(add(0, 7) === 7);
console.assert(add(0, 8) === 8);
console.assert(add(0, 9) === 9);

/**
 * @param {Number} A to be subtracted from by B
 * @param {Number} B to be subtracted from A
 * @return {Number} difference of A and B
 */
function minus(A, B) {
  return A - B;
} //END MINUS

console.assert(minus(0, 0) === 0);
console.assert(minus(1, 0) === 1);
console.assert(minus(2, 0) === 2);
console.assert(minus(3, 0) === 3);
console.assert(minus(4, 0) === 4);
console.assert(minus(5, 0) === 5);
console.assert(minus(6, 0) === 6);
console.assert(minus(7, 0) === 7);
console.assert(minus(8, 0) === 8);
console.assert(minus(9, 0) === 9);

/**
 * @param {Number} A to multiply by B
 * @param {Number} B to multiply by A
 * @return {Number} product of A and B
 */
function times(A, B) {
   return A * B;
 } //END TIMES

console.assert(times(0, 0) === 0);
console.assert(times(1, 1) === 1);
console.assert(times(2, 1) === 2);
console.assert(times(3, 1) === 3);
console.assert(times(4, 1) === 4);
console.assert(times(5, 1) === 5);
console.assert(times(6, 1) === 6);
console.assert(times(7, 1) === 7);
console.assert(times(8, 1) === 8);
console.assert(times(9, 1) === 9);

/**
 * @param {Number} A to be divided by B
 * @param {Number} B to divide into A
 * @return {Number} quotient of A and B
 */
function divide(A, B) {
   return A / B;
 } //END DIVIDE

 //console.assert(divide(0, 0) === NaN);
 console.assert(divide(1, 1) === 1);
 console.assert(divide(2, 1) === 2);
 console.assert(divide(3, 1) === 3);
 console.assert(divide(4, 1) === 4);
 console.assert(divide(5, 1) === 5);
 console.assert(divide(6, 1) === 6);
 console.assert(divide(7, 1) === 7);
 console.assert(divide(8, 1) === 8);
 console.assert(divide(9, 1) === 9);
