const legalAge = 20
const clientAge = 10

if (clientAge >= legalAge) {
    console.log("Legal age")
}
else {
    console.log("not legal age")
}


const name = "Kristina";
if ("Kristina".length >= 6) {
    console.log("Long name")
}


const age = 41
if (age > 100 || age <= 0) {
    console.log("Invalid age")
}

else if (age >= 1 && age <= 18) {
    console.log("Child")
}

else { console.log("Adult") }



// const VWcar = ["vw", "audi", "Bentley", "Bugatti", "Lamborghini", "Porshe"]
// const BMWcar = ["bmw", "Mini", "Rolls-Royce"]
const carName = prompt("what car?");
// if (carName = "VWcar") {
//     alert(VW)
// }

// else if (carName = "BMWcar") {
//     alert(BMW)
// }

if (carName === "vw" || carName === "audi" || carName === "Bentley" || carName === "Bugatti") {
    console.log("VWgroup")
}

else if (carName === "bmw" || carName === "Mini" || carName === "Rolls-Royce") {
    console.log("Bmwgroup")
}