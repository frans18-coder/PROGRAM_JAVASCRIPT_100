function cari() {
  const input = document.getElementById('angkaArray').value;
  const arr = input.split(',').map(Number);
  const terbesar = Math.max(...arr);
  document.getElementById('output').innerText = `Nilai terbesar: ${terbesar}`;
}
