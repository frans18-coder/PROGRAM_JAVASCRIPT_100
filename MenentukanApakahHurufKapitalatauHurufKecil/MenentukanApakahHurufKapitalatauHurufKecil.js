function cekHuruf() {
  let char = document.getElementById('huruf').value;
  if (!char.match(/[a-zA-Z]/)) {
    document.getElementById('output').innerText = "Masukkan huruf!";
    return;
  }
  let hasil = (char === char.toUpperCase()) ? "Huruf Kapital" : "Huruf Kecil";
  document.getElementById('output').innerText = hasil;
}
