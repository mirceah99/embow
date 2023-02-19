import { addProductsToGrid } from "./uiHelper.js";
import { getProducts } from "./dataManger.js";
import Cart from "./cartImplementation.js";
(async function loadPage() {
  const cart = new Cart(
    document.querySelector(".shopping-cart") as HTMLElement
  );
  const products = await getProducts(20, 0);
  const grid = document.querySelector(".products-grid") as HTMLDivElement;
  addProductsToGrid(grid, products, cart);
})();
