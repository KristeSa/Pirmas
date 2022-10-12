//Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių.
//Jam resolve - išoka alert "yes, veikia!".
//Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

let promise = new Promise((resolve) => {
  setTimeout(() => resolve("yes, veikia"), 5000);
});

promise.then(alert);

//Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

let pazadas = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadas.then(() => alert("veikia")).catch(() => alert("neveikia"));

//Then bendrauja su kitu then.
//Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas -
//pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message",
//šią žinutę pagauna antrasis then() ir ją alertina.

let pazadasVienas = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadasVienas
  .then(() => "this is a message")
  .then((message) => alert(message))
  .catch(() => alert("neveikia"));
