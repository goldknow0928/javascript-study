const colors = ["green", "red", "rgba(132,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

/**
 *
 * textContent와 innerText, innerHTML의 차이점
 * --> textContent는 <script>와 <style> 요소를 포함한 모든 요소의 콘텐츠를 가져온다
 * --> innerText는 사람이 읽을 수 있는 요소만 처리한다
 * --> innerHTML은 element의 속성으로, 해당 Element의 HTML,XML을 읽어오거나 설정할 수 있다
 */


/**
 *  Math.floor() : 소수점 이하 버림
 *  Math.ceil() : 소수점 이하 올림
 *  Math.round() : 소수점 이하 반올림
 */