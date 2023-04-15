
// TASK 5
// -In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.

var ContactsNo = []
var ContactName = []

for (var i =0 ; i<3 ; i++)
{
    var CNo = prompt('Enter Contact No.')
    var CName = prompt('Enter Contact Name')
     

    ContactsNo.push(CNo)
    ContactName.push(CName)
}

console.log(ContactsNo)
console.log(ContactName)