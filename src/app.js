import { incrementQty, decrementQty, recalculate } from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const price = document.querySelector("#price");
const subtotal = document.querySelector("#subtotal");
const bayar = document.querySelector("#bayar");
const kodepromo = document.querySelector("#code");
const applyCodePromo = document.querySelector("#applypromo");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);

  subtotal.textContent = `Rp. ${recalculate(price.value, qtyInput.value)}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculate(price.value, qtyInput.value)}`;
});

applyCodePromo.addEventListener("click", () => {
  subtotal.textContent = `Rp. ${recalculate(
    price.value,
    qtyInput.value,
    kodepromo.value
  )}`;
});

bayar.addEventListener("click", () => {
  if (
    recalculate(price.value, qtyInput.value) == 0 ||
    recalculate(price.value, qtyInput.value) < 0
  ) {
    alert("Pesanan Anda Tidak Bisa Kosong!!");
  } else {
    alert(`Silahkan Bayar Sebanyak Rp. ${subtotal.textContent}`);
  }
});
