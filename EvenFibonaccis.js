var text = require('mocha').it,
  expects = require('chai').expect;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5 ]);
  // ...ad nauseum.
  expect(fibonacci(10)).to.deep.equal([1,2,3,5,13,21,34,55,89]);
  expect(fibonacci(20)).to.deep.equal([1,2,3,5,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946]);
}); // END test(fibonacci)

// Hey, where's `fibonacci`...? Uh oh...
function fibonacci(n) {
  var fibSequence = [];
  var a = 0, b = 1, f = 1;
  for(var i = 1; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
    fibSequence.push(f);
  }
  return fibSequence;
};

test('just even numbers?', function(){
  expect(eFibSequence([ ])).to.deep.equal([ ]);
  expect(eFibSequence([ 1 ])).to.deep.equal([ ]);
  expect(eFibSequence([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(eFibSequence([ 2 ])).to.deep.equal([ 2 ]);
  expect(eFibSequence([ 1, 2 ])).to.deep.equal([ 2 ]);
  // More tests, perhaps?
  expect(eFibSequence([1,2,3,5,13,21,34,55,89]).to.deep.equal([2,34]));
  expect(eFibSequence([1,2,3,5,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946])).to.deep.equal([2,34,144,610,2584,10946]);
}); // END test(evens)

function evenFibs(array) {
  var eFibSequence = [];
  for(var i = 0, i <= array.length; i++) {
    if ((array[i] % 2) === 0) {
      eFibSequence.push(array[i]);
    }
  }
  return eFibSequence;
};

test('summing lists of Number', function(){
  assert.equal(sum([ ]))to.equal(0);
  assert.equal(sum([ 1 ])).to.equal(1);
  assert.equal(sum([ 1, 1 ])).to.equal(2);
  // ...et cetera, et cetera, et cetera.
  assert.equal(sum([1,2,3,5,13,21,34,55,89])).to.equal(223);
  assert.equal(sum([1,2,3,5,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946])).to.equal(28647);
}); // END test(sum)

// You expect me to write `sum`, too?
function sum(array) {
  var fibArraySum = 0;
  for(var i = 0; i <= array.length; i++) {
    fibArraySum += array[i];
  }
  return fibArraySum;
}; //This would also solve the summing even Fibonacci numbers as you could enter the eFibSequence array as the paramter.


test('summing even Fibonacci numbers?', function(){
  expect( sum(evenFibs(fibonacci(0))) ).to.equal(0); // nice.
  // There really should be more code in here...
  expect( sum(evenFibs(fibonacci(10))) ).to.equal(44);
  expect( sum(evenFibs(fibonacci(20))) ).to.equal(14320);
  expect( sum(evenFibs(fibonacci(50))) ).to.equal(26658145586);
}); // END test(dat CHAIN tho)
