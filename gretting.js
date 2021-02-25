const form = document.querySelector("js-form"), //queryselctor 
    input = document.querySelector("input"),
    greeting = document.querySelector("js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;

}

function loadName() {  // loadName func -> localStorage
    const currentUser = localStroage.getItem(USER_LS);
    if (currentUSer === null) {
        // she is not
    } else {
        paintGreeti8ng(currentUser); //she is 
    }
}

function init() {

    loadName();
}

init();
