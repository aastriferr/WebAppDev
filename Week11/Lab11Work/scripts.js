console.log("Test");



//Dark Mode Button
const DMButton = document.getElementById("darkModeID"); //find the dark mode id within the document
DMButton.addEventListener ("click", () => {
    document.body.classList.toggle("darkModeID"); //toggles darkModeID class on and off
    console.log("Theme changed!"); //creates log in console
});



//Add Items to List
const addButton = document.getElementById("addItem");//button id
const itemList = document.getElementById("itemListID");//empty list
let increment = 0;
addButton.addEventListener("click", () => {
    const newList = document.createElement("li");//adds a list element every time the button is pressed
    newList.textContent = "Count By Twos With Me!: " + increment; //basically helps the user count by twos
    itemList.appendChild(newList);//appends the new list entry into the existing list
    increment+=2;//increments by two
});



//Remove Items from list/Event delegation
itemList.addEventListener("click", (event) => { //if you clicked on the list item(not the entries but the entire ul)
    if (event.target.tagName === "LI") { //if you clicked a list entry
        event.target.remove(); // delete the list entry
    }
});



//Text update on keyboard event
const keyDisplay = document.getElementById("keyPress");//get Element By Id
document.addEventListener("keyup", (event) => { //add event listener, not add listener, also keyup activates when the key is released
    keyDisplay.textContent = "Key pressed: " + event.key;
});