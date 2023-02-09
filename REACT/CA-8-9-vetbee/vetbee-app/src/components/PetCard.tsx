import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PetCard = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchPets();
  }, []);

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

  const handleViewLog = (id: number) => {
    navigate(`/logs/${id}`);
  };

  return (
    <>
      <div className="top-menu">
        <h1>Pet List</h1>
        <button
          className="top-orange-button"
          onClick={(event) => (window.location.href = "/add-pet")}
        >
          ADD PET
        </button>
      </div>
      {isLoading ? (
        <p>Loading pets</p>
      ) : (
        <div className="container">
          {pets.map((pet: any) => (
            <div className="pet-card" key={pet.id}>
              <h3>{pet.name}</h3>
              <p>{pet.dob}</p>
              <p>{pet.client_email}</p>
              <button
                className="orange-button"
                onClick={() => handleViewLog(pet.id)}
              >
                VIEW PET
              </button>
              <button
                className="white-button"
                onClick={() => {
                  deletePet(pet.id);
                }}
                key={pet.id}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
