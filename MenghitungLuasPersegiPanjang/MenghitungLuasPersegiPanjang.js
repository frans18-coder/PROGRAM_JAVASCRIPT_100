function luasPP() {
  let p = parseFloat(document.getElementById("panjang").value);
  let l = parseFloat(document.getElementById("lebar").value);
  let luas = p * l;
  document.getElementById("hasil").innerText = `Luas = ${luas}`;
}
