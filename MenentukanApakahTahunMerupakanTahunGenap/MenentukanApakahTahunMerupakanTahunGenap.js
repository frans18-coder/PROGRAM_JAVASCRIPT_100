function cekTahun() {
  let tahun = parseInt(document.getElementById('tahun').value);
  let hasil = (tahun % 2 === 0) ? "Tahun Genap" : "Tahun Ganjil";
  document.getElementById('output').innerText = `${tahun} adalah ${hasil}`;
}
