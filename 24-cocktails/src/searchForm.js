import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="; //칵테일 검색 API의 기본 URL
const form = get(".search-form"); //검색 form에 대한 DOM 요소
const input = get("[name='drink']"); //검색어를 입력하는 input 요소

form.addEventListener("keyup", function (e) {
    e.preventDefault(); //폼 제출 방지

    const value = input.value; //검색어를 가져온다.

    if (!value) return;

    presentDrinks(`${baseURL}${value}`); //가져온 검색어를 기반으로 검색 API에 요청을 보내고, 받아온 데이터를 가지고 presentDrinks 함수를 호출한다.
});
