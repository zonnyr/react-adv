import { ReactElement } from "react";

export interface ProductCardsProps {
    product: Product,
    children?: ReactElement | ReactElement[]
  }
  
export interface Product {
    id: string;
    title: string;
    img?: string;
}
  
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardsHOCPros {
    ({ children, product }: ProductCardsProps): JSX.Element,
    Title: ({ title }: {title?: string | undefined;}) => JSX.Element
    Image: ({ img }: {img?: string | undefined;}) => JSX.Element
    Buttons: () => JSX.Element
}