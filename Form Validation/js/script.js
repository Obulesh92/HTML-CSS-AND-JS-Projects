const form = document.getElementById('mainform');
const nameInput = document.getElementById('inputname');
const emailInput = document.getElementById('eemail');
const phoneInput = document.getElementById('telphone');
const outputh2 = document.getElementById("outputh2");
const gender = document.getElementById("gender");
console.dir(gender);

let outname = document.getElementById("myuser");
let outmail = document.getElementById("mail");
let outtel = document.getElementById("mobile");
let outgender = document.getElementById("outgender");

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const gendererror = document.getElementById('gendererror');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    gendererror.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
        nameError.textContent = 'Name can only contain letters and spaces.';
        isValid = false;
    }



    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }


    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required.';
        isValid = false;
    } else if (!/^\d{10}$/.test(phoneInput.value.trim())) {
        phoneError.textContent = 'Phone number must be exactly 10 digits.';
        isValid = false;
    }


    if (isValid) {
        form.style.display = "none"
        outputh2.innerText += "Form submitted successfully!";
        outputh2.style.display = "block";
        const users = nameInput.value;
        outname.innerText = "Username:   " + users;

        const gen = gender.value;
        outgender.innerText = "Gender :" + gen
        const mail = emailInput.value;
        outmail.innerText = "Email: " + mail;

        const mobile = phoneInput.value;
        outtel.innerText = "Phone Number: " + mobile;

    }

    main.reset()
});
