let greetingButton = document.getElementById(`greetingButton`);
let greetingParagraph = document.getElementById(`greetingParagraph`);

greetingButton.addEventListener('click', sayGreeting);

function sayGreeting() {
  greetingParagraph.innerHTML = `Welcome to exercise set 1`;
}