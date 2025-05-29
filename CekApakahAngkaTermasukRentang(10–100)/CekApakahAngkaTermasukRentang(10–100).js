function cekRentang() {
  let n = parseInt(document.getElementById('angka').value);
  let hasil = (n >= 10 && n <= 100) ? "Dalam rentang 10–100" : "Di luar rentang";
  document.getElementById('output').innerText = hasil;
}
