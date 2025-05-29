function cekPositifNegatif() {
  let x = parseFloat(document.getElementById("angka").value);
  let hasil = x > 0 ? "Positif" : x < 0 ? "Negatif" : "Nol";
  document.getElementById("hasil").innerText = hasil;
}
