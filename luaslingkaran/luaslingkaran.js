function hitungLuas() {
    let r = parseFloat(document.getElementById("radius").value);
    let luas = Math.PI * r * r;
    document.getElementById("hasil").innerText = `Luas = ${luas.toFixed(2)} satuan²`;
}
