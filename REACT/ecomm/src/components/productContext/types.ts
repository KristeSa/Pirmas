import { TProduct } from "../../types/TProduct";

export type TProductContext = {
  products: TProduct[];

  setProducts: React.Dispatch<React.SetStateAction<TProduct[]>>;
};