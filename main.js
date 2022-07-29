const page = document.querySelector("body")
const container = document.querySelector(".container")
container.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);'

let divs;

for (let i = 0; i < 16 * 16; i++){
        divs = document.createElement('div');
        divs.classList.add('box');
        container.appendChild(divs);
    
}

const button = document.createElement('button');
page.appendChild(button);

button.addEventListener('click', () => {
    let x = prompt('Pick a number')
    container.style.cssText = `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x},1fr);`
    container.innerHTML = ''
    for (let i = 0; i < x * x; i++){
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

