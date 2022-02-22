/*
* À l'aide de la méthode filter, récupérer les prenoms qui commencent par 'Ma'
*/
let prenoms = ["Marie", "Antoine", "Sarah", "Mandax"];

 
let prenomMa = prenoms.filter(function(prenom) {
    // let startWithMa = prenom.startsWith('Ma');
    // return startWithMa
    return prenom.startsWith('Ma'); // true ou false
});

console.log(prenomMa);