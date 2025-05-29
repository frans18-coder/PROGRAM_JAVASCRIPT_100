function ulangTeks() {
  let teks = document.getElementById('teks').value;
  let n = parseInt(document.getElementById('jumlah').value);
  if (!teks || isNaN(n) || n <= 0) {
    document.getElementById('output').innerText = "Masukkan teks dan jumlah yang valid!";
    return;
  }
  let hasil = '';
  for (let i = 0; i < n; i++) {
    hasil += teks + "<br>";
  }
  document.getElementById('output').innerHTML = hasil;
}
