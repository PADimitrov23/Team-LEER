 // UI Elements
// using  document.querySelector() you can select your HTML element like CSS selector.
// select HTML element and store in variable
var output = document.querySelector('#friend-output');
var input = document.querySelector('#friendName');
var form = document.querySelector('#new-friend');

// adding Form Submit event
// using addEventListener() to add a event like click, keypress, mouseover etc...
// It takes 2 parameter, first parameter is the event name that we are using 'submit', and the second parameter is a Function reference or callback function. we are using callback function.
form.addEventListener('submit', function (e) {
  // Stop default Form submit behavior
  e.preventDefault();

  // Create new LI Element
  // here is an interesting thing. we are creating a HTML element with class of "list-group-item" like a String text. Inside the LI we are just concating the input value. 
  var li = '<li class="list-group-item">' + input.value + '</li>';
  
  // Insert LI into the output
  // Finally we are just puting the LI to the output variable.
  // insertAdjacentHTML() takes to parameter. first is where to insert, and second is what element should insert.
  // in the first parameter you can use 'beforebegin' if you want.  
  output.insertAdjacentHTML('afterbegin', li);

  // Clear input  value after submit
  input.value = '';
});

// If you don't understand any of the method, just search Google, read some article and try to understand.