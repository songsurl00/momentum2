const API_KEY = "64c59f879dca3a3ca08873d642cd4f40";

function onGeoOk(position) {
    const lat = position.coords.latitude;   // 위도
    const lon = position.coords.longitude;  // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoErr() {
    alert("사용자의 위치 정보를 가져오지 못했습니다.");
}

// 브라우저에서 위치좌표를 가져오는데 성공하면 onGeoOk, 실패하면 onGeoErr 실행
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);