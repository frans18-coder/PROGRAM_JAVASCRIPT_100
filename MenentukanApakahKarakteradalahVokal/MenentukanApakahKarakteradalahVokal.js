function cekVokal() {
  let c = document.getElementById('char').value.toLowerCase();
  let vokal = ['a', 'i', 'u', 'e', 'o'];
  let hasil = vokal.includes(c) ? "Huruf vokal" : "Bukan huruf vokal";
  document.getElementById('output').innerText = hasil;
}
