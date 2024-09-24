// todo-form의 요소를 선택하여 변수에 저장
const toDoForm = document.getElementById("todo-form");

// todo-form 내부의 input 요소를 선택하여 변수에 저장
const toDoInput = document.querySelector("#todo-form input");

// todo-list의 요소를 선택하여 변수에 저장
const toDoList = document.getElementById("todo-list");

// 로컬 스토리지에 저장될 키 값 상수로 저장
const TODOS_KEY = "todos";

// 할 일 목록을 저장할 배열 초기화
let toDos = [];

// 할 일 목록을 로컬 스토리지에 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제 버튼 클릭 시 해당 할 일을 목록에서 제거하는 함수
function deleteToDo(event) {
  const li = event.target.parentElement; // 클릭된 버튼의 부모 요소(li) 선택
  li.remove(); // li 요소 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 해당 id의 할 일을 배열에서 제거
  saveToDos(); // 변경된 목록을 로컬 스토리지에 저장
}

// 새로운 할 일을 화면에 표시하는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li"); // li 요소 생성
  li.id = newTodo.id; // 할 일의 id를 li의 id로 설정
  const span = document.createElement("span"); // 할 일 텍스트를 표시할 span 요소 생성
  span.innerText = newTodo.text; // 할 일 텍스트 설정
  const button = document.createElement("button"); // 삭제 버튼 생성
  button.innerText = "❌"; // 버튼에 '❌' 텍스트 설정
  button.addEventListener("click", deleteToDo); // 버튼 클릭 시 deleteToDo 함수 호출
  li.appendChild(span); // li 요소에 span 요소 추가
  li.appendChild(button); // li 요소에 버튼 추가
  toDoList.appendChild(li); // li 요소를 할 일 목록에 추가
}

// 할 일 폼이 제출되었을 때 호출되는 함수
function handleToDoSubmit(event) {
  event.preventDefault(); // 기본 동작(폼 제출 후 새로고침) 방지
  const newTodo = toDoInput.value; // 입력된 할 일 텍스트 저장
  toDoInput.value = ""; // 입력 필드 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 할 일 객체에 고유한 id로 현재 시간을 사용
  };
  toDos.push(newTodoObj); // 할 일 배열에 추가
  paintToDo(newTodoObj); // 새로운 할 일을 화면에 표시
  saveToDos(); // 로컬 스토리지에 저장
}

// 할 일 폼 제출 이벤트에 handleToDoSubmit 함수 연결
toDoForm.addEventListener("submit", handleToDoSubmit);

// 로컬 스토리지에 저장된 할 일을 불러옴
const savedToDos = localStorage.getItem(TODOS_KEY);

// 저장된 할 일이 있을 경우
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON 문자열을 객체로 변환
  toDos = parsedToDos; // 기존 할 일 배열로 설정
  parsedToDos.forEach(paintToDo); // 저장된 할 일을 각각 화면에 표시
}
