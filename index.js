const toggleSwitch = document.getElementById('darkModeToggle')
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
})

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtnEl = document.getElementById("generate-btn")
const code1El = document.getElementById("code1-el")
const code2El = document.getElementById("code2-el")

function generatePassword() {

}

function getRandomPassword(){
    let randomPassword = ""
    for(let i = 0; i < 15; i++){
        const randomIdx = Math.floor(Math.random() * characters.length)
        randomPassword[randomIdx]
    }
    return randomPassword
    console.log(randomPassword)
  }

getRandomPassword()