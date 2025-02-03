document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contact_form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve input values
        const firstname = document.querySelector('#contact-firstname').value.trim();
        const lastname = document.querySelector('#contact-lastname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phonenumber').value.trim();
        const source = document.querySelector('#source').value;
        const message = document.querySelector('#message').value.trim();

        // Validation patterns
        const namePattern = /^[a-zA-Z]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phonePattern = /^[0-9]{11}$/;

        // Error spans
        const firstnameError = document.querySelector('#firstname-error');
        const lastnameError = document.querySelector('#lastname-error');
        const emailError = document.querySelector('#email-error');
        const phoneError = document.querySelector('#phone-error');
        const sourceError = document.querySelector('#source-error');
        const messageError = document.querySelector('#message-error');

        // Clear previous error messages
        firstnameError.textContent = '';
        lastnameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        sourceError.textContent = '';
        messageError.textContent = '';

        let isValid = true; // Flag to track overall form validity

        // First name validation
        if (!namePattern.test(firstname)) {
            firstnameError.textContent = 'Only letters are allowed';
            firstnameError.style.color = 'red';
            isValid = false;
        }

        // Last name validation
        if (!namePattern.test(lastname)) {
            lastnameError.textContent = 'Only letters are allowed';
            lastnameError.style.color = 'red';
            isValid = false;
        }

        // Email validation
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Incorrect email address';
            emailError.style.color = 'red';
            isValid = false;
        }

        // Phone number validation
        if (!phonePattern.test(phone)) {
            phoneError.textContent = 'Phone number must be 11 digits';
            phoneError.style.color = 'red';
            isValid = false;
        }

        // Source validation
        if (!source) {
            sourceError.textContent = 'Please select where you found us.';
            sourceError.style.color = 'red';
            isValid = false;
        }

        // Message validation
        if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            messageError.style.color = 'red';
            isValid = false;
        }

        // Final validation
        if (isValid) {
            alert(`Hey ${firstname}, your contact form has been submitted successfully!`);
            contactForm.reset(); // Reset the form
        }
    });
});
