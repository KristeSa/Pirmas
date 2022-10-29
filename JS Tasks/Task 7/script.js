/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
function showObjectKeys() {
  const audi = {
    make: "audi",
    model: "A6",
    year: 2005,
    color: "white",
  };

  const audiParams = Object.keys(audi);
  console.log(audiParams);
}
showObjectKeys();
