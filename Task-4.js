// TASK 4
// -Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).


var userName = prompt('Enter Your Name');
let capitalized = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
alert(capitalized);