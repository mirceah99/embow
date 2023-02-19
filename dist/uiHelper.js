import Product from "./productImplementation.js";
export function addProductsToGrid(grid, products, cart) {
    products.forEach((product) => {
        new Product(product.title, product.price, product.images, product.id, grid, cart);
    });
}
