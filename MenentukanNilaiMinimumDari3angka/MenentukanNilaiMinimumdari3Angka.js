function min() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);
  let hasil = Math.min(a, b, c);
  document.getElementById("hasil").innerText = `Nilai minimum: ${hasil}`;
}
