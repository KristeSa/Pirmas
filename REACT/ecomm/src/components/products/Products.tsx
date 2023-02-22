import { ProductContext } from "../ProductContext";
import { useContext, useReducer } from "react";
// import { TProduct } from "../../types/TProduct";
import { cartReducer, Types } from "./cartReducer";
import { ShoppingContext } from "../ProductContext/ProductContext";
import { TCartProduct } from "../../types/TCartProduct";

export const Products = () => {
  const { products, setProducts } = useContext(ProductContext);

  console.log(products);

  const { dispatch } = useContext(ShoppingContext);

  const addToCart = (product: TCartProduct) => {
    dispatch({ type: Types.ADD_TO_CART, payload: product });
  };

  // const handleAddTCart = (product: TProduct, index: number) => {
  //   const modifiedProducts = [...products];

  // const [state, dispatch] = useReducer(cartReducer, products);

  // const addToCart = () => {
  //   dispatch({ type: Types.ADD_TO_CART });
  // };

  // const removeFromCart = () => {
  //   dispatch({ type: "remove-from-cart" });
  // };

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
            <button
              onClick={() => {
                addToCart;
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
