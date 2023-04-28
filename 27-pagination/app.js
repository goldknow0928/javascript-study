import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = []; //빈 배열로 초기화

const setupUI = () => {
    displayFollowers(pages[index]); //현재 페이지 표시
    displayButtons(btnContainer, pages, index); //페이지 버튼 표시
};

const init = async () => {
    const followers = await fetchFollowers(); //fetchFollowers 함수를 사용하여 팔로워 목록을 가져옴
    title.textContent = "pagination";
    pages = paginate(followers); //페이지를 만드는 paginate 함수 호출
    setupUI();
};

btnContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-container")) return;

    if (e.target.classList.contains("page-btn")) {
        index = parseInt(e.target.dataset.index);
    }

    if (e.target.classList.contains("next-btn")) {
        index++;

        if (index > pages.length - 1) {
            index = 0;
        }
    }

    if (e.target.classList.contains("prev-btn")) {
        index--;
        if (index < 0) {
            index = pages.length - 1;
        }
    }
    setupUI();
});

window.addEventListener("load", init);
