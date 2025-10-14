# Workshop (60–90 min)

## Del 1 – Tre sätt att skriva funktioner
1. Skriv samma funktion `hello(name)` på tre sätt: **declaration**, **expression**, **arrow**.
2. Testa att kalla dem innan och efter att de är definierade. Vad händer? (Hoisting!)

## Del 2 – Händelser och DOM
1. Skapa en knapp som när du klickar kör funktionen `sayHi()` som skriver text i ett `<p>`.
2. Gör en input‑ruta. Skriv en funktion `mirror()` som kopierar texten från input till en `<span>` varje gång du skriver (`input`‑event).

## Del 3 – Arrayer och funktioner
1. Skapa en array `pets = ["hund", "katt", "hamster"]`.
2. Skriv en funktion `render(list)` som skriver ut listan i en `<ul>`.
3. Skriv en funktion `toUpperList(list)` som returnerar en ny lista med versaler (använd `map`).

## Del 4 – Små problem
1. Skriv `add(a, b)`, `subtract(a, b)`, `calculate(a, b, op)` där `op` är en callback (t.ex. `add`).
2. Skriv `isEven(n)` och använd den i en funktion `onlyEven(list)` som filtrerar med `filter`.

## Bonus
- Skapa en funktion `createCounter()` som returnerar en **annan funktion** som räknar upp (closure). Koppla den till en knapp.
