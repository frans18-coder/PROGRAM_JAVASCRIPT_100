function cek() {
  let huruf = document.getElementById('huruf').value.toLowerCase();
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let hasil = vokal.includes(huruf) ? "Vokal" : "Konsonan";
  document.getElementById('output').innerText = `${huruf.toUpperCase()} adalah huruf ${hasil}`;
}
