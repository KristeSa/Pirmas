const addCarForm = document.body.querySelector("form#add-car-form");

addCarForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const carPrice = +document.querySelector("#car-price-input").value.trim();
  const carImage = document.querySelector("#car-image-input").value.trim();
  const carTitle = document.querySelector("#car-title-input").value.trim();
  const carNumberplates = document
    .querySelector("#car-numberplates-input")
    .value.trim();

  try {
    const response = await fetch("http://localhost:5008/car", {
      method: "POST",
      body: JSON.stringify({
        price: carPrice,
        title: carTitle,
        image: carImage,
        numberplates: carNumberplates,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    if (response.ok) {
      alert("Car successfully added");
      const route = location.pathname; // pvz. .../addProduct.html
      const redirectRoute = route.replace("addCar", "cars");
      location.assign(redirectRoute);
    }
  } catch (error) {
    console.error(error);
  }
});
