function hitungRata() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  let c = parseFloat(document.getElementById('c').value);
  let rata = (a + b + c) / 3;
  document.getElementById('output').innerText = `Rata-rata: ${rata}`;
}
