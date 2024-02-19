
const includeSymbols = true
function generatePassword(length, addLowerCase, addUpperCase, addNumbers, addSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*()_-+="

    let allowedChars = "";

    let password = "";

    allowedChars += addLowerCase ? lowercaseChars : "";
    allowedChars += addUpperCase ? uppercaseChars : "";
    allowedChars += addNumbers ? numberChars : "";
    allowedChars += addSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`
    }

    if (allowedChars.length === 0) {
        return `(At least one set of characters need to be selected)`
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password;
}


const passwordLength = 12;
const addLowerCase = true;
const addUpperCase = true;
const addNumbers = true;
const addSymbols = true;

const password = generatePassword(passwordLength,
    addLowerCase,
    addUpperCase,
    addNumbers,
    addSymbols)

console.log(`Generated password: ${password}`)