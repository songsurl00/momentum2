const toDoForm = document.getElementById("todo-form");
const ToDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    // localstorage는 array를 저장못해서 문자열로 바꿔서 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // 버튼을 누른 element의 부모가 누구인지 저장
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));    // 원하는 걸 지운 후의 toDos배열을 새로 만듦
    saveToDos();    // 새 ToDos를 저장
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDos.length === 7){
        return alert("할 일이 7개 이상입니다!");
    }
    const newToDo = ToDoInput.value;
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    }
    ToDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// localstorage에 저장했던 todo가 있을 경우
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);     // localstorage에 들어있는 string을 array로 바꿈
    toDos = parsedToDos;    // 전에 저장한 todo를 복구
    parsedToDos.forEach(paintToDo);     // 배열에서 각 요소당 동작하게 만드는 함수 forEach
}
