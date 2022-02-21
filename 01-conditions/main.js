// Les conditions ternaires

let nombre = 3;

if (nombre < 5) {
    console.log("Bonjour");
} else {
    console.log("Hi");
}

// Est-ce que nombre est strictement inferieur à 5 ? Si oui ... : Si non ..
(nombre < 5) ? console.log("Bonjour") : console.log("Hi");

/* L'affectation ternaire */

let message = "";
if (nombre < 4) {
    message = "Salut !";
} else {
    message = "Hola";
}

message = (nombre < 4) ? "Ciao" : "Welcome";

// message = (nombre < 4) ? "a" : (nombre < 3) ? 'b' : 'c';
console.log((nombre < 4) ? "Salut" : "Hola");