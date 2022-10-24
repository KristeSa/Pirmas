//Pridėkite dar vieną modulį, pavadinimu cars.js. Šis turės funkciją,
//kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML).
//Tačiau šį kartą - funkcija viduj turės array (["BMW", "VW", "AUDI", "MB"]).
//O su innerHTML bus map metodas panaudotas ant array, kuris atvaizduos <ul> tag'e
//sugeneruos po kiekvieną automobilį <li> elemente (t.y. <ul> ${array.map((item) => <li></li>} </ul>)

const renderCars = (car) => {
  const allCars = document.createElement("ul");
  const cars = ["BMW", "VW", "AUDI", "MB"];
  cars.map((car) => {
    // const bmwCar = document.createElement("li");
    // bmwCar.textContent = "BMW";

    // const vwCar = document.createElement("li");
    // vwCar.textContent = "VW";

    // const audiCar = document.createElement("li");
    // audiCar.textContent = "AUDI";

    // const mbCar = document.createElement("li");
    // mbCar.textContent = "MB";

    const carList = document.createElement("li");

    carList.append(car);
    allCars.append(carList);
    document.body.append(allCars);
  });
};

export { renderCars };
