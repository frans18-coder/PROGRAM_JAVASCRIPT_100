function hitung() {
  let angka = parseFloat(document.getElementById('angka').value);
  let hasil = angka ** 2;
  document.getElementById('output').innerText = `Pangkat dua dari ${angka} adalah ${hasil}`;
}
