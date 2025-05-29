function konversiByte() {
  let byte = parseFloat(document.getElementById('byte').value);
  let kb = byte / 1024;
  document.getElementById('output').innerText = `${kb.toFixed(2)} KB`;
}
