import axios from "axios";
import { useState } from "react";

export const AddOrder = ({ fetchOrders }: any) => {
  const [newOrder, setNewOrder] = useState({
    id: null,
    people: null,
    price: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    prop: string
  ) => {
    setNewOrder({
      ...newOrder,
      [prop]: event.target.value,
    });
  };

  const handleProductSubmit: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();

    axios
      .post("https://believed-shore-vanadium.glitch.me", {
        title: newOrder.id,
        image: newOrder.people,
        price: newOrder.price,
      })
      .then(() => fetchOrders())
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleProductSubmit}>
      <div className="card">
        <input
          value={newOrder.id ?? ""}
          onChange={(event) => handleInputChange(event, "id")}
          placeholder="Order Id"
        />

        <input
          value={newOrder.people ?? ""}
          onChange={(event) => handleInputChange(event, "people")}
          placeholder="People"
        />

        <input
          value={newOrder.price ?? ""}
          onChange={(event) => handleInputChange(event, "price")}
          placeholder="Price"
          type="number"
        />

        <button>Add order</button>
      </div>
    </form>
  );
};
