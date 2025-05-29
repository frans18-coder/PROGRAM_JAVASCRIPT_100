function konversi() {
    let c = parseFloat(document.getElementById("celsius").value);
    let f = (c * 9/5) + 32;
    document.getElementById("hasil").innerText = `${c}°C = ${f.toFixed(2)}°F`;
}
