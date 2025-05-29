function hitungBMI() {
  let berat = parseFloat(document.getElementById("berat").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
  let bmi = berat / (tinggi * tinggi);
  document.getElementById("hasil").innerText = `BMI Anda: ${bmi.toFixed(2)}`;
}
