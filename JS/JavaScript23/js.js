document.getElementById("name").addEventListener("input", event => {

const name = event.target.value;
document.body.style.backgroundColor=name.length <3?"red": "green"
});

const buttonColors = ["red", "green", "blue", "yellow"];
document.getElementById("button1").addEventListener("click", event => {
    const randomIndex = Math.round(Math.random()*4)
    event.target.style.backgroundColor=buttonColors[randomIndex]
});
function generateRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random()*(max-min+1));
    const r =randomBetween (0,255)
    const g =randomBetween (0,255)
    const b =randomBetween (0,255)
    
    return `rgb(${r},${g},${b})`
}

document.getElementById("button2").addEventListener("click", event => {
    event.target.style.backgroundColor=generateRandomColor();
});