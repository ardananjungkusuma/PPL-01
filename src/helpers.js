function incrementQty(qty) {
  return (qty = parseInt(qty) + 1);
}

function decrementQty(qty) {
  if (parseInt(qty) <= 0) {
    return 0;
  } else {
    return (qty = parseInt(qty) - 1);
  }
}

function recalculate(price, qty, promo) {
  let totalHarga = price * qty;
  if (promo == "BELANJAASIX10") {
    return totalHarga - totalHarga * 0.1;
  } else if (promo == "ASIQUEDISKON50") {
    return totalHarga - totalHarga * 0.5;
  } else if (promo == "80NIHGAN") {
    return totalHarga - totalHarga * 0.8;
  } else {
    return totalHarga;
  }
}

module.exports = {
  incrementQty,
  decrementQty,
  recalculate,
};
