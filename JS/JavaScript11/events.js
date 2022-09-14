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

    < p > Lorem...</p >
        document.querySelector('p').addEventListener("copy", sayText)

function sayText() {
    alert("don't copy")
}


