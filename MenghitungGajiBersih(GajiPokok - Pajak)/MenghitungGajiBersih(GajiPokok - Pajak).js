function hitung() {
  const gaji = parseFloat(document.getElementById('gaji').value);
  const pajak = parseFloat(document.getElementById('pajak').value);
  const gajiBersih = gaji - (gaji * pajak / 100);
  document.getElementById('output').innerText = `Gaji Bersih: Rp ${gajiBersih.toFixed(2)}`;
}
