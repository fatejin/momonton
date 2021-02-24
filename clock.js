const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date(); // Core Javascript date -> bulit-in func
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`; //backtics -> text showup on web 값 받아서 택스트 보여주기
}

function init() { //start setup
    getTime(); // Always divide and conquer on programming
    setInterval(getTime, 1000); // this gonna change HTML of the clock every time - success!
}

init();

