const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")
let setValue =  document.getElementById("set-value-length")

// Set Password Length
const setPasswordLength = () => {
    let passwordLength = setValue.value
    return passwordLength
} 

// Get random characters from characters array
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

// Generating random password based length that is declared
function generateRandomPassword() {
    let randomPassword = ""
    let getPasswordLength = setPasswordLength()
    for (let i = 0; i < getPasswordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}

// Displaying password
const renderPassword = () =>{
    password1El.textContent = "" 
    password2El.textContent = "" 
    password3El.textContent = "" 
    password4El.textContent = "" 

    password1El.textContent += generateRandomPassword() 
    password2El.textContent += generateRandomPassword() 
    password3El.textContent += generateRandomPassword() 
    password4El.textContent += generateRandomPassword()
       
}

// Copy to clipboard function
const copyToClipboard = (e) => {
   
    let copyText = e.target
    navigator.clipboard.writeText(copyText.textContent).then(res=>{
        alert("Password copied to clipboard")
    })

}

password1El.addEventListener("click",copyToClipboard)
password2El.addEventListener("click",copyToClipboard)
password3El.addEventListener("click",copyToClipboard)
password4El.addEventListener("click",copyToClipboard)
