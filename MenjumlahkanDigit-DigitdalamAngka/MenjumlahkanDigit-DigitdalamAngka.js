function jumlahDigit() {
  const angka = document.getElementById('angka').value;
  let total = 0;
  for (let digit of angka) {
    total += parseInt(digit);
  }
  document.getElementById('output').innerText = `Jumlah digit: ${total}`;
}
