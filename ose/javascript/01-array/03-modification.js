let shoppingList = [ 'Cheddar Cheese', '2% Milk' ];

//To change 2% Milk to Whole Milk
shoppingList[1] = 'Whole Milk';

//To add Ice Cream to the end
//Only works if array is 2 items long...
shoppingList[2] = 'Ice Cream';

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';
