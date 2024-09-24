// HTML에서 첫 번째 span 요소(weather 정보)와 마지막 span 요소(도시 이름)를 선택
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

// OpenWeather API 사용을 위한 API 키
const API_KEY = "b379d74ca2eedc3fd1a15a9224a3817f";

// 위치 정보 요청이 성공했을 때 호출되는 함수
function onGeoOk(position) {
  const lat = position.coords.latitude; // 현재 위치의 위도
  const lon = position.coords.longitude; // 현재 위치의 경도
  
  // OpenWeather API에 보낼 URL을 위도, 경도, API 키, 단위를 포함하여 생성
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // fetch로 API 호출 후 JSON 형식으로 변환하여 데이터 처리
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // API에서 받은 데이터로 도시 이름과 날씨 정보를 설정
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

// 위치 정보 요청이 실패했을 때 호출되는 함수
function onGeoError() {
  alert("Can't find you. No weather for you."); // 경고창으로 에러 메시지 표시
}

// 사용자의 위치 정보를 요청하고 성공 시 onGeoOk, 실패 시 onGeoError 함수 호출
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
