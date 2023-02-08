import axios from "axios";
import { useState } from "react";
import { Button } from "./Button";

export const AddOrder = ({ fetchOrders }: any) => {
  const [price, setPrice] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);

  // const handleInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   prop: string
  // ) => {
  //   setNewOrder({
  //     ...newOrder,
  //     [prop]: event.target.value,
  //   });
  // };

  const resetForm = () => {
    setPrice(null);
    setPeople(null);
  };
  const addRow = () => {
    axios
      .post("https://believed-shore-vanadium.glitch.me", {
        price,
        people,
      })
      .then(() => resetForm())
      .catch((error) => console.error(error));
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addRow();
      }}
    >
      <input
        placeholder="People"
        type="number"
        value={people ?? ""}
        onChange={(event) => {
          let newPeople: string | null | number = event.target.value;

          if (newPeople === "") {
            newPeople = null;
          } else {
            newPeople = +newPeople;
          }
          setPeople(newPeople);
        }}
      />

      <input
        placeholder="Price"
        type="number"
        value={price ?? ""}
        onChange={(event) => {
          let newPrice: string | null | number = event.target.value;

          if (newPrice === "") {
            newPrice = null;
          } else {
            newPrice = +newPrice;
          }
          setPrice(newPrice);
        }}
      />

      <Button />
    </form>
  );
};
