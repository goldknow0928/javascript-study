const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear(); //4자리의 년도 정보를 가져온다
let tempMonth = tempDate.getMonth(); //0~11 사이의 월 정보를 가져온다. 이때 1월은 0이고, 12월은 11이다
let tempDay = tempDate.getDate(); //1~31 사이의 일 정보를 가져온다
// 개월은 ZERO 인덱스 기반입니다.
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); // 10일 뒤 11시 30분
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours(); //0~23 사이의 시간 정보를 가져온다
const minutes = futureDate.getMinutes(); //0~59 사이의 분 정보를 가져온다

const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
// console.log(month)

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemaindiningTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24h
    // 밀리초 단위의 값
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // 모든 값을 계산
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // 값 배열 설정
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expire">sorry, this giveaway has expired!</h4>`;
    }
}

// countdown
let countdown = setInterval(getRemaindiningTime, 1000);

getRemaindiningTime();
