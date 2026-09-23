//comparison operators
//=== strict equal
//!== not equal

console.log(1===1);
console.log(1!==1);


let score=85;


if(score>89){
    console.log("You got an A");
}
else if(score>79){
    console.log("You have a B");
}
else if(score>69){
    console.log("You have a C");
}
else{
    console.log("You have a mediocre grade.")
}

let age=25;
let isMember=true;
if(age>=18){
    if(isMember){
        console.log("adult member benefits applied.");
    }
    else("Adult, but no membership")
}
else{
    console.log("Minor")
}

if(age>=18 && isMember){
    console.log("adult member benefits applied.");
}





//Prompt() to make website more interactive
//let score=85; is hardcoded
let score1=Number(prompt("Enter your score (0-100):"));//number is for typecasting into int/num
if(score1>89){
    console.log("You got an A");
}
else if(score1>79){
    console.log("You have a B");
}
else if(score1>69){
    console.log("You have a C");
}
else{
    console.log("You have a mediocre grade.")
}

//want website to ask user for their name, and then display hello[name]
let username=prompt("What is your name?:");
document.body.innerHTML += "<p>Hello, " + username + "!</p>";