import { product } from "./dataTypes";
export async function getProducts(
  numberOfProducts: number,
  page: number
): Promise<product[]> {
  return [
    {
      title: "Carrot",
      price: 3,
      images: ["/img/carrot/1.png", "/img/carrot/2.png", "/img/carrot/3.webp"],
    },
    {
      title: "Tomato",
      price: 5,
      images: ["/img/tomato/1.jpg", "/img/tomato/2.webp", "/img/tomato/3.jpg"],
    },
    {
      title: "Cosmonaut",
      price: 10,
      images: ["/img/cosmonaut/1.webp"],
    },
  ];
}
