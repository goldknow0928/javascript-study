const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
    counter.classList.remove("hide");
    final.classList.remove("show");

    nums.forEach((num) => {
        num.classList.value = "";
    });

    nums[0].classList.add("in");
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const numLength = num.length - 1;

        num.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && idx !== numLength) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                counter.classList.add("hide");
                final.classList.add("show");
            }
        });
    });
}

replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
});

/*

e.animationName
css 애니메이션 이벤트가 발생할 때 애니메이션의 이름을 반환한다
이 속성은 읽기 전용이다

***

css 애니메이션의 상태에 따라 실행되는 JS 이벤트

animationcancel(지원 안되는 브라우저 많음, 크로스 브라우징 필수)
css 애니메이션이 예기치 않게 중단 되면 시작
즉, 이벤트를 보내지 않고 실행을 중지할 때마다 시작된다
이는 애니메이션이 제거되도록 변경되거나 css를 사용하여 애니메이션 노드를 숨길 때 발생할 수 있다

animationstart 
css 애니메이션 시작되면 시작
animation-delay가 있는 경우, delay가 끝나면 이벤트가 실행된다
delay가 음수이면 delay의 절대값과 동일하게 실행된다

animationIteration
css 애니메이션의 반복이 종료되고 다른 반복이 시작되면 시작
이 이벤트는 이벤트와 동시에 발생하지 않으므로 이벤트가 1인 애니메이션에서는 발생하지 않는다

animationend
css 애니메이션이 완료되면 시작
요소가 DOM에서 제거되거나 애니메이션이 요소에서 제거되는 경우와 같이 애니메이션이 완료되기 전에 중단되면 이벤트가 발생하지 않는다

*/
