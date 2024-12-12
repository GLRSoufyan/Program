document.getElementById('gooiButton').addEventListener('click', function() {
    const aantalWorpen = parseInt(document.getElementById('aantalWorpen').value);
    
    if (isNaN(aantalWorpen) || aantalWorpen <= 0) {
        alert("Voer een geldig aantal worpen in.");
        return;
    }
    
    // Teller voor elke dobbelsteenwaarde (1-6)
    let worpenTeller = [0, 0, 0, 0, 0, 0]; // Index 0 t/m 5, voor waardes 1 t/m 6
    
    // Simuleer het gooien van de dobbelsteen
    for (let i = 0; i < aantalWorpen; i++) {
        const worp = Math.floor(Math.random() * 6) + 1; // Worp tussen 1 en 6
        worpenTeller[worp - 1]++; // Verhoog de teller voor het gegooide getal
    }

    // Toon de grafiek
    toonGrafiek(worpenTeller);
});

function toonGrafiek(worpenTeller) {
    const ctx = document.getElementById('grafiek').getContext('2d');
    
    // Verberg de "resultaat"-div totdat de grafiek wordt getoond
    document.getElementById('resultaat').style.display = 'block';

    // Maak een nieuwe grafiek
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'], // De labels zijn de cijfers van de dobbelsteen
            datasets: [{
                label: 'Aantal keer gegooid',
                data: worpenTeller, // De telling van elke waarde (1-6)
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Balkkleur
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: Math.max(...worpenTeller) + 1 // Zorg ervoor dat de hoogste balk goed zichtbaar is
                }
            }
        }
    });
}
