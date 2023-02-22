import { useContext, useReducer } from "react";
// import { TProduct } from "../../types/TProduct";
import { ProductContext } from "../productContext";
import { cartReducer } from "./cartReducer";

export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);

  console.log(products);

  // const handleAddTCart = (product: TProduct, index: number) => {
  //   const modifiedProducts = [...products];

  const [state, dispatch] = useReducer(cartReducer, { products });

  const addToCart = () => {
    dispatch({ type: "add-to-cart" });
  };

  const removeFromCart = () => {
    dispatch({ type: "remove-from-cart" });
  };

  // modifiedProducts[index] = {
  //   ...modifiedProducts[index],
  //   amount: modifiedProducts[index].amount + 1,
  // };

  // modifiedProducts[index] = {
  //   ...product,
  //   amount: product.amount + 1,
  // };

  // const newProducts = products.map((curProduct) => {
  //   const isSelectedProduct = curProduct.id === product.id;

  //   return {
  //     ...curProduct,
  //     amount: isSelectedProduct ? curProduct.amount + 1 : curProduct.amount,
  //   };
  // });

  //   setProducts(modifiedProducts);
  // };

  return (
    <>
      <h2 className="products-list-header">PRODUCTS LIST</h2>
      <div className="products-list">
        {products.map((product, i) => (
          <div key={`${product.id}-${i}`}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
