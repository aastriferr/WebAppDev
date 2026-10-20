//all standard stuff, the only real interesting thing is the backwards triangle 
//only because it's stuff we haven't messed with too much in JS


//encasing functions, basically make a little border or separator
function printTri(){
    let tri="";
    for(let line=1; line<=10; line++){
        tri+="*";
        console.log(tri);
    }
    console.log();
}
function printTriBW(){
    let tri="**********";
    for(let line=tri.length; line>=0; line--){
        console.log(tri);
        let triBW = tri.slice(0, -1);//wanted to make backwards triangle, saw this was the easiest way
        tri=triBW;
    }
    console.log();
}



//addition functions
function add2Num(num1, num2){
    return num1+num2;//a function that adds 2 user numbers and can be used anywhere
}
function addAndMult(add, num1, num2){//prints the user add and multiply values as equations
    console.log(num1 + " + " + num2 + " = " + add);
    console.log(num1 + " X " + num2 + " = " + (num1*num2));
}

//variables
let number1 = Number(prompt("What is the first number?: "));
let number2 = Number(prompt("What is the second number?: "));


//functions being called
printTri();
addAndMult(add2Num(number1, number2), number1, number2);
printTriBW();