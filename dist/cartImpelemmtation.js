export default class Cart {
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
  }
  refreshCartBadge() {
    this.getProductsFromCart();
  }
  getProductsFromCart() {
    const productsFromLocalStorage = [];
    for (var key in localStorage) {
    }
    return productsFromLocalStorage;
  }
}
