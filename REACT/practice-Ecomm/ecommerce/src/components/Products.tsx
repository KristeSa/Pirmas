import { Card } from "./Card";

export const Products = ({ name, price }: any) => {
  const products = [
    { id: 1, name: "t-shirt", price: 19 },
    { id: 2, name: "t-shirt", price: 25 },
    { id: 3, name: "pants", price: 35 },
    { id: 4, name: "pants", price: 49 },
    { id: 5, name: "jeans", price: 79 },
    { id: 6, name: "jeans", price: 65 },
    { id: 7, name: "sweater", price: 40 },
  ];

  return (
    <div className="items-container">
      {products &&
        products.map((product) => (
          <Card name={product.name} price={product.price} />
        ))}
    </div>
  );
};
