const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
console.log(counter, slides.length - 1);

nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
    console.log("nextBtn: " + counter);
});

prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
    console.log("prevBtn: " + counter);
});

function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";
