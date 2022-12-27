import { getCars } from "./getCars";

const carDeleteButton = document.querySelector("#car-delete");
const id = car.id;

const deleteCar = async () => {
  try {
    const response = await fetch(`http://localhost:5008/car/${id}`, {
      method: "DELETE",
    });

    const isCarDeleted = response.ok;

    if (isCarDeleted) {
      await getCars();
    }
  } catch (err) {
    console.log(err);
  }
};
carDeleteButton.addEventListener("click", deleteCar);
