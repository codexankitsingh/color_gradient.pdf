const body = document.querySelector('body');
const leftInput = document.querySelector("#leftcolor")
const rightInput = document.querySelector("#rightcolor");
const chaneGradient = document.querySelector(".change-gradient");
const cssOutput = document.querySelector(".css-output");
const randomGradient = document.querySelector(".random-gradient");

// getting colors
let leftColor = leftInput.value;
let rightColor = rightInput.value;

console.log(leftColor, rightColor);
const changeBackground = (leftColor,rightColor) =>{
    const cssString = `linear-gradient(to right, ${leftColor},${rightColor})`;
    body.style.background = cssString;


    cssOutput.textContent = `background: ${cssString}`;
}
// adding events on inputs
leftInput.addEventListener("change", (event) =>{
    leftColor = event.target.value;
});

rightInput.addEventListener("change",(event) =>{
    rightColor = event.target.value;
});

// adding event on change button
chaneGradient.addEventListener("click", ()=>{
    changeBackground(leftColor, rightColor);
});

cssOutput.addEventListener("change", ()=>{
    const cssCode = `background:linear-gradient(to right, ${leftColor}, ${rightColor})`;
    cssOutput.value = cssCode;
})


// generate random gradient
function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}


randomGradient.addEventListener("click", () =>{
    let color1 = getRandomHexColor();
    let color2 = getRandomHexColor();
    changeBackground(color1, color2);
})