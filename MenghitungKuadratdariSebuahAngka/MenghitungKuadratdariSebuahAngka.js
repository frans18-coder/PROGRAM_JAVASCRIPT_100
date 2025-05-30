function kuadrat() {
  let angka = parseFloat(document.getElementById('angka').value);
  document.getElementById('output').innerText = `Kuadrat: ${angka ** 2}`;
}
