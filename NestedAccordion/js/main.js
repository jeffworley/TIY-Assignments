// Click to slide down and slide up nested info under H3 elements.
$("h3").click(function() {
  console.log("clicked h3!!!");

  $(this).toggleClass("slideOut");

});

// Click to slide down and slide up nested info under H4 elements.
$("h4").click(function() {
  console.log("clicked h4!!!");

  $(this).toggleClass("slideOut");

});

// Click to slide down and slide up nested info under H5 elements.
$("h5").click(function() {
  console.log("clicked h5!!!");

  $(this).toggleClass("slideOut");

});

/*Added modernizr from source download in effort to fold up a <li> elements but it is not working.  I am positive that code above will have the desired affect once I solve the load status.*/
