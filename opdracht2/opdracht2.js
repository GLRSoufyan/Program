function genereerFelicitatie() {
    let getal = document.getElementById('getal').value;
    getal = parseInt(getal);

    if (isNaN(getal) || getal <= 0) {
        alert('Voer een geldig getal in!');
        return;
    }

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 1; i <= getal; i++) {
        let felicitatie = `Ik feliciteer je ${i} keer.`;
        outputDiv.innerHTML += felicitatie + '<br>';
    }
}
