const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl = "https://course-api.com/javascript-store-single-product";

//CSS 선택자 문자열을 인자로 받아 해당 요소를 선택하여 반환한다
//선택된 요소가 없을 경우, 에러를 throw한다
const getElement = (selection) => {
    const element = document.querySelector(selection);

    if (element) return element;
    throw new Error(`확인해주십시오 "${selection}" 해당 요소가 존재하지 않습니다`);
};

//인자로 받은 가격을 달러 통화 형식으로 변환하여 반환한다
const formatPrice = (price) => {
    //Intl.NumberFormat: 언어에 맞는 숫자 서식을 지원하는 객체의 생성자
    let formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format((price / 100).toFixed(2));

    return formattedPrice;
};

//인자로 받은 이름의 로컬 스토리지 아이템 값을 가져온다
//값이 있다면, JSON.parse 를 사용하여 값을 객체나 배열 형태로 파싱하여 반환한다
//값이 없다면, 빈 배열을 반환한다
const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);

    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item));
    } else {
        storageItem = [];
    }

    return storageItem;
};

//인자로 받은 이름과 아이템을 로컬스토리지에 저장한다
//이때 JSON.stringify를 사용하여 값을 문자열 형태로 변환하여 저장한다
const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
};

export { allProductsUrl, singleProductUrl, getElement, formatPrice, getStorageItem, setStorageItem };
