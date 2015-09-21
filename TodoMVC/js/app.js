// User Stories

// I can add a task to my todo list so that I can remember to do it later.
	/* Target input element with class of 'new-todo'.
	 * Assign an event listener to the input element with class of 'new-todo'.
	 * Store user input as retrievable value.
	 * Assign the user input to nested label element inside of div element with class of 'view' which is inside the first li element in ul element.
	 * Assign unique data-id to the li element that is a numeric value.
	 * Change style display for section and footer elements to block.
	 * Create a strong element with numeric value of [current list element place] in parent span element with class of 'todo-count'.
	 * Create li elements with nested anchor tags that refer to another location within the application.
	 */

//Create an empty array to house created tasks
var taskList = [];

//Create variable to store DOM element we want to work with
var currentNewTask = document.querySelector('input.new-todo');

//Tell element captured above to listen for a 'change' event
currentNewTask.addEventListener('change', function(){
	// Tracer Bullet
	//console.log('you did something');

	// Store new task in temp variable to be printed out to the console
	var curTask = currentNewTask.value;
	console.log(curTask);
});

// I can edit a task on my todo list so that I can correct typos.
	/* Target li element.
	 * Assign an event listener to the li element that listens for the doubleclick event.
	 * Tell callback function to give targeted li element a class of 'editing'.
	 * Also have it create a new input element with class of 'edit' right before the closing parent li tag.
	 * Assign event listener to same li element that listens for a click or enter event.
	 * Tell callback function to store the edited user input within the label element the original resided in.
	 * Also have it remove the new input element with class of 'edit' and remove class of 'editing' from the targeted li element.
	 */

// I can mark a task as complete so that I remember that I have done it.
	/* Target input element with a class of 'toggle'.
	 * Assign an event listener to the input element with a class of 'toggle' that listens for a click event.
	 * Tell callback function to assign class of 'completed' to parent li element.
	 */

// I can mark a completed task as incomplete so that I actually complete it this time.
	/* Target input element with a class of 'toggle'.
	 * Assign an event listener to the input element with a class of 'toggle' that listens for a click event.
	 * Tell callback function to remove assigned class of 'completed' from parent li element.
	 * I think this could be refactored with the above user story somehow.
	 */

// I can delete a task from my todo list so that I don't have to see it any more.
	/* Target button element with a class of 'destroy'.
	 * Assign an event listener to the button element with a class of 'destroy' that listens for a click event.
	 * Tell callback function that when the button element hears the click event to erase itself and the li element in the ul element.
	 * That one seems tricky.
	 */

// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
	/* Target button element with a class of 'clear-completed'.
	 * Assign an event listener to the button element with a class of 'clear-completed' that listens for a click event.
	 * Tell callback function that when the button element hears the click event to change the display value from block to none.
	 * Also, remove all corresponding strong elements within parent span element with a class of 'todo-count'.
	 * Also, remove the anchor elements within li elements inside of the parent ul element with a class of 'filters'.
	 */

// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
	/* Target each anchor element inside of the parent li elements within their parent ul element with class of 'filters'.
	 * Assign an event listener to each anchor element targeted that listens for a click event.
	 * Tell callback function that when the each anchor element is clicked to toggle the class 'selected' to the clicked anchor element and remove it from the others.
	 */


(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// It appears that the application is set up structure wise through it's HTML file.  It's general outline is such that you have a title of todo and then a list of things that you need to complete below.  Each item (there are only two completed right now) has a 'checked' button to inidicate completion.  There are also two that can be edited but who do not have working 'checked' buttons.
	//I did not see any css files that we could review but did see two referenced in the 'link' tags.  It does not look as though any noticable stylings or layout adjustments have been made.
	//I also believe that this is the js file that will improve the functionality.  All functionality I see currently is default HTML tags.

})(window);
