// DECLARACIÓN DE VARIABLES

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnCookie = document.querySelector("#btnCookie")
const btnReset = document.querySelector("#btnReset")

let phrases = document.querySelector("#phrases") // Coger la frase del HTML.
let randomNumber = Math.round(Math.random() * 10) // Generar número aleatorio entre "0-10".

let randomPhrases = [
  "Sueña como si fueras a vivir para siempre, vive como si fueses a morir hoy.",
  "Sé amable, porque toda persona que conoces está librando una gran batalla.",
  "Sé tú mismo. Todos los demás ya están ocupados.",
  "Tu tiempo es limitado así que no lo malgastes en la vida de los demás.",
  "La felicidad no está en lo que tú tienes sino en tu actitud",
  "Nunca es demasiado tarde para ser lo que podrías haber sido",
  "No tienes que ser grande para empezar. Pero tienes que empezar para poder ser grande.",
  "Si te caíste ayer, levántate hoy.",
  "Tienes el poder de crear la vida de tus sueños",
  "Nadie puede hacerte sentir inferior sin tu consentimiento",
  "Eres increíble, poderosa y maravillosa, deja que los demás vean todo lo que vales.",
]

// EVENTOS
btnCookie.addEventListener("click", changeOfPhrases)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", checkEnter) // Controlar cuando pulsen la tecla ENTER.

// FUNCIONES CALLBACK
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changeOfPhrases() {
  toggleScreen()
  phrases.innerText = randomPhrases[randomNumber] // Según el número generado aleatoriamente, cogemos la posición del array.
}

function handleResetClick() {
  changeOfPhrases()
  randomNumber = Math.round(Math.random() * 10)
}

function checkEnter(enter) {
  if (enter.key == "Enter") {
    handleResetClick()
  }
}
