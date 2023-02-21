import Product from "./productImplementation.js";
export function addProductsToGrid(grid, products, cart) {
    products.forEach((product) => {
        new Product(product.title, product.price, product.images, product.id, grid, cart);
    });
}
export function showToast(content) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = content;
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}
export function showInfo(modal) {
    modal.content.innerHTML = `
  <table class="contact-table">
  <tr>
    <th><img src = "./assets/instagram.svg"/></th>
    <th><a href="https://www.instagram.com/em.bow_stickers/?igshid=YmMyMTA2M2Y%3D">em.bow_stickers<a/></th>
  </tr>
  <tr>
  <th><img src = "./assets/youtube-pink.svg"/></th>
  <th><a href="https://www.youtube.com/@em.bow_">@em.bow_<a/></th>
  </tr>
  <tr>
  <th><img src = "./assets/email-pink.svg"/></th>
  <th><a href="mailto:Em.bowstickers@gmail.com">Em.bowstickers@gmail.com<a/></th>
  </tr>
  <tr>
  <th><img src = "./assets/phone-pink.svg"/></th>
  <th><a href="sms://+40747877160"<a/>0747 877 160</th>
  </tr>
  <tr>
  <th><img src = "./assets/tiktok-pink.svg"/></th>
  <th><a href="https://www.tiktok.com/@embow_stickers">@embow_stickers<a/></th>
  </tr>
</table>
  
  `;
    modal.show();
}
export function showInfoInit(modal) {
    var _a;
    (_a = document.getElementById("show-info")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        showInfo(modal);
    });
}
