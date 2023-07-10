// 초기화
let count = 0;

// 버튼 선택
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});

/**
 * querySelector :
 * --> 지정된 선택자와 일치하는 document의 첫 번째 element를 반환
 * --> 일치하는 요소가 없으면 null 반환
 *
 * querySelectorAll :
 * --> 지정된 셀렉터 그룹에 일치하는 도큐먼트의 element list를 나타낸다
 * --> 즉, NodeList를 반환한다
 * --> 지정된 셀렉ㅌ가 없는 경우에는 비어있는 NodeList로 반환
 */
