function akarKuadrat() {
  let n = parseFloat(document.getElementById('angka').value);
  if (isNaN(n) || n < 0) {
    document.getElementById('output').innerText = "Masukkan angka positif!";
    return;
  }
  let akar = Math.sqrt(n);
  document.getElementById('output').innerText = `Akar kuadrat dari ${n} adalah ${akar.toFixed(2)}`;
}
