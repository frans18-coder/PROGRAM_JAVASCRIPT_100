function cekAngka() {
  const kata = document.getElementById('kata').value;
  const mengandungAngka = /\d/.test(kata);
  document.getElementById('output').innerText = mengandungAngka ? 
    "Kata mengandung angka." : "Kata tidak mengandung angka.";
}
