// Test code and try out examples here
function afterClicked(event) {
    // Look up the first name input
    let firstNameInput = $("#fname");

    // Get the user's first name value
    let userFirstName = firstNameInput.val();

    // Log the user's first name to the console
    console.log("The user's first name is: " + userFirstName); // The user's first name is: John
}

// Look up the target element
var logButton = $("#log-button");

// Listen for clicks on logButton, and call our listener function when they happen.
logButton.on("click", afterClicked);
