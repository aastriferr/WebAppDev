//console.log("") is print
let firstName="V"; //string text
let lastName="R";
let math1=68;
let math2=21; //num/int
const isFalse=false; //boolean
let total=59;

console.log(firstName, lastName, isFalse);
console.log(firstName + "ictoria " + lastName + "iley")

console.log(math1+math2);
console.log(math1-total);

let first="Hello";
let second = "World!";
console.log(first + " " + second);




document.body.innerHTML += "<p align='center'>Words in this Webpage: " + total + "</p>";
/*  From my research, it seems that the code above is meant to add a paragraph
    tag to the very end of the body tag, which is then used to display the value of
    total. To me it seems very clear that it should go in here, because the 
    command gains correct color and it's also in OOP format, as well as containing
    the semicolon at the end, which marks it as JS. Originally though, it didn't work. 
    I put it both in this document, the html, and I also tried putting it between
    the script tags in index.html and it did nothing. When it was in this document,
    it returned in error in the console. It said:
         'Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')'.


    After researching for a little, it seemed that the Javascript is loading before the
    webpage, which was returning a null value. The easiest fix for the issue was adding the 
    word 'defer' into the script tag, which basically tells the javascript to wait 
    until the HTML is finished loading. This worked.
    
    I dont know if this was an intentional error for us to figure out, or if it's just some oddity
    my computer experienced. But the code now runs as expected.
    I also chose to add some inline CSS to make it look better(honestly surprised it worked) :)*/