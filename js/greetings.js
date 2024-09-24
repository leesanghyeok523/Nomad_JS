// login-form의 요소를 선택 (로그인 폼 전체, 입력 필드, 버튼, 인사말 텍스트)
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// 'hidden' 클래스명과 'username' 키 값을 상수로 저장
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 폼 제출 시 호출되는 함수
function onLoginSubmit(event) {
  // 기본 동작(페이지 새로고침)을 막음
  event.preventDefault();
  
  // 로그인 폼을 숨김
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  // 입력된 사용자 이름을 변수에 저장
  const username = loginInput.value;
  
  // 사용자 이름을 로컬 스토리지에 저장
  localStorage.setItem("username", username);
  
  // 입력된 사용자 이름을 인사말로 표시하는 함수 호출
  paintGreetings(username);
}

// 사용자 이름을 받아서 화면에 인사말을 표시하는 함수
function paintGreetings(username) {
  // 'Hello'와 사용자 이름을 결합하여 인사말을 설정
  greeting.innerText = `Hello ${username}`;
  
  // 인사말을 화면에 표시 (hidden 클래스를 제거)
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로그인 폼 제출 이벤트에 onLoginSubmit 함수 연결
loginForm.addEventListener("submit", onLoginSubmit);

// 로컬 스토리지에서 저장된 사용자 이름을 불러옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 사용자 이름이 없는 경우 (처음 방문 시)
if (savedUsername === null) {
  // 로그인 폼을 표시
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  
  // 다시 한 번 로그인 폼 제출 이벤트에 함수 연결 (안전장치)
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 저장된 사용자 이름이 있으면 그 이름으로 인사말 표시
  paintGreetings(savedUsername);
}
