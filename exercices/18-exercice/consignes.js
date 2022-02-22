/*
* À l'aide de la méthode map, créer un nouveau tableau qui contiendra les notes sur 20
* exemples: [7, 9] devient [14, 18]
*
*/
let notesSur10 = [2, 7, 9, 10, 6.5, 8.5];

let notesSur20 = notesSur10.map( function(note) {
    // let resultat = note * 2;
    // return resultat;
    return note * 2;
})

console.log(notesSur20);