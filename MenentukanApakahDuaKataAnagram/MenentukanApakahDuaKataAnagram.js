function cek() {
  const kata1 = document.getElementById('kata1').value.toLowerCase();
  const kata2 = document.getElementById('kata2').value.toLowerCase();

  const sort1 = kata1.split('').sort().join('');
  const sort2 = kata2.split('').sort().join('');

  const hasil = (sort1 === sort2) ? "Anagram" : "Bukan Anagram";
  document.getElementById('output').innerText = `Hasil: ${hasil}`;
}
