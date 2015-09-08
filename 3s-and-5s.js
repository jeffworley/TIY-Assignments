var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

function whatThrees(value) {
  var allThrees = [];
  for (var i = 0; i < value; i++) {
    if (i % 3 === 0) {
      allThrees.push[i];
    }
  }
  return allThrees;
  var sum = 0;
  allThrees.forEach(function() {
    sum += this;
  });
};

test('getting a list of multiples of 3', function(){
  // Now what should go in here?
  //expect(allThrees).to.be.a('array');
  expect(whatThrees(10)).to.deep.equal([3,6,9]);
  expect(whatThrees(20)).to.deep.equal([3,6,9,12,15,18]);
  expect(whatThrees(30)).to.deep.equal([3,6,9,12,15,18,21,24,27]);
  expect(whatThrees(50)).to.deep.equal([3,6,9,12,15,18,21,24,27,30,33,36,39,41,44,47]);
  expect(sum(10)).to.deep.equal(23);
  expect(sum(20)).to.deep.equal(63);
  expect(sum(30)).to.deep.equal(135);
  expect(sum(50)).to.deep.equal(543);
}); // END test 3s

function whatFives(value) {
  var allFives = [];
  for (var i = 0; i < value; i++) {
    if (i % 5 === 0) {
      allFives.push[i];
    }
  }
  return allFives;
  var sum = 0;
  allFives.forEach(function() {
    sum += this;
  });
};

test('getting a list of multiples of 5', function (){
  expect(whatFives(10)).to.deep.equal([5]);
  expect(whatFives(20)).to.deep.equal([5,10,15]);
  expect(whatFives(50)).to.deep.equal([5,10,15,20,25,30,35,40,45]);
  expect(sum(10)).to.deep.equal(5);
  expect(sum(20)).to.deep.equal(30);
  expect(sum(50)).to.deep.equal(225);
});

function threesAndFives(value) {
  var allThreesAndFives = [];
  for (var i = 0; i < value; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      allThreesAndFives.push[i];
    }
  }
  return allThreesAndFives;
  var sum = 0;
  allThreesAndFives.forEach(function() {
    sum += this;
  });
};

test('getting a list of multiples of 3 and 5', function (){
  expect(threesAndFives(10)).to.deep.equal([undefined]);
  expect(threesAndFives(20)).to.deep.equal([15]);
  expect(threesAndFives(50)).to.deep.equal([15,30,45]);
  expect(sum(10)).to.deep.equal(0);
  expect(sum(20)).to.deep.equal(15);
  expect(sum(50)).to.deep.equal(90);
  expect(sum(1000)).to.deep.equal(?);
});
