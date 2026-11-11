console.log("Linked");


//get variables
const form = document.getElementById("contactForm");
const nameBlur = document.getElementById("name");
const emailBlur = document.getElementById("email");
const phoneBlur = document.getElementById("phone");


//email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/*
    after some research as well as looking at it, i think i understand it
    the first and last forward slash function as quotes do in strings, encasing the data
    
    the first carat marks the beginning of the pattern
    
    the first block: [^\s@]+  disallows any whitespace(/s) or @ character(@), and allows
    multiple characters(+)

    the @ requires the @ symbol to follow the character in the first block

    the second block: [^\s@]+  functions the same way as the first block, denying whitespace
    and the @ but allowing multiple characters

    the \. requrires the . symbol to follow the second block(the period symbol had to be 
    escaped, most likely because it would be incorrectly used as some form of syntax
    similar to escaping characters in linux)

    the third and final block: [^\s@]+ functions the same as the other two

    the dollar sign marks the end of the pattern

    so basically, the pattern is
    [1+ characters no whitespace or at]@[1+ characters no whitespace or at].[1+ characters no whitespace or at]
*/
/* 
    test for regex phone number:
    exact digit length(according to internet): \d{(num of digits)}
    /^[\d{3}]-[\d{3}]-[\d{4}]$/
    this broke, the container was the issue
    new, working pattern: /^\d{3}-\d{3}-\d{4}$/

    i did look up regex patterns for phone numbers after doing this one myself
    and they are very, very complicated, so I kept my simple one
*/
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

//blur event listeners
nameBlur.addEventListener("blur", ()=> {
    //variables
    const name=document.getElementById("name").value;
    const nError=document.getElementById("nError");
    
    //logic
    if(name.trim()===""){//if value is nothing
        nError.textContent = "Please enter a name in the name field.";
    } else { //else, clear message
        nError.textContent = "";
    }
});
emailBlur.addEventListener("blur", ()=> {
    //variables
    const email=document.getElementById("email").value;
    const eError=document.getElementById("eError");
    
    if(!emailPattern.test(email)){//if value doesnt follow pattern
        eError.textContent = "Your email formatting is incorrect.";  
    }
    if(email.trim()===""){//if value is nothing
        eError.textContent = "Please enter an email in the email field."; 
    } else if(emailPattern.test(email)) { //if email does follow pattern, clear code
        eError.textContent = "";
    }//i did attempt a blanket else originally but it overrides the pattern test fail message
});
phoneBlur.addEventListener("blur", ()=> {
    //variables
    const phone=document.getElementById("phone").value;
    const pError=document.getElementById("pError");
    
    if(!phonePattern.test(phone)){//if value doesnt follow pattern
        pError.textContent = "Your phone number formatting is incorrect.";  
    }
    if(phone.trim()===""){//if value is nothing
        pError.textContent = "Please enter an phone number in the email field."; 
    } else if(phonePattern.test(phone)) { //if phone does follow pattern, clear code
        pError.textContent = "";
    }
});




//form submit listener
form.addEventListener("submit", function(event) {
    event.preventDefault();//prevent refresh


    //variables from the document
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const validation = document.getElementById("validation");


    //variable delcaration/reset
    let nameBool = false;
    let emailBool = false;
    let phoneBool = false;
    nameError.textContent="";
    emailError.textContent="";
    phoneError.textContent="";
    validation.innerHTML = ``;

    //value testing, if it passes checks set related  bool to true
    if(name.trim()!==""){//if value isn't empty, set bool to true
        nameBool = true;
    }
    if(email.trim()!=="" && emailPattern.test(email)){//if value isnt empty and respects the pattern
        emailBool = true;
    }
    if(phone.trim()!=="" && phonePattern.test(phone)){//if value isnt empty and respects the pattern
        phoneBool = true;
    }

    //if either boolean is not true, display error
    //if both are true, display submission message
    //this code block is AI assisted, explained more below
    if (!nameBool) {
        nameError.textContent = "Please enter a name in the name field.";
    }
    if (!emailBool) {
        if(!emailPattern.test(email)){
            emailError.textContent = "Your email formatting is incorrect.";  
        }
        if(email.trim()===""){
            emailError.textContent = "Please enter an email in the email field."; 
        }
    }
    if (!phoneBool) {
        if(!phonePattern.test(phone)){
            phoneError.textContent = "Your email formatting is incorrect.";  
        }
        if(phone.trim()===""){
            phoneError.textContent = "Please enter an email in the email field."; 
        }
    }
    if (nameBool && emailBool && phoneBool) {
        validation.innerHTML = "Submitted!";
        
        //clears all data in form
        form.reset();
    }

    /* 
        This code below was my written code, and I had submitted it to find the errors
        (I had used commas instead of comparison operators like a dummy, couldnt figure out
        why it was broken because it was actually working, just broke some logic when submitting twice
        which really confused me)
        But AI pointed out the answer, changed my the commas to && for one answer,
        and then suggested a cleaner alternative by breaking the if statements,
        which I decided to use above.

        if(nameBool, emailBool){
            nameError.textContent = "";
            emailError.textContent = "";
            validation.innerHTML = `Worked!`;
        } else if (nameBool, !emailBool) {
            validation.innerHTML = ``;
            emailError.textContent = "Please enter an email in the email field.";
        } else if (!nameBool, emailBool) {
            validation.innerHTML = ``;
            nameError.textContent = "Please enter a name in the name field.";
        } else {
            console.log("Both values false");
        }


        this was the AI's code version:
        if (!nameBool) {
            nameError.textContent = "Please enter a name in the name field.";
        }
        if (!emailBool) {
            emailError.textContent = "Please enter an email in the email field.";
        }
        if (nameBool && emailBool) {
            validation.innerHTML = "Worked!";
        }

    */
});