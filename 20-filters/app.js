let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
    if (filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }

    productsContainer.innerHTML = filteredProducts
        .map((product) => {
            const { id, title, image, price } = product;
            /*html*/
            return `<article class="product" data-id="${id}">
                <img src="${image}" class="product-img img" alt="" />
                <footer>
                    <h5 class="product-name">${title}</h5>
                    <span class="product-price">${price}</span>
                </footer>
            </article>`;
        })
        .join("");
};

displayProducts();

// Text Filter
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
    const inputValue = searchInput.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

// Filter Buttons
const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
    const buttons = ["all", ...new Set(products.map((product) => product.company))];

    companiesDOM.innerHTML = buttons
        .map((company) => {
            return `<button class='company-btn' data-id="${company}">${company}</button>`;
        })
        .join("");
};

displayButtons();

companiesDOM.addEventListener("click", (e) => {
    const el = e.target;

    if (el.classList.contains("company-btn")) {
        if (el.dataset.id === "all") {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            });
        }
        searchInput.value = "";
        displayProducts();
    }
});

/*

filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
toLowerCase() 메서드는 문자열을 소문자로 변환해 반환합니다.
Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.

*/