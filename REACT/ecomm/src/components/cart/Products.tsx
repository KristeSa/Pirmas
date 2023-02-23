import { useEffect, useReducer, useState } from "react";
import { cartReducer } from "./cartReducer";
import { Reducer, initialState, Product, CartItem } from "./types";

export const Products = () => {
  const [state, dispatch] = useReducer<Reducer>(cartReducer, initialState);

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data })
      )
      .catch((error) => console.log(error));
  }, []);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Products</h1>
      <div className="main-container">
        {state.items.map((item, i) => (
          <div key={i} className="item-container">
            <img className="item-image" src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <h3>{item.price}</h3>
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <p>Total: {state.total}</p>
    </>
  );
};
