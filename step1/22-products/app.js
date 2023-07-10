/* 웹페이지의 제품 목록을 가져오고 표시하는 기능 */

// API url 주소
const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");

// 제품 목록 가져오는 함수
const fetchProducts = async () => {
    productsDOM.innerHTML = '<div class="loading"></div>';

    try {
        //fetch 함수를 이용해서 API에서 데이터를 가져온다.
        const resp = await fetch(url);
        // 가져온 데이터는 json형식으로 변환해서 반환한다.
        const data = await resp.json();
        return data;
    } catch (error) {
        productsDOM.innerHTML = '<p class="error">error</p>';
    }
};

// 제품 목록을 html 형식으로 표시하는 함수
const displayProducts = (list) => {
    const productList = list
        //map 메서드를 사용하여 각 제품에 대한 HTML 문자열을 생성
        .map((product) => {
            const { id } = product;
            const { name: title, price } = product.fields;
            const { url: img } = product.fields.image[0];
            const formatPrice = price / 100;
            return `<a href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
                <h5 class="name">${title}</h5>
                <span class="price">$${formatPrice}</span>
            </footer>
        </a>`;
        })
        //join 메서드를 사용하여 문자열들을 결합하여 최종 html 문자열을 할당하여 표시
        .join("");

    productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
};

start();
