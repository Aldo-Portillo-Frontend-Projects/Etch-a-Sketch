const settings = document.querySelector(".settings")
const container = document.querySelector(".container")
container.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);'
let divs;

for (let i = 0; i < 16 * 16; i++){
        divs = document.createElement('div');
        divs.classList.add('box');
        container.appendChild(divs);
}

const sliderLabel = document.createElement("label")
sliderLabel.innerHTML = "Dimensions of grid"
const slider = document.createElement('input');
slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "16");
settings.appendChild(sliderLabel)
settings.appendChild(slider);

//const toggleGridLabel = document.createElement("label")
//toggleGridLabel.innerHTML = "Toggle Grid";
//settings.appendChild(toggleGridLabel);
//const toggleGridButton = document.createElement("button");
//const boxes = document.querySelectorAll(".box");
//boxes.style.cssText = 'border: 1px solid black;'
//toggleGridButton.addEventListener('click', () => {
 //   if (bo)
//})
//settings.appendChild(toggleGridButton)


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

