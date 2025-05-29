function hitungTotal() {
  let harga = parseFloat(document.getElementById('harga').value);
  let diskon = parseFloat(document.getElementById('diskon').value);
  if (harga < 0 || diskon < 0 || diskon > 100) {
    document.getElementById('output').innerText = "Masukkan nilai yang valid!";
    return;
  }
  let total = harga - (harga * diskon / 100);
  document.getElementById('output').innerText = `Total harga setelah diskon: Rp${total.toFixed(2)}`;
}
