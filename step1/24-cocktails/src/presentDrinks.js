import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
    //fetch drinks
    const data = await fetchDrinks(url); //fetchDrinks 함수를 호출하여 음료 정보를 가져온다. await 키워드를 사용하여 비동기 처리를 한다.

    //display drinks
    const section = await displayDrinks(data); //displayDrinks 함수를 호출하여 가져온 음료 정보를 HTML 요소로 생성한다. await 키워드를 사용하여 비동기 처리를 한다.
    //이 함수는 생성된 요소를 반환한다.

    if (section) {
        setDrink(section); //setDrink 함수를 호출하여 해당 요소에 이벤트 리스너를 등록한다.
    }
};

export default showDrinks;
