import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const presentDrink = async () => {
    const id = localStorage.getItem("drink"); //localStorage에 저장된 drink 키의 값을 가져온다. 이 값은 이전 페이지에서 선택한 칵테일 id의 값이다.

    if (!id) { //localStorage에 id값이 저장되어 있지 않은 경우 처리 로직
        window.location.replace("index.html");
    } else { //id값이 존재할때
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`); //해당 id값을 이용하여 fetchDrinks 함수로 API에서 칵테일 정보를 가져온다.
        displayDrink(drink);
    }
};

window.addEventListener("DOMContentLoaded", presentDrink); //DOMContentLoaded 이벤트가 발생하면 presentDrink 함수가 호출되도록 설정
