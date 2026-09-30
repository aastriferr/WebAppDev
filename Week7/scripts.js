//Loops
//while loop
let count=0;
while(count<=5){
    console.log("Count is: " + count);
    count++;
}

//for loop

for(let i=0; i<=5; i++){
    console.log("Count is: " + i);
}

//for with prompt
let num=Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log(i);
}


//triangle loop pattern
let triangle="";
for(let line=1; line<=7; line++){
    triangle+="O";
    console.log(triangle);
}