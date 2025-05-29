function hitungKeliling() {
  let r = parseFloat(document.getElementById('r').value);
  let keliling = 2 * Math.PI * r;
  document.getElementById('output').innerText = `Keliling: ${keliling.toFixed(2)}`;
}
