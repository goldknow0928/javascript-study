// 모듈에서 가져온 함수와 함께 displayUser 함수를 내보내는 모듈

import get from "./getElement.js";
import removeActive from "./removeActive.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

//person 매개변수를 받는다. person은 객체로서 이미지, 이름 및 다른 정보가 저장된 사용자 정보를 나타낸다.
const displayUser = (person) => {
    //img 요소의 src 속성은 person 객체의 image 속성으로 설정되고
    img.src = person.image;
    //value 요소의 내용은 person 객체의 name 속성으로 설정된다.
    value.textContent = person.name;
    //title 요소의 내용은 my name is로 설정된다.
    title.textContent = `My name is`;

    //btns 배열에서 active 클래스를 제거하는 함수이다.
    removeActive(btns);

    //btns 배열의 각 요소에 대해 click 이벤트 리스너를 추가한다.
    btns[0].classList.remove("active");

    btns.forEach((btn) => {
        const label = btn.dataset.label;
        
        //label에 따라 title과 value 요소의 내용을 업데이트하고, 해당 버튼에 active 클래스를 추가한다.
        btn.addEventListener("click", () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];

            removeActive(btns);
            btn.classList.add("active");
        });
    });
};

export default displayUser;
