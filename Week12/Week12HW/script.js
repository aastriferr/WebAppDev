//page variables
const form = document.getElementById("signup");
const result = document.getElementById("results");




//form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh upon submission

    //form variables
    const fName = document.getElementById("fName").value;
    const lName = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const marketing = document.getElementById("marketing").value;
    const discovery = document.getElementById("discovery").value;

    // print form results on screen
    result.innerHTML = `
      <h3>Your submission:</h3>
      <p><strong>First Name:</strong> ${fName}</p>
      <p><strong>Last Name:</strong> ${lName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Marketing Emails?:</strong> ${marketing}</p>
      <p><strong>How you discovered us:</strong> ${discovery}</p>
      <p><strong>Other:</strong> ${message}</p>
    `;
});


result.addEventListener("mouseover", () => { //when hovered over
    result.style.color = "#00F";
});//turn on highlight
result.addEventListener("mouseout", () => { //when mouse moves off, reset
    result.style.color = "#F00";
});//turn off highlight