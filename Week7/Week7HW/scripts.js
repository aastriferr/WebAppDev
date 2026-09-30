//TASK 1
let count=0;
while(count<=10){ //I used a while for the first task as it is fairly simple
    console.log("Current Number: " + count);
    count++;
}

//TASK 2
let num=Number(prompt("Enter a number: "));
for(let i=1; i<=num; i++){ //this should start at 1 and increment until it hits the entered number
    console.log(i);
}


//TASK 3
let triangle="";//starts out blank
for(let line=1; line<=20; line++){
    triangle+="#";//the triangle string simply gets appended to each iteration of the loop
    console.log(triangle);
}