import { getStorageItem, setStorageItem } from "./utils.js";

//getStorageItem 함수를 사용하여 로컬 스토리지에서 가져온 store키에 해당하는 값을 할당한다
//만약 store키가 없으면 null 값을 가진다
let store = getStorageItem("store");

//제품 배열을 인자로 받아와서 map 함수를 사용하여 제품 정보를 가공한 후 store 변수에 할당한다
const setupStore = (products) => {
    store = products.map((product) => {
        const {
            id,
            fields: { featured, name, price, company, colors, image: img },
        } = product;
        
        const image = img[0].thumbnails.large.url;

        return { id, featured, name, price, company, colors, image };
    });

    //store키에 해당하는 값을 로컬스토리지에 저장한다
    setStorageItem("store", store);
};

//store 배열에서 id 속성이 인자로 전달된 값과 일치하는 제품 객체를 찾아 반환한다
const findProduct = (id) => {
    let product = store.find((product) => product.id === id);
    return product;
};

export { store, setupStore, findProduct };
