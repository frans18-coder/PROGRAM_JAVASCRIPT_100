function jumlahkan() {
    let a = parseFloat(document.getElementById("angka1").value);
    let b = parseFloat(document.getElementById("angka2").value);
    let hasil = a + b;
    document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
}
