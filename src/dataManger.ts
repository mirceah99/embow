import { product } from "./dataTypes";
export async function getProducts(
  numberOfProducts: number,
  page: number
): Promise<product[]> {
  return [
    {
      title: "Panda",
      price: 5,
      images: ["./img/panda/1.JPG", "./img/panda/2.JPG"],
      id: "id-b4f5ec92-1905-4c99-a80a-117f14576f69",
    },
    {
      title: "Cat",
      price: 4,
      images: ["./img/cat/1.JPG"],
      id: "id-c007455e-ca77-462d-a2e1-451888da5ec6",
    },
    {
      title: "Be Kind",
      price: 5,
      images: [
        "./img/be-kind/1.JPG",
        "./img/be-kind/4.JPG",
        "./img/be-kind/3.JPG",
      ],
      id: "id-e014b22f-c3ae-4d85-b583-f9fd01efac64",
    },
    {
      title: "Cute girl",
      price: 4,
      images: ["./img/cute-girl/1.JPG"],
      id: "id-f56bda20-64b8-4ad9-b026-4e4333a9ecc2",
    },
    {
      title: "Kimono girl",
      price: 5,
      images: ["./img/kimono-girl/1.JPG"],
      id: "id-e1df3036-c14d-4447-a6cc-61f2d8ee26cf",
    },
    {
      title: "Kaonashi",
      price: 4,
      images: ["./img/kaonashi/1.JPG"],
      id: "id-622c89d3-9f68-485a-b11e-be2be60f6359",
    },
    {
      title: "Jelly",
      price: 5,
      images: ["./img/jelly/1.JPG", "./img/jelly/2.JPG"],
      id: "id-1d450a85-3be8-4d7a-a262-87ad39449665",
    },
    {
      title: "Magical Astronaut",
      price: 5,
      images: ["./img/magical-astronaut/1.JPG"],
      id: "id-7d849159-b5d4-45f8-bf9f-4b031aac96fc",
    },
    {
      title: "Nature",
      price: 5,
      images: ["./img/nature/1.JPG"],
      id: "id-d1e24ac7-41f5-4247-8c20-9064694a86d0",
    },
    {
      title: "Anime girl",
      price: 5,
      images: ["./img/anime-girl/1.JPG"],
      id: "id-e9d8240b-374f-4df4-b543-4966b4dd0ee8",
    },
    {
      title: "Teacat",
      price: 5,
      images: ["./img/teacat/1.JPG", "./img/teacat/2.JPG"],
      id: "id-e4ff7d46-7954-4aaf-a822-07079d61230e",
    },
    {
      title: "Wednesday",
      price: 6,
      images: ["./img/wednesday/1.JPG"],
      id: "id-0a71f28b-28e2-4077-b615-dbdfcce33430",
    },
    {
      title: "Jupiter Cat",
      price: 4,
      images: ["./img/jupiter-cat/1.jpeg"],
      id: "id-3cf29428-a079-43bd-9f8a-b3778d360ba7",
    },
    {
      title: "Avocuddles",
      price: 5,
      images: ["./img/avocuddles/1.JPG", "./img/avocuddles/2.JPG"],
      id: "id-50b33132-411e-42d5-88b4-f79d1bc1ab1b",
    },
    {
      title: "Cute faces",
      price: 7,
      images: ["./img/cute-faces/1.JPG"],
      id: "id-d34734fc-def8-4994-9c72-42937108fd75",
    },
    {
      title: "Little cow",
      price: 5,
      images: ["./img/cow/1.JPG"],
      id: "id-383ce05d-d4aa-4f6d-95dd-1a97a1006453",
    },
    {
      title: "Girl Power",
      price: 5,
      images: ["./img/girl-power/1.JPG"],
      id: "id-d8d41cc9-6824-4f6f-ab3a-41393f439138",
    },
    {
      title: "Strawberry milk",
      price: 5,
      images: ["./img/strawberry-milk/1.JPG"],
      id: "id-32b7184d1-5a63-4a75-a93f-515e1bd5b43e",
    },
  ];
}
