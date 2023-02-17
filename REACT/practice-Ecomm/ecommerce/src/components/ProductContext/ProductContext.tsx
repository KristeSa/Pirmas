import { createContext, useState } from "react";

export const ProductsContext = createContext<any[]>([]);
const products = [
  { id: 1, name: "t-shirt", price: 19 },
  { id: 2, name: "t-shirt", price: 25 },
  { id: 3, name: "pants", price: 35 },
  { id: 4, name: "pants", price: 49 },
  { id: 5, name: "jeans", price: 79 },
  { id: 6, name: "jeans", price: 65 },
  { id: 7, name: "sweater", price: 40 },
];

export const CartProvider = ({ children }: any) => {
  const [items, setItems] = useState<any[]>([]);
  const addToCart = ({ name, price }: any) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };

  return (
    <ProductsContext.Provider value={items}>
      {children}
    </ProductsContext.Provider>
  );
};
