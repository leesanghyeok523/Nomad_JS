// h2 태그 중 id가 'clock'인 요소를 선택
const clock = document.querySelector("h2#clock");

// 현재 시각을 가져와 시계 형태로 표시하는 함수
function getClock() {
  // 현재 날짜와 시간 정보를 담은 Date 객체 생성
  const date = new Date();
  
  // 시(hour), 분(minute), 초(second)을 두 자리로 맞춰서 가져옴 (01, 02 등)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  // 시, 분, 초를 조합하여 시계 형식으로 텍스트를 설정
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 페이지 로드 시 즉시 현재 시각을 한 번 호출
getClock();

// 매 1초마다 getClock 함수를 호출하여 시계가 실시간으로 업데이트되도록 설정
setInterval(getClock, 1000);
