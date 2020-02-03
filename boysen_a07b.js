/*
Bill Boysen
boysen_a07b.js
INFO_2124_WW
Thoendel
2/2/2020
*/

/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer", "cheese", "milk", "pizza");        

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    //Checks for Q or q to initiate quit sequence
    if (text == "q" || text == "Q") {
        clearScreen();
        console.log("Bye");
        process.exit();
    //Checks for V or v to display the grocery list
    } else if (text == "v" || text == "V") {
        clearScreen();
        displayList(groceryItems);
        console.log(getPrompt());
    } //This will execute if the quit sequence or display sequence aren't engaged and will determine if the input is good food or bad food
    else {
        clearScreen();
        //check the input against the bad food list and adds it to the grocery list if it isn't
        if (checkItem(text, badFoods) == false) {
            groceryItems.push(formatItem(text));
            let msg = `Item added to list!

List contains ${groceryItems.length} items
Please enter a grocery item.
Enter Q to quit
Enter V to view list
=========================`;
            console.log(msg);
        } //rejects input from the bad food list
        else {
            let msg2 = `Error: that item is not safe for your allergies
It has not been added to your list.
        `;
        console.log(msg2);
        console.log(getPrompt());

        }
    }

    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
//Cycles through the amount of arguments and uses them to populate a bad foods list
function buildFoodsList() {
    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            badFoods.push(arguments[i]);
        }
    }
}
//Displays a message showing the amount of items on the grocery list by counting the amount of items in that array
function getPrompt() {
let numberOfItems = groceryItems.length;
let msg = `Your grocery list contains ${numberOfItems} items
Please enter a grocery item.
Enter Q to quit
Enter V to view list
=========================`;
return msg;
}

//Step 3
//Compares the input to all items on the bad foods list and returns true or false based on the results
function checkItem(text, ) {
let check = 0;
    for (let i = 0; i < 6; i++) {
        let badFoodToLower = badFoods[i];
        if (text == badFoodToLower) {
            check = 1;
        }
    }
    if (check == 1) {
        return true;
    } else {
        return false;
    }  
}
//Displays a list of all items on the grocery list
function displayList() {
    let msg = `Grocery List
(${groceryItems.length} items)
====================`;
console.log(msg);
for (i =0;i< groceryItems.length; i++) {
    let listNumber = i + 1;
    console.log((listNumber) +".) " + groceryItems[i]);
}
console.log("\n");
}
//Formats input text to desired format. NOTE: I was unable to get this functional. :(
function formatItem(x) {
let toFormat = x;
toFormat.trim();
toFormat.toLowerCase();
toFormat.charAt(0).toUpperCase();
return toFormat;
}
/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}