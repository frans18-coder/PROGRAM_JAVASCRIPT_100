function faktorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * faktorial(n - 1);
}

function hitungFaktorial() {
  const angka = parseInt(document.getElementById('angka').value);
  const hasil = faktorial(angka);
  document.getElementById('output').innerText = `Faktorial dari ${angka} adalah ${hasil}`;
}
