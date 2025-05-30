export function updateTotal() {
  const cartBoxes = document.querySelectorAll('.cart-box');
  let total = 0;

  cartBoxes.forEach(box => {
    const price = parseFloat(box.querySelector('.cart-price').innerText.replace('$', ''));
    const quantity = box.querySelector('.cart-quantity').value;
    total += price * quantity;
  });

  total = Math.round(total * 100) / 100;
  document.querySelector('.total-price').innerText = `$${total}`;
}
