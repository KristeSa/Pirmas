function getLetterByIndex(index) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Z"];
    return letters[index];
}
console.log(getLetterByIndex(7))

function sum(a1, a2) {
    return a1 + a2
}
console.log(sum(5, 7));


function calc(n1, n2, operator) {
    switch (operator) {
        case "sum":
            return n1 + n2;
        case "sub":
            return n1 - n2;
        case "div":
            return n1 / n2;
        case "multi":
            return n1 * n2;
    }
}
console.log(calc(8, 2, "sub"))


function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
function squareNumber(number) {
    return Math.pow(number, 2);
}
console.log(squareNumber(generateRandomNumber()))


//<h1>0</h1>
//<button>+1</button>

//let counter = 0
//   document.querySelector("button").addEventListener("click", () => {
//counter++;
//   document.querySelector('h1').innerText = counter;
//     });

//    < p > Lorem...</p >
//       document.querySelector('p').addEventListener("copy", sayText)

//function sayText() {
//    alert("don't copy")
//}

//
//Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
document.querySelector("button").addEventListener("click", () => {
    const randomNumber = generateRandomNumber();
    document.querySelector("h1").innerText = randomNumber;
});

//Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

//<h1></h1>
//<button class=first>Turiu bent 18 metų</button>
//<button class=second>Mažiau nei 18 metų</button>

document.querySelector(".first").addEventListener("click", sayAlus)

function sayAlus() {
    document.querySelector("h1").innerText = "Alus";
}

document.querySelector(".second").addEventListener("click", sayNieko)

function sayNieko() {
    alert("nepilnametis - nieko neturim")
}
// kitas variantas:
//document.getElementById('adult').addEventListener('click', () => document.getElementById('output').innerText = 'Alus');
//document.getElementById('child').addEventListener('click', () => alert('nepilnametis - nieko neturim'));

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}
console.log(randomNumber)