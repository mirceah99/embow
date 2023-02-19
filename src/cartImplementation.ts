import { productLocalStorage } from "./dataTypes";
export default class Cart {
  static bumpDuration = 150; // ms
  private products: productLocalStorage[];
  constructor(private htmlElement: HTMLElement) {
    this.products = [];
    this.refreshCartProducts();

    // add bumpDuration to css
    document
      .querySelector(":root") // @ts-ignore: Unreachable code error
      ?.style.setProperty("--bump-duration", Cart.bumpDuration + "ms");
  }
  public refreshCartBadge() {
    this.refreshCartProducts();
    const quantity = this.calculateProductsNumber();
    if (quantity <= 0) {
      this.hideBadge();
      return;
    }
    this.htmlElement.setAttribute("value", quantity.toString());
    this.showBadge();
    this.bumpBadge();
  }
  public refreshCartProducts() {
    const productsFromLocalStorage: productLocalStorage[] = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      const key = localStorage.key(i);
      if (key === null) break;
      let item = localStorage.getItem(key);
      if (item === null) break;
      item = JSON.parse(item);
      if (item === null) break;
      productsFromLocalStorage.push(item as any);
    }
    this.products = productsFromLocalStorage;
  }
  public calculateProductsNumber(): number {
    return this.products.reduce((total, item) => total + item.quantity, 0);
  }
  public hideBadge() {
    this.htmlElement.classList.add("hide-badge");
  }
  public showBadge() {
    this.htmlElement.classList.remove("hide-badge");
  }
  public bumpBadge() {
    this.htmlElement.classList.add("bump");
    setTimeout(
      () => this.htmlElement.classList.remove("bump"),
      Cart.bumpDuration
    );
  }
}
