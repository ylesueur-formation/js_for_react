/*
* À l'aide de la méthode map, créer un nouveau tableaux qui contiendra des noms de domaines à partir 
* des prenoms.
* exemples: ['jean', 'neymar']  devient ['https://jean.com', 'https://neymar.com']
*
*/
let prenoms = ["Priam", "Hortense", "Rose", "Ingrid", "Bryan"];

function creerNomDomaine(prenom) {
    // console.log(prenom);
    let domain = 'https://' + prenom + ".com";
    // console.log(domain);
    return domain;
}
let nomDomaines = prenoms.map(creerNomDomaine);
console.log(nomDomaines);