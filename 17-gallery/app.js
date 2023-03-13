function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    // throw : 사용자 정의 예외를 발생
    throw new Error(`Please check "${selection}" selector, no such element exist`);
}

function Gallery(element) {
    this.container = element;
    // ... 구문은 spread 문법이며, NodeList를 배열로 변환
    this.list = [...element.querySelectorAll(".img")];
    // target
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    // container event
    this.container.addEventListener(
        "click",
        function (e) {
            // self.openModal();
            if (e.target.classList.contains("img")) {
                this.openModal(e.target, this.list);
            }
        }.bind(this)
    );
}

Gallery.prototype.openModal = function (selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
        // map 함수가 문자열 형태로 값을 리턴할 때는 기본적으로 쉼표로 묶어서 리턴한다.
        .map(function (image) {
            return `<img src="${
                image.src
            }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
        })
        // 쉼표 없애기
        .join("");

    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
};

Gallery.prototype.setMainImage = function (selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
};

Gallery.prototype.closeModal = function () {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
};

Gallery.prototype.nextImage = function () {
    const selected = this.modalImages.querySelector(".selected");
    const next = selected.nextElementSibling || this.modalImages.firstElementChild;

    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
};

Gallery.prototype.prevImage = function () {
    const selected = this.modalImages.querySelector(".selected");
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;

    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
};

Gallery.prototype.chooseImage = function (e) {
    if (e.target.classList.contains("modal-img")) {
        const selected = this.modalImages.querySelector(".selected");
        selected.classList.remove("selected");

        this.setMainImage(e.target);
        e.target.classList.add("selected");
    }
};

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));


/* 

Q.
**throw**문은 사용자 정의 예외를 발생(throw)할 수 있습니다. 
예외가 발생하면 현재 함수의 실행이 중지되고 (throw 이후의 명령문은 실행되지 않습니다.), 제어 흐름은 콜스택의 첫 번째 catch 블록으로 전달됩니다. 
호출자 함수 사이에 catch 블록이 없으면 프로그램이 종료됩니다. 

-------------------------------------------------------------------------------

Q. 자바스크립트 removeEventListener 쓰는 이유

JavaScript에서 addEventListener() 함수를 사용하여 이벤트를 등록할 수 있습니다. 이벤트는 특정 액션이 발생했을 때 코드를 실행할 수 있도록 해줍니다.

removeEventListener() 함수는 addEventListener() 함수와 반대로, 이벤트를 등록 해제하는 데 사용됩니다. 이 함수를 사용하여 등록된 이벤트를 제거하면, 해당 이벤트가 다시 발생하지 않도록 할 수 있습니다.

removeEventListener() 함수를 사용하는 이유는 다음과 같습니다.

1. 불필요한 이벤트 처리 방지
이벤트는 사용자의 액션에 응답하여 실행되기 때문에, 사용자가 다양한 액션을 취할 때마다 이벤트가 발생합니다. 이벤트가 지속적으로 발생하면, 불필요한 처리가 발생하여 애플리케이션의 성능이 저하될 수 있습니다. removeEventListener() 함수를 사용하여 이벤트를 등록 해제하면, 이벤트 발생을 제어할 수 있으므로 불필요한 처리를 방지할 수 있습니다.

2. 메모리 누수 방지
addEventListener() 함수를 사용하여 이벤트를 등록하면, 등록된 이벤트는 메모리에 유지됩니다. 이벤트 처리가 끝난 후, 이벤트를 등록 해제하지 않으면, 메모리 누수가 발생하여 성능 저하나 애플리케이션 충돌 등의 문제가 발생할 수 있습니다. removeEventListener() 함수를 사용하여 이벤트를 등록 해제하면, 등록된 이벤트를 메모리에서 해제할 수 있으므로 메모리 누수를 방지할 수 있습니다.

따라서, 이벤트가 필요하지 않을 때는 반드시 removeEventListener() 함수를 사용하여 등록을 해제해야 합니다.




*/