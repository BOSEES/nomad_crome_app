const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

console.log(form)
const userLs = "currentUser";
const showing = "showing";

function saveName(text) {
  localStorage.setItem(userLs, text);
}

function paintGreeting(text) {
  form.classList.remove(showing);
  greeting.classList.add(showing);
  greeting.innerText = `hello ${text}`
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(showing);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(userLs);

  if(currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();