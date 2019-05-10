export interface IService {
    itemName: string;
    img: "*.jpg" | "*.png";
    description: string;
    orderNow: boolean;
    price?: string;
    linkFn?: () => void;
}

export const ACCEPT_FILETYPE = "application/pdf, image/*"