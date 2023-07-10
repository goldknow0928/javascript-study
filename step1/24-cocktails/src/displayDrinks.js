import get from "./getElement.js"; //getElement.js 파일에서 get 함수를 가져온다.
import { hideLoading } from "./toggleLoading.js"; //toggleLoading.js 파일에서 hideLoading 함수를 가져온다.

const displayDrinks = ({ drinks }) => { //displayDrinks 함수를 정의한다. 이 함수는 drinks 객체를 비구조화해서 받는다.
    const section = get(".section-center"); //get함수를 사용하여 클래스 이름이 section-center인 HTML요소를 찾아 section 상수에 할당한다.
    const title = get(".title"); //get함수를 사용하여 클래스 이름이 title인 HTML요소를 찾아 title 상수에 할당한다.

    if (!drinks) {
        //hide Loading
        hideLoading();

        title.textContent = "sorry";
        section.innerHTML = null;

        return;
    }

    const newDrinks = drinks
        .map((drink) => { //map 함수를 사용하여 drinks 배열의 각 요소를 순회하며, 각 요소에서 음료의 ID, 이름, 이미지를 추출하여 HTML 문자열로 반환
            const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

            return `<a href="drink.html">
                <article class="cocktail" data-id="${id}">
                    <img src="${image}" alt="${name}" />
                    <h3>${name}</h3>
                </article>
            </a>
        `;
        })
        .join("");

    hideLoading();

    title.textContent = ""; //title 요소의 내용을 지운다.
    section.innerHTML = newDrinks; //section 요소의 내용을 newDrinks HTML 문자열로 대체

    return section;
};

export default displayDrinks;
