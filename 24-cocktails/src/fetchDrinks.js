import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => { //fetchDrinks 함수를 정의하고 내보내는 모듈. 이 함수는 음료 정보를 가져오는 비동기 함수이다.
    showLoading();

    try {
        const response = await fetch(url); //fetch 메소드를 사용하여 API에서 데이터를 가져와 response 객체에 할당한다.
        const data = await response.json(); //json 메소드를 사용하여 response 객체에서 JSON 형식으로 데이터를 추출한다.
        return data; //추출된 데이터 반환
    } catch (error) { //에러 발생하면 try 블록에서 catch 블록으로 제어가 이동하여 에러 메세지 출력
        console.log(error);
    }
};

export default fetchDrinks;
