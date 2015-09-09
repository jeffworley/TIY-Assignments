// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');
    test = require('mocha').it,
    expect = require('chai').expect;

// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(items).to.exist;
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  expect(items.length).to.equal(25); // It's haunting me now...
});

function isArray(items) {
  return items;
};

test('finding the average price', function(){
  //var yourAnswer = items.indexOf(10); This was wrong.
  //maybe reference the key in the dictionary object. var yourAnswer = items.price();

  /*
   * We need to know each item's price.
  */
   var prices = [ ];


// {
//    var index, length;
//
//    index = 0; length = 1;
// }
//    // For the first item in the list
//    var item = items[index];
//    expect(item).to.be.an('object');
//    expect(item.price).to.be.a('number');
//    // expect(item.price).to.be.equal(12);
//
//    prices.push(item.price);
//
//    // expect(prices).to.deep.equal([12]);
//    expect(prices.length).to.equal(length);

// {
//   index = 1; length = 2;
// }
//
//    //For the second item in the list
//    item = items[index];
//    expect(item).to.be.an('object');
//    expect(item.price).to.be.a('number');
//    // expect(item.price).to.be.equal(20);
//
//    prices.push(item.price);
//
//    // expect(prices).to.deep.equal)([12,20]);
//    expect(prices.length).to.equal(length);

//Let's Refactor the Above!!!
function forEachItem(index, length) {

  expect(item).to.be.an('object');
  expect(item.price).to.be.a('number');

  prices.push(item.price);

  expect(prices.length).to.equal(length);

};

var index, length;

items.forEach(function(item,index, all){
  forEachItem(index, index + 1);
})

forEachItem(0,1);
forEachItem(1,2);
forEachItem(2,3);
forEachItem(3,4);

  /* We need to figure out the sum of all item's prices.
   * We need to know the total number of items.
   *
   * The sum of all item prices is divided by the number of items.
   *

  return yourAnswer; //Have no idea why this works.  Couldn't decipher if indexOf grabs the array at that point within the array or the element at that point within each array inside of the array.  Didn't seem like parameter mattered.

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
  function pricedBetween(items, min, max){
    // Just a suggestion, really...
    return [];
  }

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
    //We think we should return an array including the following index points 0, 5,7,11,16,18.
  ]);
});

test('pond hopping', function(){
  expect( /* your answer */ ).to.deep.equal({
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
