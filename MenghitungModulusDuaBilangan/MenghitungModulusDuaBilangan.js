function hitungModulus() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  if (b === 0) {
    document.getElementById('output').innerText = "Pembagi tidak boleh nol!";
    return;
  }
  document.getElementById('output').innerText = `Sisa: ${a % b}`;
}
