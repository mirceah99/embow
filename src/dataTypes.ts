export interface product {
  title: string;
  price: number;
  images: string[]; // array of url
  id: string;
}
export interface productLocalStorage {
  quantity: number;
  isProductLocalStorage: true;
  text: string;
  id: string;
  price: number;
}
