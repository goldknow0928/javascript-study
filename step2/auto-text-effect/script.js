const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "안녕하세요. \n 반갑습니다.";
let idx = 1;
let speed = 200 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

/*
array.prototype.slice()

slice() 메서드는 어떤 배열의 시작부터 끝까지(끝 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다
원본 배열은 바뀌지 않는다


얕은 복사: 객체의 참조 값(주소 값)을 복사
깊은 복사: 객체의 실제 값 복사


*/

const a = "a";
let b = a;

b = "c";

console.log(`a: ${a}`); // 'a';
console.log(`b: ${b}`); // 'c';

const aa = {
    one: 1,
    two: 2,
};
let bb = aa;

bb.one = 3;

console.log(aa); // { one: 3, two: 2 } 출력
console.log(bb); // { one: 3, two: 2 } 출력
