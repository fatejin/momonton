const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    /*1. A common use of JSON is to exchange data to/from a web server.  
    When sending data to a web server, the data has to be a string.
    Convert a JavaScript object into a string with JSON.stringify().
    2.The setItem() method of the Storage interface,
     when passed a key name and value,
     will add that key to the given Storage object, 
     or update that key's value if it already exists : setitem() method는 (자바스크립트 내장 함수) 값이 Storage에 Object로 추가되거나 업데이트 된다.  
    */
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
            /* 
            1) foreach는 자바스크립트에서 제공하는 메소드입니다. foreach메소드는 콜백함수를 인자로 갖고 콜백함수가 실행될 때 
            parsedToDo배열에 들었는 값들을 하나씩 받아주기 위해 toDo를 함수내에서 변수로 선언한것이다.
            2) text는 paintToDo함수에서 매개변수로 넘어오는 text(To Do에 작성한 내용)를 받아주기 위한 변수입니다.
            
            
            */
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();