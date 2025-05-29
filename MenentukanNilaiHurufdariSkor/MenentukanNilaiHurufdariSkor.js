function konversi() {
  const nilai = parseFloat(document.getElementById('nilai').value);
  let huruf;
  if (nilai >= 90) huruf = "A";
  else if (nilai >= 80) huruf = "B";
  else if (nilai >= 70) huruf = "C";
  else if (nilai >= 60) huruf = "D";
  else huruf = "E";
  document.getElementById('output').innerText = `Nilai huruf: ${huruf}`;
}
