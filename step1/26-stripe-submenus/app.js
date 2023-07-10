import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");

const linkBtns = [...document.querySelectorAll(".link-btn")];
//▶ 도큐먼트 객체에서 class 속성 값이 'link-btn'인 모든 요소를 선택한다. 이 결과는 nodeList 객체 형태로 반환된다.
//▶ NodeList 객체를 배열로 변환한다. 이를 위해 전개 연산자('...')를 사용한다.
//▶ 변환된 배열을 'linkBtns'라는 상수에 할당한다.
//▶ 이 배열은 HTML 문서에서 class 속성 값이 'link-btn'인 모든 요소를 포함한다.

const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

// 사이드바 숨기기/표시
toggleBtn.addEventListener("click", () => {
    sidebarWrapper.classList.add("show");
});
closeBtn.addEventListener("click", () => {
    sidebarWrapper.classList.remove("show");
});

// 사이드바 설정
sidebar.innerHTML = sublinks
    .map((item) => {
        const { links, page } = item;
        return `<article>
        <h4>${page}</h4>
        <div class="sidebar-sublinks">
            ${links
                .map((link) => {
                    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
                })
                .join("")}
        </div>
    </article>`;
    })
    .join("");

linkBtns.forEach((btn) => {
    btn.addEventListener("mouseover", function (e) {
        const text = e.currentTarget.textContent;
        const tempBtn = e.currentTarget.getBoundingClientRect();
        //▶ getBoundingClientRect()는 DOM 요소의 크기와 위치 정보를 제공하는 메서드이다. 메서드를 호출하면 해당 요소의 왼쪽, 위쪽, 오른쪽, 아래쪽 모서리의 좌표와 해당 요소의 너비와 높이 등을 반환한다.

        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        const tempPage = sublinks.find((link) => link.page === text);

        if (tempPage) {
            const { page, links } = tempPage;

            submenu.classList.add("show");
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;

            //옵션
            let columns = `col-2`;
            if (links.length === 3) {
                columns = "col-3";
            }

            if (links.length > 3) {
                columns = "col-4";
            }

            submenu.innerHTML = `
            <section>
                <h4>${page}</h4>
                <div class="submenu-center ${columns}">
                ${links
                    .map((link) => {
                        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
                    })
                    .join("")}
                </div>
            </section>
            `;
        }
    });
});

hero.addEventListener("mouseover", function (e) {
    submenu.classList.remove("show");
});

nav.addEventListener("mouseover", function (e) {
    if (!e.target.classList.contains("link-btn")) {
        submenu.classList.remove("show");
    }
});
