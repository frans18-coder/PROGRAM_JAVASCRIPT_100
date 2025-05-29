function hitungGaji() {
  let gaji = parseFloat(document.getElementById('gaji').value);
  let pajak = parseFloat(document.getElementById('pajak').value);
  let gajiBersih = gaji - (gaji * pajak / 100);
  document.getElementById('output').innerText = `Gaji Bersih: Rp${gajiBersih.toFixed(2)}`;
}
