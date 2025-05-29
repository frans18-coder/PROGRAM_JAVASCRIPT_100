function hitungSelisih() {
  const t1 = new Date(document.getElementById('tanggal1').value);
  const t2 = new Date(document.getElementById('tanggal2').value);
  const selisih = Math.abs((t2 - t1) / (1000 * 3600 * 24));
  document.getElementById('output').innerText = `Selisih hari: ${selisih} hari`;
}
