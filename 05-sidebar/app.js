const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
    sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
});

/**
 * classList
 * --> add(string) : 지정한 클래스 값 추가
 * --> remove(string) : 지정한 클래스 값 제거
 * --> contains(string) : 지정한 클래스 값이 존재하는지 확인, true/false 반환
 * --> repalce(old, new) : old 클래스를 new 클래스로 대체
 * --> item(number) : 인덱스 값을 활용하여 클래스 값을 반환
 * 
 * ==> add 와 remove를 동시에 쓰는게 toggle 이다
 */