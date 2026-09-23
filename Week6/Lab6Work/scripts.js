let score=Number(prompt("Give me your last test score(0-100):"));
if(score>89){
    console.log("A!");
}
else if(score>79){
    console.log("B!");
}
else if(score>69){
    console.log("C.");
}
else{
    console.log("F.")
}

let age=Number(prompt("How old are you?:"));
if(age>=18){
    console.log("Adult.")
} else {
    console.log("Minor.")
}

//simple prompt, added ors because i didnt bother to look up if upper/lower existed
let choice=prompt("Pick a letter between A, B, C, or D:");
if(choice==="A" || choice==="a"){
    console.log("You picked A");
} else if(choice=="B" || choice==="b") {
    console.log("You picked B.");
} else if(choice==="C" || choice==="c") {
    console.log("You picked C.");
} else if(choice==="D" || choice==="d") {
    console.log("You picked D.");
} else {
    console.log("You didn't pick any of the options, you nerd.");
}