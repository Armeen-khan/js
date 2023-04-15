// TASK 3
// -Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.


var secretNumber = 5;
var guessNumber = +prompt("Guess number between 0 to 10");

if(secretNumber == guessNumber){
    alert("Congratulations! You guessed the secret number")
}
else if(guessNumber == 6){ 
    alert("Too Close!!")
}
else if(guessNumber == 4){ 
    alert("Too Close!!")
}
else{
    alert("Try again!")
}