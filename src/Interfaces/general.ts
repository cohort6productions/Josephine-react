export interface IService {
    itemName: string;
    img: "*.jpg" | "*.png";
    description: string;
    orderNow: boolean;
    price?: string;
    sku?: string;
    linkFn?: any;
}

export const ACCEPT_FILETYPE = "application/pdf, image/*"