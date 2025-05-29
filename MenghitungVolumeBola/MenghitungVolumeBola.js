function hitung() {
  let r = parseFloat(document.getElementById('jari').value);
  let volume = (4/3) * Math.PI * Math.pow(r, 3);
  document.getElementById('output').innerText = `Volume bola: ${volume.toFixed(2)}`;
}
