const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");

let clickTime = 0; //클릭한 시간
let timesClicked = 0; //하트 클릭 갯수

loveMe.addEventListener("click", (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime(); //현재 시간을 clickTime 변수에 저장
    } else {
        //현재 시간(new Date().getTime())과 이전 클릭 시간(clickTime)의 차이를 계산하여 800ms(밀리초)보다 작다면 더블클립으로 인식
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e);
            clickTime = 0; //초기화
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement("i");

    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    // setTimeout(() => heart.remove(), 1000);
};

/*

❗
모바일 디바이스에서는 자바스크립트 더블클릭 이벤트가 작동하지 않는다.
모바일 기기에서는 터치 기반의 상호작용이 기본이기 때문이다.
더블 클릭은 컴퓨터에서 사용되는 입력 방식으로, 터치 화면을 가진 모바일 기기에서는 더블 클릭 이벤트를 지원하지 않는 경우가 많다.

 */
