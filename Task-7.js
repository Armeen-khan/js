// TASK 7
// -Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

var nationality = prompt("Enter Your Nationality")

if(nationality == 'Pakistani' || nationality == 'Indian' ){
    var Gender = prompt("Enter Your Gender")
    var age = +prompt("Enter Your Age")
}
else{
   alert('You are not eligible to vote')
}
if(Gender == 'male' && age >='18'){
    alert('YOU ARE ELIGIBLE TO VOTE')
}
else if(Gender == 'female'){
    var martialstatus = prompt("Are You Married?")
}
if(martialstatus == 'Yes' || martialstatus == 'yes'){
    alert('YOU ARE ELIGIBLE TO VOTE')
}
else{
    alert('You are not eligible to vote')
}
