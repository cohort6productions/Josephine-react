export interface IService {
    itemName: string;
    img: "*.jpg" | "*.png";
    description: string;
    price?: string;
    linkFn?: () => void;
}
