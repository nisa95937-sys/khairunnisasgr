function hitung(operator) {

    let bilangan1 = Number(document.getElementById("bilangan1").value);
    let bilangan2 = Number(document.getElementById("bilangan2").value);
    let hasil;

    if (operator == "+") {
        hasil = bilangan1 + bilangan2;
    } 
    else if (operator == "-") {
        hasil = bilangan1 - bilangan2;
    } 
    else if (operator == "*") {
        hasil = bilangan1 * bilangan2;
    } 
    else if (operator == "/") {
        if (bilangan2 == 0) {
            hasil = "Tidak bisa dibagi 0";
        } else {
            hasil = bilangan1 / bilangan2;
        }
    }

    document.getElementById("hasil").innerHTML = hasil;
}