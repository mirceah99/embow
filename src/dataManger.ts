import { product } from "./dataTypes";
export async function getProducts(
  numberOfProducts: number,
  page: number
): Promise<product[]> {
  return [
    {
      title: "Panda",
      price: 5,
      images: ["./img/panda/1.jpg", "./img/panda/2.jpg"],
      id: "id-b4f5ec92-1905-4c99-a80a-117f14576f69",
    },
    {
      title: "Cat",
      price: 4,
      images: ["./img/cat/1.jpg"],
      id: "id-c007455e-ca77-462d-a2e1-451888da5ec6",
    },
    {
      title: "Be Kind",
      price: 5,
      images: [
        "./img/be-kind/1.jpg",
        "./img/be-kind/4.jpg",
        "./img/be-kind/3.jpg",
      ],
      id: "id-e014b22f-c3ae-4d85-b583-f9fd01efac64",
    },
    {
      title: "Cute girl",
      price: 4,
      images: ["./img/cute-girl/1.jpg"],
      id: "id-f56bda20-64b8-4ad9-b026-4e4333a9ecc2",
    },
    {
      title: "Kimono girl",
      price: 5,
      images: ["./img/kimono-girl/1.jpg"],
      id: "id-e1df3036-c14d-4447-a6cc-61f2d8ee26cf",
    },
    {
      title: "Kaonashi",
      price: 4,
      images: ["./img/kaonashi/1.jpg"],
      id: "id-622c89d3-9f68-485a-b11e-be2be60f6359",
    },
    {
      title: "Jelly",
      price: 5,
      images: ["./img/jelly/1.jpg", "./img/jelly/2.jpg"],
      id: "id-1d450a85-3be8-4d7a-a262-87ad39449665",
    },
  ];
}
