import axios from "axios";
import { useEffect, useState } from "react";
import { NewPet } from "./NewPet";
import { PetLog } from "./PetLog";

export const PetCard = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPets = () => {
    axios
      .get("https://glittery-dull-snickerdoodle.glitch.me/v1/pets")
      .then((response) => setPets(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const deletePet = (id: any) => {
    const shouldDeletePet = window.confirm("Delete this pet?");

    if (!shouldDeletePet) {
      return;
    }
    axios
      .delete(`https://glittery-dull-snickerdoodle.glitch.me/v1/pets/${id}`)
      .then(() => fetchPets())
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <>
      <h1>Pet List</h1>
      {isLoading ? (
        <p>Loading pets</p>
      ) : (
        <div className="container">
          {pets.map((pet: any) => (
            <div className="pet-card" key={pet.id}>
              <h3>{pet.name}</h3>
              <p>{pet.dob}</p>
              <p>{pet.client_email}</p>
              <button className="orange-button" onClick={() => <PetLog />}>
                View pet
              </button>
              <button
                className="white-button"
                onClick={() => {
                  deletePet(pet.id);
                }}
                key={pet.id}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="add-new">
        <NewPet />
      </div>
    </>
  );
};
