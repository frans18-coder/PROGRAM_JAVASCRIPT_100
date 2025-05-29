function cekKabisat() {
    let tahun = parseInt(document.getElementById("tahun").value);
    let hasil = (tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)) 
                ? "Tahun Kabisat" 
                : "Bukan Tahun Kabisat";
    document.getElementById("hasil").innerText = hasil;
}
