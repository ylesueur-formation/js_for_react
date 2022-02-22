/*
* À l'aide de la méthode map, créer un nouveau tableau qui contiendra les prenoms dans des balises <li> sous forme de chaines de caractères
* exemples: ['Mohamed', 'Erika'] devient ['<li>Mohamed</li>', '<li>Erika</li>']
*
*/
let prenoms = ['Mohamed', 'Erika', 'Madi', 'Astou'];

let liHTMLElements = prenoms.map( (prenom) => {
    let liElement = `<li>${prenom}</li>`;
    return liElement;
});

console.log(liHTMLElements);