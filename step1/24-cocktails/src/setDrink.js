const setDrink = (section) => {
    section.addEventListener("click", function (e) {
        // e.preventDefault();
        const id = e.target.parentElement.dataset.id; //클릭한 요소의 부모 요소 중 data-id 속성 값을 가져온다.
        // JSON.stringfy JSON.parse
        localStorage.setItem("drink", id); //가져온 id값을 로컬 스토리지에 drink라는 키로 저장한다.
    });
};

export default setDrink;
