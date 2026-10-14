//JS is top down language, define functs first
//function
function greetUser(){
    console.log("Hi");
}

greetUser();//called


function greet(name){
    console.log("Hello " + name);
}

greet("VR"); //vr is arg, name is parameter


function addition(x, y){
    z = x + y;
    console.log(z);
    return(z);//used in line 24 total
}

let total = addition(5,3);
console.log("The total is: " + total);


function multNum(x,y){
    z= x * y;
    console.log(z);
    return(z);
}
let result=multNum(15,3);
console.log(result);



function count5(num){
    for(let i=1; i<=num; i++){
        console.log(i);
    }
}

count5(5);

//nested
function square(num){
    return num*num;
}
function printSquare(sqNum){
    console.log("Square is: " + square(sqNum));
}

printSquare(15);

function username(){
    let name=prompt("What is your name?: ");
    console.log("Welcome, " + name);
}

username();