// Select the form and result section
const form = document.getElementById("indexForm");
const result = document.getElementById("results");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const lab = document.getElementById("lab").value;

    // Display the info back to the user
    result.innerHTML = `
      <h3>Your submission:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Did you like the lab?:</strong> ${lab}</p>
    `;
});



//questions
//IDs allow you to reference and edit a specific element.
//Script must be at the end of body to allow the entire page to load, unless
//you use defer.

//event.preventdefault prevents the page from reloading when the submit button is pressed.
//.value returns the actual value of the element and not just the element itself
//Template literals are better because they preserve formatting and function similarly to f strings,
//which makes them easier to use over concatenation.