const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const specialChar = '@#$&_-';

const allChar = upperCase + lowerCase + number + specialChar;

function createPassword() {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];

    while ( length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
    // para.style.display = 'none';
}

// const para = document.getElementById("copied");

function copyPasword() {
    passwordBox.select();
    document.execCommand("copy");

    // para.style.display = 'initial';
    // para.innerHTML = 'password copied.!';
    passwordBox.value = "";
}
