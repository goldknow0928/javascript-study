const range = document.getElementById("range");

range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue("width");
    const label_width = getComputedStyle(label).getPropertyValue("width");
console.log(getComputedStyle(e.target));
    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};


/*
getComputedStyle() 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신한다.
이 속성값들은, 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값이다.
개별 CSS 속성 값은 객체를 통해 제공되는 API 또는 CSS 속성 이름을 사용해서 간단히 색인화해서 액세스 할 수 있다.


*/