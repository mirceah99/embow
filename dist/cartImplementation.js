import { showToast } from "./uiHelper.js";
export default class Cart {
    constructor(htmlElement, modal) {
        var _a;
        this.htmlElement = htmlElement;
        this.modal = modal;
        this.products = [];
        this.htmlElement = htmlElement;
        this.refreshCartProducts();
        // add bumpDuration to css
        (_a = document
            .querySelector(":root") // @ts-ignore: Unreachable code error
        ) === null || _a === void 0 ? void 0 : _a.style.setProperty("--bump-duration", Cart.bumpDuration + "ms");
        this.htmlElement.addEventListener("click", () => this.showModal());
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
    showModal() {
        this.modal.show();
        const total = { price: 0, quantity: 0 };
        this.products.reduce((total, product) => {
            total.price += product.price * product.quantity;
            total.quantity += product.quantity;
            return total;
        }, total);
        const orderDetails = `Hello!🤗🤗  #embow-store
Imi doresc sa comand urmatoarele produse:
${this.products.reduce((list, product) => list + `${product.text} ${product.quantity * product.price} RON \n`, "")}
-------------------------------
Total:${total.quantity}(produse) ... ${total.price} RON

Astept cu nerabdare raspunsul dvs pentru mai multe detalii.
    `;
        const content = `
                    <h2>Ai selectat urmatoare produse:</h2>
                    <table class="products-table">
                    ${this.products.reduce((list, product) => list +
            ` <tr>
                        <th>${product.text}</th>
                        <th> ${product.quantity * product.price} RON </th>
                        <!-- <th><img src="./assets/trash.svg"/></th> -->
                         </tr>
                        `, "")}
                    <tr>
                        <th>Total: ${total.quantity} (produse)</th>
                        <th> ${total.price} RON </th>
                    </tr>
                  </table>
                  <h2>Comanda:</h2>
                  <div class="order-products">
                      <a href="mailto:Em.bowstickers@gmail.com?body=${encodeURIComponent(orderDetails)}">
                      <img src="./assets/email.svg"/>
                      <p>Prin email</p>
                      </a>

                      <a id="order-sms" href="#">
                      <img src="./assets/phone.svg"/>
                      <p>Prin telefon</p>
                      </a>
                      </div>
                  `;
        this.modal.content.innerHTML = content;
        const orderSms = document.getElementById("order-sms");
        orderSms === null || orderSms === void 0 ? void 0 : orderSms.addEventListener("click", () => {
            // if in 0.7 seconds i did not leave the page it means sms is not supported
            setTimeout(() => {
                showToast("Sms nu este suportate pe acest device.");
            }, 700);
            //try to run sms schema
            location.href = `sms://+40747877160?body=${encodeURIComponent(orderDetails)}`;
        });
    }
}
Cart.bumpDuration = 150; // ms
