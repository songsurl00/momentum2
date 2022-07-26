const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

// <style> element 생성
const bgImg = document.createElement("style");

bgImg.innerHTML = `body {
    background-image: url(img/${chosenImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}`;

// body 내부에 집어넣기
document.body.appendChild(bgImg);