import { useReducer, useState } from "react";
import { cartReducer } from "./cartReducer";
import { CartItem, initialState, Reducer } from "./types";

export const Cart = () => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [state, dispatch] = useReducer<Reducer>(cartReducer, initialState);

  const removeItem = (item: CartItem) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItem.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
            <span>{item.price}</span>
            <button onClick={() => removeItem(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total: {state.total}</p>
    </>
  );
};
