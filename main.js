const container = document.querySelector(".container")

let divs;

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        divs = document.createElement('div');
        divs.classList.add('box');
        container.appendChild(divs);
    }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.background = "black"
    })
})