const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
        // 다른 버튼에서 선택한 항목 제거
        btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        // 다른 기사 숨기기
        articles.forEach((article) => {
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

/**
 * target과 currentTarget
 * 
 * target은 이벤트가 발생한 바로 그 요소를 직접 가리킨다
 * currentTarget은 이벤트 리스너를 가진 요소를 가리킨다
 */