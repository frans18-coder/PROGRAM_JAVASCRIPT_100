function cekKuadran() {
  let x = parseFloat(document.getElementById('x').value);
  let y = parseFloat(document.getElementById('y').value);
  let kuadran = "";

  if (x > 0 && y > 0) kuadran = "Kuadran I";
  else if (x < 0 && y > 0) kuadran = "Kuadran II";
  else if (x < 0 && y < 0) kuadran = "Kuadran III";
  else if (x > 0 && y < 0) kuadran = "Kuadran IV";
  else if (x === 0 && y === 0) kuadran = "Titik pusat (0,0)";
  else if (x === 0) kuadran = "Garis Y";
  else if (y === 0) kuadran = "Garis X";

  document.getElementById('output').innerText = kuadran;
}
