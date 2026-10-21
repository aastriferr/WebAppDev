console.log("Linked");

//DOM and basic manipulation
//DOM is document object model, how the browser represents your web page in memory
//HTML elements become JS objects that can be accessed, changed, or delete

//use js to change any property from html, only after the webpage fully loads



//change text content with js
//find html element via its id attribute
const title=document.getElementById("title");
//document represents the entire webpage loaded in browser
//getelementbyid finds element in html with the exact id in the paretheses
//const makes it so it always points to the same element and that it wont change

title.textContent="Welcome to my webpage!";//use oop to access text content

const attempt2 = document.getElementById("attempt2");
attempt2.textContent="It's too late for you >:)";

//selecting elements, the elements are case sensitive
//getelementbyid()- selects one element by its id
//querySelector()- selects the first match(ID, Class, tag) document.querySelector(".main")
//querySelectorAll()- returns a nodelist of all matches document.querySelectorAll("p")

//query selector
const mainSection = document.querySelector(".main");
mainSection.style.backgroundColor="#8be6d2";


//query selector all
const paragraphs = document.querySelectorAll("p");
//loop thru all p elements and change all of their text
paragraphs.forEach((para, index) => {
    para.textContent = `Paragraph ${index + 1} modified by querySelectorAll()`;
    para.style.color= "blue";
});


//adding interactivity with event listeners(java waits for user to do something to trigger event)
const button = document.getElementById('toggle');
//listen for button click
button.addEventListener("click", () =>{
    document.body.classList.toggle("highlight");
});
