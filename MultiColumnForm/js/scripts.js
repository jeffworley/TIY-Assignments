/*
// Assign variables that allow us to access each form element.
var firstName = document.getElementById('first_name');
var lastName = document.getElementById('last_name');
var email = document.getElementById('email');
var country = document.getElementById('country');
var bio = document.getElementById('bio');
var phone = document.getElementById('phone');
var affiliations = document.getElementById('affiliations');
var occupation = document.getElementById('occupation');
var catName = document.getElementById('cat_name');
var gadget = document.getElementById('gadget');
var talent = document.getElementById('talent');
var drink = document.getElementById('drink');
var power = document.getElementById('power');
var weapon = document.getElementById('weapon');
var comments = document.getElementById('comments');
var submitBtn = document.querySelector('.cbp-mc-submit');
*/

// Create variables to store the input of each form element in.
var firstNameInput = "empty";
var lastNameInput = "empty";
var emailInput = "empty";
var countryInput = "empty";
var bioInput = "empty";
var phoneInput = "empty";
var affiliationsInput = "empty";
var occupationInput = "empty";
var catNameInput = "empty";
var gadgetInput = "empty";
var talentInput = "empty";
var drinkInput = "empty";
var powerInput = "empty";
var weaponInput = "empty";
var commentsInput = "empty";

// When input elements are altered, assign that value to the specified variable.

$("input[name='firstName']").change(function() {
  // Tracer Bullet!!!
  console.log("Made edit in first name!!!");

  // Capture input of firstName.
  firstNameInput = this.value;

});

$("input[name='lastName']").change(function() {
  // Tracer Bullet!!!
  console.log("Made edit in last name!!!");

  // Capture input of lastName.
  lastNameInput = this.value;

});

$("input[name='email']").change(function(){
  emailInput = this.value;
});

$("input[name='phoneNumber']").change(function(){
  phoneInput = this.value;
});

$("input[name='catsName']").change(function(){
  catNameInput = this.value;
});

$("input[name='favoriteGadget']").change(function(){
  gadgetInput = this.value;
});

$("input[name='favoriteDrink']").change(function(){
  drinkInput = this.value;
});

$("input[name='specialPower']").change(function(){
  powerInput = this.value;
});

$("input[name='weaponOfChoice']").change(function(){
  weaponInput = this.value;
});

// When textarea elements are altered, assign that value to the specified variable.

$("textarea[name='biography']").change(function(){
  bioInput = this.value;
});

$("textarea[name='affiliations']").change(function(){
  affiliationsInput = this.value;
});

$("textarea[name='comments']").change(function(){
  commentsInput = this.value;
});

// When select elements are altered, assign that value to the specified variable.

$("select[name='country']").change(function(){
  countryInput = this.value;
});

$("select[name='occupation']").change(function(){
  occupationInput = this.value;
});

$("select[name='typeOfTalent']").change(function(){
  talentInput = this.value;
});

// Log the value of all variables to the console when submit button is clicked and prevent page refresh.

$("button[name='submit']").click(function(){
  event.preventDefault();
  console.log("First Name: ", firstNameInput);
  console.log("Last Name: ", lastNameInput);
  console.log("Email Address: ", emailInput);
  console.log("Country: ", countryInput);
  console.log("Biography: ", bioInput);
  console.log("Phone Number: ", phoneInput);
  console.log("Affiliations: ", affiliationsInput);
  console.log("Occupation: ", occupationInput);
  console.log("Cat's Name: ", catNameInput);
  console.log("Favorite Gadget: ", gadgetInput);
  console.log("Type of Talent: ", talentInput);
  console.log("Favorite Drink: ", drinkInput);
  console.log("Special Power: ", powerInput);
  console.log("Weapon of Choice: ", weaponInput);
  console.log("Comments: ", commentsInput);
});

/*
// Assign event listeners for each form element to grab the input when it hears the change event.
firstName.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  firstNameInput = firstName.value;
  // Print the new value assigned to the form element input variable out to the console.
  //console.log(firstNameInput);

});

lastName.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  lastNameInput = lastName.value;
  // Print the new value assigned to the form element input variable out to the console.
  //console.log(lastNameInput);

});

email.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  emailInput = email.value;
  // Print the new value assigned to the form element input variable out to the console.
  //console.log(emailInput);

});

country.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  countryInput = country.value;
  // Print the new value assigned to the form element input varibale out to the console.
  //console.log(countryInput);

});

bio.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  bioInput = bio.value;
  // Print the new value assigned to the form element input variable out to the console.
  //console.log(bioInput);

});

phone.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  phoneInput = phone.value;

});

affiliations.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  affiliationsInput = affiliations.value;

});

occupation.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  occupationInput = occupation.value;

});

catName.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  catNameInput = catName.value;



});

gadget.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  gadgetInput = gadget.value;

});

talent.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  talentInput = talent.value;

});

drink.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  drinkInput = drink.value;

});

power.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  powerInput = power.value;

});

weapon.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  weaponInput = weapon.value;

});

comments.addEventListener('change', function(){

  // Tracer bullet message.
  //console.log("Made an edit");

  // Assign the user input to the form element input variable I created.
  commentsInput = comments.value;

});
*/

submitBtn.addEventListener('click', function(){

  // Tracer bullet message.
  //console.log("Information submitted!"); // Why does this only flash the information to the console?

  // Print out the user inputs to all the form elements at once when the submitBtn hears the click event.
  console.log("First Name: ", firstNameInput);
  console.log("Last Name: ", lastNameInput);
  console.log("Email Address: ", emailInput);
  console.log("Country: ", countryInput);
  console.log("Biography: ", bioInput);
  console.log("Phone Number: ", phoneInput);
  console.log("Affiliations: ", affiliationsInput);
  console.log("Occupation: ", occupationInput);
  console.log("Cat's Name: ", catNameInput);
  console.log("Favorite Gadget: ", gadgetInput);
  console.log("Type of Talent: ", talentInput);
  console.log("Favorite Drink: ", drinkInput);
  console.log("Special Power: ", powerInput);
  console.log("Weapon of Choice: ", weaponInput);
  console.log("Comments: ", commentsInput);

});
