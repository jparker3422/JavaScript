// create the array
var emptyArray = [];
var shoppingList = ['Milk', 'Bread', 'Beans'];

// delete lines without ; before running
// used to look at variables with quokka
shoppingList
console.log(shoppingList[0]);

// add into the array
shoppingList[3] = 'Cookies';
shoppingList

// find the number of elements in the array
shoppingList.length;
console.log(shoppingList.length);

// can use push and pop methods to add and remove elements
// from the end of the array
shoppingList.push('Chips');
shoppingList

shoppingList.pop();
shoppingList

// iterate over an array
for (var i = 0; i < shoppingList.length; i++) {
    var groceries = shoppingList[i];
    console.log(groceries);
}