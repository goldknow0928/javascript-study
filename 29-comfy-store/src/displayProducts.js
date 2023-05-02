import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

//제품 목록을 화면에 표시하는 display 함수를 내보내는 모듈
const display = (products, element, filters) => {
    element.innerHTML = products
        .map((product) => {
            const { id, name, image, price } = product;
            return `<article class="product">
            <div class="product-container">
                <img src="${image}" class="product-img img" alt="${name}" />
                <div class="product-icons">
                    <a href="product.html?id=${id}" class="product-icon"><i class="fas fa-search"></i></a>
                    <button class="product-cart-btn product-icon" data-id="${id}"><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
            <footer>
                <p class="product-name">${name}</p>
                <h4 class="product-price">${formatPrice(price)}</h4>
            </footer>
        </article>`;
        })
        //각 문자열을 연결하여 최종적인 HTML 마크업 문자열을 만든다
        .join("");

    //만약 필터를 적용한 경우, 함수는 바로 반환한다
    if (filters) return;

    //그렇지 않으면, HTML 요소에 대한 클릭 이벤트 핸들러를 등록하여 'product-cart-btn'클래스를 가진 버튼이 클릭되면 'addToCart'함수를 호출한다
    element.addEventListener("click", function (e) {
        const parent = e.target.parentElement;

        if (parent.classList.contains("product-cart-btn")) {
            addToCart(parent.dataset.id);
        }
    });
};

export default display;
