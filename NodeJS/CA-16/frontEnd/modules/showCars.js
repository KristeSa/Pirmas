const showCars = (cars) => {
  const output = document.querySelector("#output");

  cars.forEach((car) => {
    const carBrandCard = document.createElement("div");
    const carNumberplates = document.createElement("h1");
    const carTitle = document.createElement("h3");
    const carImage = document.createElement("img");
    const carPrice = document.createElement("h4");
    const carDelete = document.createElement("p");

    carNumberplates.innerHTML = car.numberplates;
    carTitle.innerHTML = car.title;
    carImage.src = car.image;
    carPrice.innerHTML = car.price;
    carDelete.innerHTML = "DELETE";

    carBrandCard.setAttribute("class", "car-card");
    carNumberplates.setAttribute("id", "car-numberplates");
    carTitle.setAttribute("id", "car-title");
    carImage.setAttribute("id", "car-image");
    carPrice.setAttribute("id", "car-price");
    carDelete.setAttribute("id", "car-delete");

    carBrandCard.append(
      carNumberplates,
      carTitle,
      carImage,
      carPrice,
      carDelete
    );
    output.append(carBrandCard);

    //const id = car.id;

    // const deleteCar = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:5008/car/${id}`, {
    //       method: "DELETE",
    //     });

    //     const isCarDeleted = response.ok;

    //     if (isCarDeleted) {
    //       await getCars();
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // carDeleteButton.addEventListener("click", deleteCar);
  });
};

export { showCars };
