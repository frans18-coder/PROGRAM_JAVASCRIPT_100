function ubahKecil() {
  const teks = document.getElementById('teks').value;
  const hasil = teks.toLowerCase();
  document.getElementById('output').innerText = `Hasil: ${hasil}`;
}
