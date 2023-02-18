export default class Product {
    constructor(title, price, images, id, container) {
        this.title = title;
        this.price = price;
        this.images = images;
        this.id = id;
        const localStorageValue = localStorage.getItem(id);
        if (localStorageValue !== null) {
            this.quantity = +localStorageValue;
        }
        else {
            this.quantity = 0;
        }
        const html = `<div class="product" href="#" id="${this.id}">
                            <div class="product-image">
                              <img src=".${this.images[0]}">
                            </div>
                            <div class="product-content">
                              <div class="product-info">
                                <h2 class="product-title">${this.title}</h2>
                                <p class="product-price">${this.price} RON</p>
                              </div>
                              <div class="quantity-section">
                                <input class="quantity-input" type="number" min="0" step="1" max="100"/>
                                <img class="quantity-button minus" src="./assets/minus-circle.svg"/>
                                <img class="quantity-button plus" src="./assets/plus-circle.svg"/>
                              </div>
                            </div>
                            </div>`;
        container.insertAdjacentHTML("beforeend", html);
        this.quantityInput = document.querySelector(`#${this.id} .quantity-input`);
        this.quantityInput.value = this.quantity.toString();
        this.minusButton = document.querySelector(`#${this.id} .minus`);
        this.plusButton = document.querySelector(`#${this.id} .plus`);
        this.refreshCounter();
        this.quantityInput.addEventListener("change", () => this.refreshCounter());
        this.minusButton.addEventListener("click", () => this.decrementQuantityInput());
        this.plusButton.addEventListener("click", () => this.incrementQuantityInput());
    }
    refreshCounter() {
        this.quantity = +this.quantityInput.value;
        if (this.quantity > 0) {
            localStorage.setItem(this.id, `${this.title} - ${this.quantity}`);
            this.minusButton.style.visibility = "visible";
            this.minusButton.style.opacity = "1";
            this.quantityInput.style.visibility = "visible";
            this.quantityInput.style.opacity = "1";
        }
        else {
            localStorage.removeItem(this.id);
            this.minusButton.style.visibility = "hidden";
            this.minusButton.style.opacity = "0";
            this.quantityInput.style.visibility = "hidden";
            this.quantityInput.style.opacity = "0";
        }
    }
    incrementQuantityInput() {
        this.quantityInput.value = (this.quantity + 1).toString();
        this.triggerQuantityInputChange();
    }
    decrementQuantityInput() {
        this.quantityInput.value = (this.quantity - 1).toString();
        this.triggerQuantityInputChange();
    }
    triggerQuantityInputChange() {
        this.quantityInput.dispatchEvent(new Event("change"));
    }
}
