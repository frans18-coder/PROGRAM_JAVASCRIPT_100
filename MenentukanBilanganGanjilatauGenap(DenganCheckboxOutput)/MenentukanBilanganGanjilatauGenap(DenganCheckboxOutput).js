function cekGanjilGenap() {
  const angka = parseInt(document.getElementById('angka').value);
  document.getElementById('ganjil').checked = angka % 2 !== 0;
  document.getElementById('genap').checked = angka % 2 === 0;
}
