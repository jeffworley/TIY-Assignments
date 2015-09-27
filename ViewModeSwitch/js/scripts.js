/*
// To access the <a> element with a fixed class of 'cbp-vm-list'.
var listBtn = document.querySelector('.cbp-vm-list');

// To assign an event listener to the <a> element with fixed class of 'cbp-vm-list' with trace bullet message.
listBtn.addEventListener('click', function(){

  // Tracer bullet message.
  //console.log('You clicked the list icon!!!');

  // Add the class 'cbp-vm-selected' when click event is heard.
  listBtn.classList.add('cbp-vm-selected');
  // And remove the class 'cbp-vm-selected' from the gridBtn <a> element.
  gridBtn.classList.remove('cbp-vm-selected');
  // Then remove the class 'cbp-vm-view-grid' from the <div> element with a fixed class of 'cbp-vm-switcher'.
  switcher.classList.remove('cbp-vm-view-grid');
  // Then add the class of 'cbp-vm-view-list' to the <div> element with a fixed class of 'cbp-vm-switcher'.
  switcher.classList.add('cbp-vm-view-list');

});


// To access the <a> element with a fixed class of 'cbp-vm-grid'.
var gridBtn = document.querySelector('.cbp-vm-grid');

// To assign an event listener to the <a> element with a fixed class of 'cbp-vm-grid' with a tracer bullet message.
gridBtn.addEventListener('click', function(){

  // Tracer bullet message.
  //console.log('You clicked the grid icon!!!');

  // Add the class 'cbp-vm-selected' when click event is heard.
  gridBtn.classList.add('cbp-vm-selected');
  // And remove the class 'cbp-vm-selected' from the listBtn <a> element.
  listBtn.classList.remove('cbp-vm-selected');
  // Then remove the class 'cbp-vm-view-list' from the <div> element with a fixed class of 'cbp-vm-switcher'.
  switcher.classList.remove('cbp-vm-view-list');
  // Then add the class 'cbp-vm-view-grid' from the <div> element with a fixed class of 'cbp-vm-switcher'.
  switcher.classList.add('cbp-vm-view-grid');

});

// To access the <div> element with a fixed class of 'cbp-vm-switcher'.
var switcher = document.querySelector('.cbp-vm-switcher');
*/

// Create functionality for list button.
$(".cbp-vm-list").on('click', function() {
  // List Button Tracer Bullet!!!
  console.log("List Button Clicked!!!");

  // Remove the selected class from grid button.
  $(".cbp-vm-grid").removeClass("cbp-vm-selected");

  // Add the selected class to the list button.
  $(".cbp-vm-list").addClass("cbp-vm-selected");

  // Apply the correct class to the <div> element surrounding the buttons.
  $(".cbp-vm-switcher").removeClass("cbp-vm-view-grid");

  $(".cbp-vm-switcher").addClass("cbp-vm-view-list");

});

// Create functionality for grid button.
$(".cbp-vm-grid").on('click', function() {
  // Grid Button Tracer Bullet!!!
  console.log("Grid Button Clicked!!!");

  // Remove the selected class from the list button.
  $("cbp-vm-list").removeClass("cbp-vm-selected");

  // Add the selected class to the grid button.
  $("cbp-vm-grid").addClass("cbp-vm-selected");

  // Apply the correct class to the <div> element surrounding the buttons.
  $(".cbp-vm-switcher").removeClass("cbp-vm-view-list");

  $(".cbp-vm-switcher").addClass("cbp-vm-view-grid");
  
})
