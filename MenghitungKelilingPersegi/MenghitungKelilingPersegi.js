function keliling() {
  let sisi = parseFloat(document.getElementById("sisi").value);
  document.getElementById("hasil").innerText = `Keliling = ${4 * sisi}`;
}
