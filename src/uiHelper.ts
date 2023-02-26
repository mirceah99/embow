import Product from "./productImplementation.js";
import { product } from "./dataTypes.js";
import Cart from "./cartImplementation.js";
import Modal from "./modalImplementation.js";
export function addProductsToGrid(
  grid: HTMLDivElement,
  products: product[],
  cart: Cart
) {
  products.forEach((product) => {
    new Product(
      product.title,
      product.price,
      product.images,
      product.id,
      grid,
      cart
    );
  });
}
export function showToast(content: string) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar") as HTMLElement;
  x.innerHTML = content;
  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
export function showInfo(modal: Modal) {
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
export function showInfoInit(modal: Modal) {
  document.getElementById("show-info")?.addEventListener("click", () => {
    showInfo(modal);
  });
}
export function isIOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
export function createCarousel(selector: string, imageUrls: string[]) {
  const elem = $(selector);
  const content = imageUrls.reduce((output, imageUrl) => {
    return (output += `<div class="item"><img src="${imageUrl}"/></div>`);
  }, "");
  elem.addClass("owl-carousel owl-theme");
  elem.html(content);
  elem.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}
