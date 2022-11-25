foo = 3; // We are assigning a value to foo but foo has not been declared yet. The value type is number.
bar = false; //The same is happening here, we are assigning a value without declaring the variable. bar value is a boolean type.
/* I would improve this by adding a 'let' keyword before the variable name if this variable will be accessed later (foo is being accessed later)
or const if the variable will not be accessed or changed later (bar seems not to be accessed or changed later).
*/
const everyday = new Date(); //every day has been assigned the Date that the machine/browser has at the moment that it ran.
// This value is a constant which means it cannot be changed later on while on runtime.
 
if (foo == 'three') {
 /* The if statement is checking if foo is a string 'three'.
 which if we assume I declare foo this way > "let foo = 3;" that means that this condition will not be met until the value changes to match it, either by reassigning on runtime or by changing the value here.
 But javascript has a conditional which could introduce bugs. Ex. We are using the conditional "foo == 'three' ".
 If we changed the conditional to check a string number ie. "foo == '3' " this will equal to true even though we have assigned 3 as a number type, not a string type.
 That is because the "==" does not check for type safety which could lead to some potential bug or unintended behavior. So I would change the conditional to use
 the "===" which does check for type safety making sure that a number matches only other numbers and not some string numbers.
 */
   var obj = {
       hello: 123,
       world: 456
   }; // var I would change to const because var is just outdated and it is considered good practice to not use it unless it is mandatory.
   // to expand var could introduce some unintended consequences such as values changing or values create within this if statement leaking to the global function.
   // This is bad because if it is important information that means that all the functions of the program have access to it and can also change it which is not good.
 
   // This code is going to run until it reaches the length of obj which is 2
   for (let i = 0, i < obj.length; ++i) {
     // Everything within this loop will run until the condition has been met. 🔝🔝
       document.appendChild(document.createElement('div')); // ⬅️ This line will create a div on the HTML while the loop is running.
       document.getElementById('xyz').style.border = '1px solid #000'; // ⬅️ This will get the element with Id xyz and add a border of 1 pixel and black color.
       document.getElementById('xyza').style.color = 'white'; // ⬅️ This line will turn the text color to white of the element Id xyza.
       document.getElementById('xyzab').style.marginTop = '160px'; // ⬅️ This line will add a margin-top of 160 pixels to the element Id xyzabc.
       document.getElementById('xyzabc').style.border = '1px solid #123'; // ⬅️ This line will add a border around the element Id xyzabc of 1 pixel.
       while (child.nodeName() !== 'span' && (p = child.parentNode)); // ⬅️ This line will consume a lot of memory because it will run indefinitely unless we add a span somewhere within the HTML
       // or better define while loop. Also, I do not know what it is that this does.
       // Because it checks for a child of nodeName ?? which is not a span and for a paragraph which is a child of the parent node.
       // This line might be the one that could cause the most trouble because some code injection could just come and say that it is the nodeName that is missing.
       foo = obj[multiply(i, i - 3)]; // Here foo is being reassigned to a value of an obj which would be multiplied. But there is a bug here.
   }
}
const multiply = (x, y) => x * y; // This needs to return/output the result after the multiplication.
 
 
////////////////////////////////////////////////
 
/* Closure, in computer programming, is an interesting concept about which many people are not quite clear.
Could you please briefly describe, in plain English, what a closure is?
Could you please show and explain to us briefly, with simple code examples (in JavaScript),
how closure can be applied to the following case:
1.  Currying.
 
A. What is a closure? A closure is a nested function. A function within another function.
         A function that has a main / parent function and a child / secondary function within it.
B. Closure Currying description.
function currying(f) 
*/
// This is a simple curried function.
// closure is implemented in this function with the separation of the functions arg(a) and arg(b) within the currying function arg(f).
function currying(f) { // this function is doing the transformation of the other two functions
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// here is a simple function using the transformed functioned to multiply two numbers
function multiply(a, b) { 
  return a * b;
}

let multiCurry = currying(multiply); // calling my currying function and including an argument of another function with two more arguments

// Console logging the the multiplication done after multiCurry is output. multiCurry is equal to currying function with argument of multiply function.
console.log(multiCurry(2)(3)); // result 6
 
/*
Can you tell us why the following Javascript code doesn’t work correctly?
How would you fix it?
*/



 
 
/*
This code is a closure that has the main function called count and the anonymous function that console log the counter value after 100ms.
I am assuming that the expected result is for the console log function to print out every element that is traversing through ie. 0, 1, 2 in this case.
The reason it does not work properly is because the set timeout function waits for the breakpoint of the for loop which is 3 elements and then proceeds to print them all at once
given us the entire value that the counter is holding on to in memory which is 3, instead of printing each of those values.
 
The way to fix this is by moving the delay function out of the for loop so that the breakpoint of the for loop does not interfere with the timeout function delay.
After moving/separating these two we can then include a callback of the timeout function and the counter into the loop for the for loop to know what it is that
it needs to print each time it is traversing through it.
 
*/
// Original Function
function count() { // Main function
 let counter;
 for (counter = 0; counter < 3; counter++) { // for loop
     setTimeout(function () { // set timeout anonymous function
         console.log('counter value is ' + counter); // print out / console log plus delay time of 100 ms
     }, 100);
 }
}
count(); // function call
 
// Modified function
function count() { // Main function
 let counter;
 for (counter = 0; counter < 3; counter++) { // for loop
   delay(counter) // Callback function
         }
   function delay(counter) { // delay function
     setTimeout(() => {  // set timeout annonymous function
       console.log('counter value is ' + counter)}, 100); // print out / console log plus delay time of 100 ms.
   }
       }
count(); // function call

