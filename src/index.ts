import { addProductsToGrid } from "./uiHelper.js";
import { getProducts } from "./dataManger.js";
import Cart from "./cartImplementation.js";
import Modal from "./modalImplementation.js";
(async function loadPage() {
  const modal = new Modal();
  const cart = new Cart(
    document.querySelector(".shopping-cart") as HTMLElement,
    modal
  );
  const products = await getProducts(20, 0);
  const grid = document.querySelector(".products-grid") as HTMLDivElement;
  addProductsToGrid(grid, products, cart);
})();
