function hitungDigit() {
  const angka = document.getElementById('angka').value;
  const jumlah = angka.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  document.getElementById('output').innerText = `Jumlah digit dari ${angka} adalah ${jumlah}`;
}
