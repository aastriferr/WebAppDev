//function 1
function greetUser(name){
    console.log("Hello, " + name + "!");
}

let username = prompt("What is your name?: ");
//simple call
greetUser(username);


//function 2
function addNumbers(x,y){
    return(x+y);
}
let num1=5;
let num2=7;
//simple call within a console log
console.log(num1 + " + " + num2 + " = " + addNumbers(num1,num2));

//function 3(I used more functions for fun)
function calculateArea(l, w){
    //console.log(l + " X " + w + " = " + (l*w) + ". Your area is " + (l*w) + "!");
    return(console.log(l + " X " + w + " = " + (l*w) + ". Your area is " + (l*w) + "!"));//this is probably very poor formating, surprised to see it worked though
}
function promptL(){
    //instead of prompting for a variable and returning the variable, simply return the prompt itself
    return(prompt("What is the length of your rectangle?: "));
}
function promptW(){
    //instead of prompting for a variable and returning the variable, simply return the prompt itself
    return(prompt("What is the width of your rectangle?: "));
}
//area calls promptL and promptW
calculateArea(promptL(),promptW());//the prompt functions are thrown into the area function