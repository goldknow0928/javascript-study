const boxes = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxes.classList.toggle("big"));

function toggleBox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div");

            box.classList.add("box");
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            boxes.appendChild(box);

            console.log(i, j);
        }
    }
}

toggleBox();

/**
 * 
 * 이중 for 문
 * 
 * 0 0
 * 0 1
 * 0 2
 * 0 3
 * 1 0
 * 1 1
 * 1 2
 * 1 3
 * 2 0
 * 2 1
 * 2 2
 * 2 3
 * 3 0
 * 3 1
 * 3 2
 * 3 3
 * 
 */
