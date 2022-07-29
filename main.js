const page = document.querySelector("body")
const container = document.querySelector(".container")
container.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);'

let divs;

for (let i = 0; i < 16 * 16; i++){
        divs = document.createElement('div');
        divs.classList.add('box');
        container.appendChild(divs);
}

const slider = document.createElement('input');
slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "16");
page.appendChild(slider);


slider.addEventListener('input', () => {
    console.log(slider.value)
    container.style.cssText = `display: grid; grid-template-columns: repeat(${slider.value}, 1fr); grid-template-rows: repeat(${slider.value},1fr);`
    container.innerHTML = ''
    for (let i = 0; i < slider.value * slider.value; i++){
        divs = document.createElement('div');
        divs.classList.add('box');
        container.appendChild(divs);
}
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.background = "black"
    })
})
})



const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.background = "black"
    })
})

