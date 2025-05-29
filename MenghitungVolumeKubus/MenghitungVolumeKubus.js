function hitungVolumeKubus() {
  let s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('output').innerText = "Masukkan nilai sisi yang valid!";
    return;
  }
  let volume = s ** 3;
  document.getElementById('output').innerText = `Volume kubus: ${volume}`;
}
