function validateForm(event) {
    // prevent the default behavior of the event

    event.preventDefault();

    // Get references to the input fields with the IDs 'name', 'email', and 'message'
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Clear any existing error messages on the page
    document.querySelectorAll('.error-message').forEach(element => {
        element.textContent = '';
    });

    // Check if the 'name' field is empty
    if (name.value.trim() === '') {
        // If it is, display an error message
        document.getElementById('nameError').textContent = 'Name is required';
    }

    // Define a regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the 'email' field does not match the email pattern
    if (!emailPattern.test(email.value.trim())) {
        // If it doesn't, display an error message
        document.getElementById('emailError').textContent = 'Invalid email format';
    }

    // Check if the 'message' field is empty
    if (message.value.trim() === '') {
        // If it is, display an error message
        document.getElementById('messageError').textContent = 'Message is required';
    }

    // If all fields are filled and the email is in the correct format, submit the form
    if (name.value.trim() !== '' && emailPattern.test(email.value.trim()) && message.value.trim() !== '') {
        document.getElementById('contactForm').submit();
    }
}
