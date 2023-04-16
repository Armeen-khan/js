// TASK 6
// -Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


const products = ['Keyboard', 'Mouse', 'Mouse pad', 'Printer', 'Scanner', 'Computer', 'CPU'];
const indexToRemove = prompt(`Total Products: \n${products} \nEnter the index of the product to remove (0 - ${products.length - 1}):`);
const removedItem = products[indexToRemove];
products.splice(indexToRemove, 1);
console.log(`Removed item: ${removedItem}`);
console.log(`Remaining items: ${products.join(', ')}`);
console.log(`Total items remaining: ${products.length}`);
