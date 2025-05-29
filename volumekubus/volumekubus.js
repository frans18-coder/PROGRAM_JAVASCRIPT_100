function hitungVolume() {
    let sisi = parseFloat(document.getElementById("sisi").value);
    let volume = Math.pow(sisi, 3);
    document.getElementById("hasil").innerText = `Volume = ${volume} satuan³`;
}
