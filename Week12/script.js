console.log("linked");


// const form=document.getElementById("contactForm");
// //create event listener for submit event
// form.addEventListener("submit", function(event){
//     event.preventDefault();//stops the page from reloading upon submission of form
//     //get input value

//     const name=document.getElementById("name").value;//grabs the actual value


//     //in the console, state hello "username"
//     console.log("Hello ", name);
// });


const result=document.getElementById("contactForm");
result.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;

    result.innerHTML=`<p>Welcome, ${name}! Thanks for submitting! </p>`;

});