import Product from "./productImplementation.js";
import { product } from "./dataTypes.js";
import Cart from "./cartImplementation.js";
export function addProductsToGrid(
  grid: HTMLDivElement,
  products: product[],
  cart: Cart
) {
  products.forEach((product) => {
    new Product(
      product.title,
      product.price,
      product.images,
      product.id,
      grid,
      cart
    );
  });
}
