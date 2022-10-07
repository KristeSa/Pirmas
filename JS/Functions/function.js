function myName(name) {
    alert(name)
}
alert("Kristina")

function generateRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
generateRandomNumber()

function calcNameLength(name) {
    const firstName = "Kristina"
    const lastName = "Saveiko"
    return firstName.length + lastName.length
}
calcNameLength("Kristina", "Saveiko")


function generateRandomNumber(randomNumber) {
    return Math.floor(Math.random() * 3) + 1;
}

const randomNumber = generateRandomNumber()
console.log(randomNumber)

document.getElementById('one').addEventListener('click', () => randomNumber === 1 ? alert('Yay') : alert('Nay'));
document.getElementById('two').addEventListener('click', () => randomNumber === 2 ? alert('Yay') : alert('Nay'));
document.getElementById('three').addEventListener('click', () => randomNumber === 3 ? alert('Yay') : alert('Nay'));


document.getElementById('four').addEventListener('click', () => {
    document.getElementById('four').innerText = "Neklausote manes";
});

document.querySelector('h1').addEventListener('mousemove', () => document.querySelector('h1').innerText = "Kiek galima neklausyti?")

