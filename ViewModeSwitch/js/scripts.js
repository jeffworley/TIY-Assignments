// Notes on what steps I think I need to take in order to code the correct actions for the ViewModeSwitch Blueprint project.

// What does it do?
/*
 * This webpage displays set groups of related information on wine in either a grid format or list format.  From what I can gather the overall structure and content of this webpage is set in the index.html file and the simple minimalist stylings are controlled by the CSS files.  The main function of the js file I hope to create will be to create the click action functions that toggle the display of the information between the grid view and list view.

// What code do I need to write?  What dom elements do I need to access and manipulate in order for the code to have it's desired effect?
/*
 * Target the anchor tags within the div element block with an id of "cbp-vm" and classes of "cbp-vm-switcher" and "cbp-vm-view-grid".
 */

/*
 * Associate the click action on the anchor element with data-view specified as "cbp-vm-view-list" and have it reassign the class "cbp-vm-selected" from the anchor element with data-view specified as "cbp-vm-view-grid" to itself.
 */

/*
 * At the same time have the clock action on the anchor element toggle of the class on the div element with id "cbp-vm" to the current view class.  In this case "cbp-vm-view-list".
 */

/*
 * Figure out how the above class change and reassignment affects the display output.
 */

/*
 * Make sure any changes can be toggled between anchor element click actions.
 */
