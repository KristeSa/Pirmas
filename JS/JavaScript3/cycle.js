let i = 0;

while (i < 4) {
    console.log("Kristina")
    i++
}

let combo = ""
const firstName = "Kristina"
let times = 5;

do {
    combo += firstName;
    times--;
} while (times > 0)
console.log(combo);

const random1 = Math.floor(Math.random() * 5) + 1;
console.log(random1)

const random2 = Math.random() * (12 - 5 + 1) + 5 | 0;
console.log(random2)

const random3 = Math.floor(Math.random() * 5) + 1;

if (+random3 === 3) {
    alert("You won")
    console.log({ random3 })
} else {
    alert("Try again")
    console.log({ random3 })
}