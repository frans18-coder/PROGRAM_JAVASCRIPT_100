function luasSegitiga() {
  let a = parseFloat(document.getElementById("alas").value);
  let t = parseFloat(document.getElementById("tinggi").value);
  let luas = 0.5 * a * t;
  document.getElementById("hasil").innerText = `Luas = ${luas}`;
}
