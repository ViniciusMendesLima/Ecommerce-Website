import { removeCartItem, quantityChanged, addCartClicked, buyButtonClicked } from './cartHandlers.js';

export function setupCartEvents() {
  const removeCartButtons = document.getElementsByClassName('cart-remove');
  for (let button of removeCartButtons) {
    button.addEventListener('click', removeCartItem);
  }

  const quantityInputs = document.getElementsByClassName('cart-quantity');
  for (let input of quantityInputs) {
    input.addEventListener('change', quantityChanged);
  }

  const addCart = document.getElementsByClassName('add-cart');
  for (let button of addCart) {
    button.addEventListener('click', addCartClicked);
  }

  document.querySelector('.btn-buy')?.addEventListener('click', buyButtonClicked);
}