export interface IService {
    itemName: string;
    img: "*.jpg" | "*.png";
    description: string;
    orderNow: boolean;
    price?: string;
    sku?: string;
    linkFn?: any;
}

export interface IServiceItem {
    name: string;
    img: "*.jpg" | "*.png";
    description: string;
    orderNow: boolean;
    pricing: {
        // Plan for recurring plans, sku for one-time purchase
        scheme?: "plan" | "sku",
        schemeId?: string,
        price: string
    }
}

export const ACCEPT_FILETYPE = "application/pdf, image/*"