import { useContext } from "react";
import { ProductsContext } from "./ProductContext/ProductContext";

export const CheckoutComponent: React.FC = () => {
  const items = useContext(ProductsContext);

  return (
    <div>
      <h2>Checkout</h2>
      <div className="shopping-cart">
        {items.map((item: any) => (
          <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
