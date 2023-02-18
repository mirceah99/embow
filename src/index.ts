import { addProductsToGrid } from "./uiHelper.js";
import { getProducts } from "./dataManger.js";

(async function loadPage() {
  const products = await getProducts(20, 0);
  const grid = document.querySelector(".products-grid") as HTMLDivElement;
  addProductsToGrid(grid, products);
})();
