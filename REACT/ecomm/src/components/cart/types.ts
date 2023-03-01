export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }
  
  export interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  }
  
 export interface CartState {
    items: CartItem[];
    total: number;
    loading: boolean;
  }

  export type Action =
    | { type: 'ADD_ITEM'; payload: Product }
    | { type: 'REMOVE_ITEM'; payload: CartItem }
    | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[] };
  
  export type Reducer = (state: CartState, action: Action) => CartState;
  
  export const initialState: CartState = {
    items: [],
    total: 0,
    loading: true,
  };