export default class Cart {
    constructor(htmlElement) {
        var _a;
        this.htmlElement = htmlElement;
        this.products = [];
        this.refreshCartProducts();
        // add bumpDuration to css
        (_a = document
            .querySelector(":root") // @ts-ignore: Unreachable code error
        ) === null || _a === void 0 ? void 0 : _a.style.setProperty("--bump-duration", Cart.bumpDuration + "ms");
    }
    refreshCartBadge() {
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
    refreshCartProducts() {
        const productsFromLocalStorage = [];
        for (var i = 0, len = localStorage.length; i < len; ++i) {
            const key = localStorage.key(i);
            if (key === null)
                break;
            let item = localStorage.getItem(key);
            if (item === null)
                break;
            item = JSON.parse(item);
            if (item === null)
                break;
            productsFromLocalStorage.push(item);
        }
        this.products = productsFromLocalStorage;
    }
    calculateProductsNumber() {
        return this.products.reduce((total, item) => total + item.quantity, 0);
    }
    hideBadge() {
        this.htmlElement.classList.add("hide-badge");
    }
    showBadge() {
        this.htmlElement.classList.remove("hide-badge");
    }
    bumpBadge() {
        this.htmlElement.classList.add("bump");
        setTimeout(() => this.htmlElement.classList.remove("bump"), Cart.bumpDuration);
    }
}
Cart.bumpDuration = 150; // ms
