// 이미지 파일 배열을 생성 (1.jpg부터 7.jpg까지)
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];

// 배열에서 무작위로 하나의 이미지를 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 새로운 <img> 태그를 생성
const bgImage = document.createElement("img");

// 선택된 이미지 파일의 경로를 <img> 태그의 src 속성에 설정
bgImage.src = `images/${chosenImage}`;

// <body> 태그에 <img> 태그를 자식 요소로 추가하여 화면에 이미지 표시
document.body.appendChild(bgImage);
