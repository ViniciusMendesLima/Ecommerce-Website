export function setupCartToggle() {
  const cartIcon = document.querySelector('#cart-icon');
  const cart = document.querySelector('.cart');
  const closeCart = document.querySelector('#close-cart');

  cartIcon.onclick = () => cart.classList.add('active');
  closeCart.onclick = () => cart.classList.remove('active');
}
