import { product } from "./dataTypes";
export function addProductsToGrid(grid: HTMLDivElement, products: product[]) {
  products.forEach((product) => {
    const productHtml = `<a class="product" href="#">
                            <div class="product-image">
                              <img src=".${product.images[0]}">
                            </div>
                            <div class="product-content">
                              <div class="product-info">
                                <h2 class="product-title">${product.title}</h2>
                                <p class="product-price">${product.price} RON</p>
                              </div>
                              <div class="quantity-section">
                                <input class="quantity-input" type="number" min="0" step="1" max="100"/>
                                <img class="quantity-button" src="./assets/plus-circle.svg"/>
                                <img class="quantity-button" src="./assets/minus-circle.svg"/>
                              </div>
                            </div>
                            </a>`;

    grid.innerHTML += productHtml;
  });
}
