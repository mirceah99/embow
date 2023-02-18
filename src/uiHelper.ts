import Product from "./productImplementation.js";
import { product } from "./dataTypes.js";
export function addProductsToGrid(grid: HTMLDivElement, products: product[]) {
  products.forEach((product) => {
    new Product(product.title, product.price, product.images, product.id, grid);
  });
}
