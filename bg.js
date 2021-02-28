const body = document.querySelector("body"); //background body

const IMG_NUMBER = 3;

function paintImage(imgNumber) { //const func set bg Num (함수에 값 지정하기)
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;  //call img to one by one in index sequence in a row -> this func
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();  