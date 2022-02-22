/*
* À l'aide de la méthode filter, récupérer les notes supérieures à 10
*/
let notes = [12, 6, 3, 4, 9, 15, 20];

function noteSuperieur10(note) {
    let isNoteSuperieurA10 =  (note > 10);
    return isNoteSuperieurA10;
}

let notesSup10 = notes.filter(noteSuperieur10);
console.log(notesSup10);
