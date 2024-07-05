// scripts.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
    } else {
        message.textContent = "Registration successful!";
        message.style.color = "Green";

        // Here you can add code to send the form data to the server
    }
});


// Add event listener to the "show/hide" button for the password field
document.getElementById('togglePassword').addEventListener('click', function() {
    // Get the password input field
    const passwordField = document.getElementById('password');
    
    // Toggle the type attribute between 'password' and 'text'
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the icon class between 'bx-show' and 'bx-hide'
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});

// Add event listener to the "show/hide" button for the confirm password field
document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    // Get the confirm password input field
    const passwordField = document.getElementById('confirmPassword');
    
    // Toggle the type attribute between 'password' and 'text'
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle the icon class between 'bx-show' and 'bx-hide'
    this.classList.toggle('bx-show');
    this.classList.toggle('bx-hide');
});
