const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { //preventDefault, when event happens, it occurs on the root, form, like bubble
    event.preventDefault(); //preventDefault method, preventDefault
    const currentValue = input.value; //send value to the right way 
    paintGreeting(currentValue); //somebody data sumbits, save greeting, save name in localstorage
    saveName(currentValue); // the one from input (= saveName value)
}

function askForName() {  // If cuurentUser is null, request username
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName(); // ask for name
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();