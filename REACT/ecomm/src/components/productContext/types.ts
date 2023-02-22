import { Dispatch, SetStateAction } from "react";
import { TCartProduct } from "../../types/TCartProduct";
import { TProduct } from "../../types/TProduct";


// export type TProductContext = TProductsState & {
//   dispatch: Dispatch<any>;
// };


export type TProductContext = {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;

  cartProducts: TCartProduct[];
  setCartProducts: Dispatch<SetStateAction<TProduct[]>>;
};

export type TProductsState ={
  products: TProduct[]
  cartProducts: TCartProduct[]
}