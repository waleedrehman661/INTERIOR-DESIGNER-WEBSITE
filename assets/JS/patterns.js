var contactform = document.querySelector('#contact_form');

contactform.addEventListener('submit', function(e) {
    e.preventDefault();

    var firstname = document.querySelector('#contact-firstname').value.trim();
    var lastname = document.querySelector('#contact-lastname').value.trim();
    var gmail = document.querySelector('#email').value.trim();
    var phone = document.querySelector('#phonenumber').value.trim();

    var namepattern = /^[a-z]+$/i;
    var firstnamep = document.querySelector('#1stname-p'); 
    firstnamep.textContent = '';

    if (!namepattern.test(firstname)) {
        firstnamep.textContent = 'Only letters are allowed';
        firstnamep.style.color = 'red';
    }

    // Last name validation
    var lastnamepattern = /^[a-z]+$/i;
    var lastnamep = document.querySelector('#2ndname-p');
    lastnamep.textContent = '';

    if (!lastnamepattern.test(lastname)) {
        lastnamep.textContent = 'Only letters are allowed';
        lastnamep.style.color = 'red';
    }

    // Email validation
    var gmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var gmailp = document.querySelector('#gmailp'); 
    gmailp.textContent = '';

    if (!gmailPattern.test(gmail)) {
        gmailp.textContent = 'Incorrect email address';
        gmailp.style.color = 'red';
    }

    // Phone validation
    var phonepattern = /^[0-9]{11}$/;
    var phonep = document.querySelector('#phonep');
    phonep.textContent = '';

    if (!phonepattern.test(phone)) {
        phonep.textContent = 'Incorrect phone number';
        phonep.style.color = 'red';
    }

    if (
        namepattern.test(firstname) &&
        lastnamepattern.test(lastname) &&
        gmailPattern.test(gmail) &&
        phonepattern.test(phone)
    ) {
        alert(`Hey ${firstname}, your contact has been submitted successfully!`);
        contactform.reset(); 
    }
});
