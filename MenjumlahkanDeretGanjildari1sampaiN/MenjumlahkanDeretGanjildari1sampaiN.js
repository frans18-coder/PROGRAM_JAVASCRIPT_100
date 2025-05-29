function jumlahDeretGanjil() {
  let n = parseInt(document.getElementById('nilai').value);
  if (isNaN(n) || n < 1) {
    document.getElementById('output').innerText = "Masukkan nilai N yang valid!";
    return;
  }
  let total = 0;
  for (let i = 1; i <= n; i += 2) {
    total += i;
  }
  document.getElementById('output').innerText = `Jumlah bilangan ganjil dari 1 sampai ${n} = ${total}`;
}
