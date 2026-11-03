//Click event
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
    alert("You better like dogs...");//alert for liking dogs pops up
});


//text hover
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => { //when hovered over
    hoverText.style.color = "#F00";
    hoverText.textContent = "Did you know that dogs can smell way better than humans?";
});//turn on highlight
hoverText.addEventListener("mouseout", () => { //when mouse moves off, reset
    hoverText.style.color = "#000";
    hoverText.textContent = "Hover to learn a cool dog fact!";
});//turn off highlight

//dblclick button
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
    dblBtn.textContent = `Woof!`;//change what the text says
});


//place text input into another tag
const output = document.getElementById("output");
const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {//when values are input into the input
    output.textContent = `You typed: ${textInput.value}`;//print them here
});
