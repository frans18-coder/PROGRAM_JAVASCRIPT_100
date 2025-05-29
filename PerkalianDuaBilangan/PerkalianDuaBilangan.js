function kali() {
  let a = parseFloat(document.getElementById('a').value);
  let b = parseFloat(document.getElementById('b').value);
  if (isNaN(a) || isNaN(b)) {
    document.getElementById('output').innerText = "Masukkan bilangan yang valid!";
    return;
  }
  document.getElementById('output').innerText = `Hasil: ${a * b}`;
}
