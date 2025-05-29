function hitungSelisih() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let hasil = Math.abs(a - b);
  document.getElementById('output').innerText = `Selisih: ${hasil}`;
}
