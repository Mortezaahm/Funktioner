/* Demo av funktioner  */
/* Funktionsdeklaration - klassikern (Vanligast förekommande) */
/* Vi behöver få in värden in i vår parameter från inputfältet för att sedan returnera ut det funktionen skapat */
function greet(name) {
    const trimmed = name.trim() // tar bort mellanslag runt
    let x = 0
    return trimmed
        ? `Hej, ${trimmed.toUpperCase()}!`
        : 'Du har ej skrivit ditt namn.'
    // alternativt: return `Hej, ${trimmed || 'Du har ej skrivit ditt namn.'}`;
}

// Istället för att skriva samma kod flera gånger gör vi en liten funktion som skriver ut text.
function setText(id, text) {
    document.getElementById(id).textContent = text
}

/* Arrow funktion ofta använd i modern javascript
Den tar emot ett pris och returnerar priset inkl moms*/

const calcVat = (price) => {
    const p = Number(price) || 0
    /* Beräkna moms genom att multiplicera priset med 0.25 */
    const vat = p * 0.25
    //Returnerar det totala priset
    return p + vat
}

/* Inhämtar våra element från webbsidan direkt när sidan laddats klart med hjälp av en inbyggd funktion som heter DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput')
    const greetBtn = document.getElementById('greetBtn')
    const greetOutput = document.getElementById('greetOutput')
    const countBtn = document.getElementById('countBtn')
    const vatBtn = document.getElementById('vatBtn')
    const priceInput = document.getElementById('priceInput')

    // Lyssna på klick
    greetBtn.addEventListener('click', () => {
        const message = greet(nameInput.value)
        setText('greetOutput', message) // skriv ut i <p id="greetOutput">
    })

    // Bonus: låt Enter i input också hälsa
    nameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            greetBtn.click()
        }
    })

    /* Klickräknare */
    /* Skapar en variabel som håller koll på hur många gånger jag har klickat */
    let clickCount = 0

    //När vi klickar på knappen så körs funktionen nedan
    countBtn.addEventListener('click', () => {
        //Ökar variabeln med 1 varje gång den klickas på
        clickCount = clickCount + 1
        //Skriv ut text med antalet klick
        setText('countOutput', `Du har klickat ${clickCount} gånger`)
    })

    //Momsräknare
    /* När användaren klickar på knappen så ska vår funktion beräkna momsen. Vi ska inhämta värdet från inputfältet */
    vatBtn.addEventListener('click', () => {
        //Hämtar värdet från input
        const price = priceInput.value
        //anropar vår arrow funktion som ligger högre upp som räknar ut momsen
        const total = calcVat(price)
        //Skriver ut priset på sidan, med hjälp av vår setText funktion
        setText('vatOutput', `Pris inkl moms är: ${total.toFixed(2)} kr`)
    })
})
