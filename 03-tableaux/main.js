// foreach, filter,  map

let prenoms = ["Lies", "Ethan", "Erfan", "Alexandre"];

console.log("Avec la boucle for");
for (let i = 0; i < prenoms.length; i++) {
    // console.log(prenoms[i]);
    afficherPrenom(prenoms[i]);
}

console.log("foreach fonction déclarée");
function afficherPrenom(prenom) {
    console.log(prenom);
}
prenoms.forEach(afficherPrenom);


console.log("foreach anonyme");
prenoms.forEach(function(prenom) {
    console.log(prenom);
});

console.log("foreach fléchée");
prenoms.forEach((prenom) => {
    console.log(prenom);
});    

prenoms.forEach(prenom => console.log(prenom));

/************************************************************ */

prenoms = ["Lies", "Ethan", "Erfan", "Alexandre"];

// console.log("Avec la boucle for");
// let prenomsFiltres = [];
// for (let i = 0; i < prenoms.length; i++) {
//     prenomLength = prenoms[i].length;   
//     if (prenomLength > 5) {
//         prenomsFiltres.push(prenoms[i]);
//     }    
// }
// console.log(prenomsFiltres);

// console.log("Avec la methode filter");
// function filterSupCinq(prenom) {
//     if (prenom.length > 5) {
//         return true;
//     } 
//     return false; 
//     // return (prenom.length > 5);
// }
// prenomsFiltres = prenoms.filter(filterSupCinq);
// console.log(prenomsFiltres);


// console.log("Avec la methode filter anonyme");
// prenomsFiltres = prenoms.filter(function (prenom) {
//     return (prenom.length > 5);
// });
// console.log(prenomsFiltres);


// console.log("Avec la methode filter fléchée");
// prenomsFiltres = prenoms.filter((prenom) => {
//     // return obligatoire
//     return (prenom.length > 5);
// });
// console.log(prenomsFiltres);

prenoms = ["Lies", "Ethan", "Erfan", "Alexandre"];
// Le return est implicite
prenomsFiltres = prenoms.filter(prenom => prenom.length > 5);
console.log(prenomsFiltres);


console.log("Map");
// <ul><ul>
prenoms = ["Lies", "Ethan", "Erfan", "Alexandre"];
let liHTMLElement = prenoms.map(function(prenom) {
    return `
        <li>${prenom}</li>
    `;
});

console.log(liHTMLElement);


/*************************************************************************** */
// class MyArray {
//     constructor(valeurs) {
//         this.tableau = valeurs
//     }

//     myForEach(uneFonction) {
//         for (let i = 0; i < this.tableau.length; i++) {
//             uneFonction(this.tableau[i]);
//         }
//     }

//     myFilter(uneFonction) {
//         let newTableau = [];
//         for (let i = 0; i <  this.tableau.length; i++) {
//             isOk = uneFonction(this.tableau[i]);
//             if (isOk === true) {
//                 newTableau.push(this.tableau[i]);
//             }
//         }
//         return newTableau
//     }
// }

// let nombres = [1, 3, 4, 5] // let nombre = new Array() <- meme chose
// nombres.forEach(function(nombre) {
//     console.log(nombre);
// });

// nombres = new MyArray([1, 3, 4, 5]);
// nombres.myForEach(function(nombre) {
//     console.log(nombre);
// });

