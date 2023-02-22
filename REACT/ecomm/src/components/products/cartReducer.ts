import type { TproductsActionType } from "./productType";

export const cartReducer = (
    state: { productsCount: number },
    action: {
      type: TproductsActionType;
    }
  ) => {
    switch (action.type) {
      case "add-to-cart":
        return { productsCount: state.productsCount + 1 };
  
      case "remove-from-cart":
        return { productsCount: state.productsCount - 1 };
  
      default:
        return {
          ProductContext: state.productsCount,
        };
    }
  };