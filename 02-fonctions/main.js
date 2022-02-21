/**
 * Les fonctions déclarées
 * */ 

function hello() {
    console.log("Salut !");
}

hello();

/**
 * Les fonctions anonymes
 * */ 
let helloWorld = function () {
    console.log("Hello");
}
// $("button").click(function() {})


/**
 * Les fonctions fléchées
 * */
 let helloBis = () => {}
//  $("button").click(() => {})
 

function queDoisFaireDeCePrenom(uneFonction) {
    let prenom = "Rick";
    // afficherPrenom(prenom)
    uneFonction(prenom);
}

function afficherPrenom(prenom) {
    console.log("Prenom: ", prenom);
}

queDoisFaireDeCePrenom(afficherPrenom);

queDoisFaireDeCePrenom(function(prenom) {
    console.log("Prenom: ", prenom.toUpperCase());
});

queDoisFaireDeCePrenom((prenom) => { 
    console.log("Prenom", prenom); 
});

/**
 * Si on a qu'un seul paramètre, on peut supprimer les parenthèse
 * Si on a qu'une seul instruction, on peut supprimer les accolades
 */
queDoisFaireDeCePrenom(prenom => console.log("Prenom", prenom));