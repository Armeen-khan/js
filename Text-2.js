// TASK 2
// -calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

var familyMembers = +prompt("Family Members"); 
var method = prompt('Insert Fitrah method: "Wheat flour","Barley","Dates","Raisins"'); 
var rate = 0;
var result = 0;

if(method == "Wheat flour"){
    rate = 125;
    result = familyMembers * rate;

}
else if(method  == "Barley"){
    rate = 400;
    result = familyMembers * rate;
}
else if(method  == "Dates"){
    rate = 2000;
    result = familyMembers * rate;
}
else if(method  == "Raisins"){
    rate = 2400;
    result = familyMembers * rate;
}
else{
    result = "Please define correct method";
}
alert("Your Fitrah is: "+ result); 