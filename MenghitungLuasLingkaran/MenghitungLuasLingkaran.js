function hitungLuas() {
  const jari = parseFloat(document.getElementById('jari').value);
  const luas = Math.PI * Math.pow(jari, 2);
  document.getElementById('output').innerText = `Luas lingkaran dengan jari-jari ${jari} adalah ${luas.toFixed(2)}`;
}
