const { incrementQty, decrementQty, recalculate } = require("../helpers");

test("Qty 1 increment 1 hasil 2", () => {
  expect(incrementQty(1)).toBe(2);
});

test("Qty 2 decrement 1 hasil 1", () => {
  expect(decrementQty(2)).toBe(1);
});

test("Qty 0 decrement -1 dan seterusnya hasil 0 karena negatif", () => {
  expect(decrementQty(-1)).toBe(0);
});

test("Jika Harga 20000 membeli 2 maka 40000", () => {
  expect(recalculate(20000, 2)).toBe(40000);
});

test("Jika Harga 50000 membeli 2 Apply Code BELANJAASIX10 jadi 90000", () => {
  expect(recalculate(50000, 2, "BELANJAASIX10")).toBe(90000);
});

test("Jika Harga 100000 membeli 3 Apply Code ASIQUEDISKON50 jadi 150000", () => {
  expect(recalculate(100000, 3, "ASIQUEDISKON50")).toBe(150000);
});

test("Jika Harga 100000 membeli 1 Apply Code 80NIHGAN jadi 20000", () => {
  expect(recalculate(100000, 1, "80NIHGAN")).toBe(20000);
});

test("Jika Harga 100000 membeli 3 Apply Code DISKONGAN50 tetap 300000 karna KODE PROMO Tidak Valid", () => {
  expect(recalculate(100000, 3, "DISKONGAN50")).toBe(300000);
});

test("Jika Harga 100000 membeli 3 Apply Code GEDEDISKON80 tetap 300000 karna KODE PROMO Tidak Valid", () => {
  expect(recalculate(100000, 3, "GEDEDISKON80")).toBe(300000);
});
