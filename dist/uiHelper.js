import Product from "./productImplementation.js";
export function addProductsToGrid(grid, products) {
    products.forEach((product) => {
        new Product(product.title, product.price, product.images, product.id, grid);
    });
}
