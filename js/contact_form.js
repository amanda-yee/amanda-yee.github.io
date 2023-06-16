function validateForm() {
	var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    
    // Set error messages to blank before validating so that existing messages do not remain on page
    const errorTags = ["name-error", "email-error", "message-error"]; 

    for (let tag of errorTags){
        document.getElementById(tag).innerHTML = '';
    }

    errorCount = 0 
    // Validate user inputs
    // Validate name
    if (name.value.length == 0) {
        document.getElementById('name-error').innerHTML = "Name must not be blank.";
        name.classList.add("error");
        errorCount += 1;
    } else if (name.value.length < 2) {
        document.getElementById('name-error').innerHTML = "Name must be at least two (2) characters.";
        name.classList.add("error");
        errorCount += 1;
    } else if (!(/^[a-zA-Z\s]+$/.test(name.value))) {
        document.getElementById('name-error').innerHTML = "Name must only contain letters of the alphabet (a-z, A-Z).";
        name.classList.add("error");
        errorCount += 1;
    } else {
        name.classList.remove("error");
    }
    // Validate email
    if (email.value.length == 0) {
        document.getElementById('email-error').innerHTML = "Email must not be blank.";
        email.classList.add("error");
        errorCount += 1;
    } else if ((!email.value.includes('@')) || (!email.value.includes('.'))) {
        document.getElementById('email-error').innerHTML = "A valid email must contain '@' and '.'";
        email.classList.add("error");
        errorCount += 1;
    } else {
        email.classList.remove("error");
    }
    // Validate message
    if (message.value.length == 0) {
        document.getElementById('message-error').innerHTML = "Message must not be blank.";
        message.classList.add("error");
        errorCount += 1;
    } else if (message.value.length < 10) {
        document.getElementById('message-error').innerHTML = "Message must be at least ten (10) characters.";
        message.classList.add("error");
        errorCount += 1;
    } else {
        message.classList.remove("error")
    }

    if (errorCount == 0) {
        alert("Thank you for your message!")
        return true;
    } else {
        return false;
    }
}