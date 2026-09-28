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
    I also chose to add some inline CSS to make it look better(honestly surprised it worked) :)
*/




//WEEK 6 HOMEWORK MATERIAL
console.log("PART 2 BEGINS HERE.")
//hours per day, if you're a nerd, if you've been to a concert
let hpd = Number(prompt("How many hours do you listen to music per day?Please Type a Number."));
let nerd = prompt("Have you listened to any of the bands I listed? Answer 'Yes' or 'No'.");
let concert = prompt("Have you ever gone to a concert before? Answer 'Yes' or 'No'.");
//these variable exists because I'm lazy and use it for the second set of conditionals
let vHabits = false;
let negativeHPD = false;


//judging your listening habits
if(hpd > 8){//8+
     console.log("Are your ears ok?");
} else if (hpd <=2 && hpd >= 0){//0-2
     console.log("That's about how much I listen if I spend the day alone.");
     vHabits=true;//set to true for next conditional
} else if (hpd <= 4 && hpd >= 0) {//2-4
     console.log("You certainly like music, and hopefully you don't blast your music too loud.");
} else if (hpd <= 6 && hpd >= 0) {//4-6
     console.log("A bit more than I listen to normally, unless I have a long drive.");
}else if (hpd <= 8 && hpd >= 0) {//6-8
     console.log("You certainly are an Audiophile.");
}else if (hpd < 0) { //Negative
     console.log("How does one listen to negative music per day?");
     negativeHPD = true;//set to true for next conditional
} else {//if your input wasn't a number
     console.log("Someone doesn't know how to input numbers or the developer made a mistake.");
}

//how similar your music tastes/habits are to mine
if( vHabits && nerd === "Yes" && concert === "Yes"){ //this could've been nested, but I didn't really want to do that
     console.log("You are too much like me. Nerd.");//If you have my listening habits
} else {
     if(hpd > 2){//if you listen to too much compared to me
          console.log("You and I are similar, but you listen to a lot more music.");
     }else if(negativeHPD){//negative input for hpd
          console.log("You somehow listen to negative music, but we have similar tastes I guess?");
     } else if (nerd === "No") {//if we don't have similar tastes
          console.log("You're like me, but probably a lot more cultured.");
     } else if (concert === "No") {//if you've never been to a concert
          console.log("You should really try to go to concerts sometime.");
     } else {//if you ended up here, my coding is either incorrect or you input something incorrectly
          console.log("You didn't follow the instructions for input, did you?");
     }
}

if(concert === "Yes"){//This is here to make sure that I meet the 3 conditionals, in case if everything above did not
     console.log("Cool! You should tell me about it in class.");
}