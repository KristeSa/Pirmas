import { TProduct, TProductsAction } from "../ProductContext/types";

export type TProductProps = {
    product: TProduct;
}

export type TProductActionButtonProps = {
    productId: number;
    title: string;
    type: TProductsAction["type"];
}