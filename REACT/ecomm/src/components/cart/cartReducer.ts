import { CartState, CartItem } from './types';
import type {Action} from './types';



export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case 'REMOVE_ITEM':
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, index),
            ...state.items.slice(index + 1),
          ],
          total: state.total - (action.payload.price * action.payload.quantity),
        };
      }
      return state;
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload.map((product) => ({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
        })),
      };
    default:
      return state;
  }
}