import { getStorageItem, setStorageItem, formatPrice, getElement } from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");
let cart = getStorageItem("cart");

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);

    if (!item) {
        let product = findProduct(id);

        //항목 추가
        product = { ...product, amount: 1 };
        cart = [...cart, product];

        //DOM에 항목을 추가합니다.
        addToCartDOM(product);
    } else {
        //업데이트 값
        const amount = increaseAmount(id);
        const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
        const newAmount = items.find((value) => value.dataset.id === id);

        newAmount.textContent = amount;
    }
    //항목 수에 1을 추가
    displayCartItemCount();
    //장바구니 합계 표시
    displayCartTotal();
    //로컬 저장소에 카트 설정
    setStorageItem("cart", cart);
    //more stuff coming up
    openCart();
};

function displayCartItemCount() {
    const amount = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
    }, 0);

    cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
    let total = cart.reduce((total, cartItem) => {
        return (total += cartItem.price * cartItem.amount);
    }, 0);

    cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
    cart.forEach((cartItem) => {
        addToCartDOM(cartItem);
    });
}

function removeItem(id) {
    cart = cart.filter((cartItem) => cartItem.id !== id);
}

function increaseAmount(id) {
    let newAmount;

    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: newAmount };
        }

        return cartItem;
    });

    return newAmount;
}

function decreaseAmount(id) {
    let newAmount;

    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: newAmount };
        }

        return cartItem;
    });

    return newAmount;
}

function setupCartFunctionality() {
    cartItemsDOM.addEventListener("click", function (e) {
        const element = e.target;
        const parent = e.target.parentElement;
        const id = e.target.dataset.id;
        const parentID = e.target.parentElement.dataset.id;

        //삭제
        if (element.classList.contains("cart-item-remove-btn")) {
            removeItem(id);

            element.parentElement.parentElement.remove();
        }

        //증가
        if (parent.classList.contains("cart-item-increase-btn")) {
            const newAmount = increaseAmount(parentID);
            parent.nextElementSibling.textContent = newAmount;
        }

        //감소
        if (parent.classList.contains("cart-item-decrease-btn")) {
            const newAmount = decreaseAmount(parentID);

            if (newAmount === 0) {
                removeItem(parentID);
                parent.parentElement.parentElement.remove();
            } else {
                parent.previousElementSibling.textContent = newAmount;
            }
        }

        displayCartItemCount();
        displayCartTotal();
        setStorageItem("cart", cart);
    });
}

const init = () => {
    //카트 항목의 표시 금액
    displayCartItemCount();
    //합계 표시
    displayCartTotal();
    //모든 장바구니 항목을 dom에 추가
    displayCartItemsDOM();
    //카트 기능 설정
    setupCartFunctionality();
};

init();
