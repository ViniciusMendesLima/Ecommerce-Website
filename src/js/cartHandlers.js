import { updateTotal } from './cartTotal.js';

export function buyButtonClicked() {
  alert('Your Order is Placed');
  const cartContent = document.querySelector('.cart-content');
  while (cartContent.firstChild) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

export function removeCartItem(event) {
  event.target.closest('.cart-box').remove();
  updateTotal();
}

export function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) input.value = 1;
  updateTotal();
}

export function addCartClicked(event) {
  const button = event.target;
  const product = button.closest('.product-box');
  const title = product.querySelector('.product-title').innerText;
  const price = product.querySelector('.price').innerText;
  const imgSrc = product.querySelector('.product-img').src;

  addProductToCart(title, price, imgSrc);
  updateTotal();
}

function addProductToCart(title, price, imgSrc) {
  const cartItems = document.querySelector('.cart-content');
  const existingTitles = cartItems.querySelectorAll('.cart-product-title');

  for (let item of existingTitles) {
    if (item.innerText === title) {
      alert('You have already added this item to the cart');
      return;
    }
  }

  const cartBox = document.createElement('div');
  cartBox.className = 'cart-box';
  cartBox.innerHTML = `
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
      <div class="cart-product-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>`;

  cartItems.appendChild(cartBox);

  cartBox.querySelector('.cart-remove').addEventListener('click', removeCartItem);
  cartBox.querySelector('.cart-quantity').addEventListener('change', quantityChanged);
}
