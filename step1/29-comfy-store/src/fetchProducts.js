import { allProductsUrl } from "./utils.js";

//모든 제품 데이터를 가져오는 'fetchProducts' 함수는 내보내는 모듈
const fetchProducts = async () => {
    //async 키워드로 정의되어 있으며, await 키워드를 사용하여 fetch 함수를 호출한다
    //fetch 함수는 allProductsUrl 변수에 저장된 URL에서 데이터를 가져오려고 시도하며,
    //오류가 발생한 경우 catch 함수를 사용하여 오류를 콘솔에 기록한다
    const response = await fetch(allProductsUrl).catch((err) => console.log(err));

    //response 객체가 존재하는 경우 
    if (response) {
        //response.json() 메서드를 사용하여 JSON 형식의 응답을 파싱하여 자바스크립트 객체로 반환한다
        return response.json();
    }

    //response 객체가 존재하지 않는 경우, null 값을 반환한다
    return response;
};

export default fetchProducts;
