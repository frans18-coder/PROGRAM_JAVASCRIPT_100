function cekGrade() {
  const nilai = parseFloat(document.getElementById('nilai').value);
  let grade = "E";
  if (nilai >= 85) grade = "A";
  else if (nilai >= 70) grade = "B";
  else if (nilai >= 55) grade = "C";
  else if (nilai >= 40) grade = "D";
  document.getElementById('output').innerText = `Nilai ${nilai} mendapat grade ${grade}`;
}
