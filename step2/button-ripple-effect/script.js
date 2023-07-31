const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
        //페이지 위치
        const x = e.pageX;
        const y = e.pageY;

        //버튼 위치
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //커서 위치
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        //circle
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    });
});
