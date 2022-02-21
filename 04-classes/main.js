/**
 * variable: une zone memoire dans laquelle on peut stocker des informations
 * fonction: une zone memoire dans laquelle on peut stocker un ensemble d'instructions
 * objet: une zone memoire dans laquelle on peut stocker des 
 *          variables(attributs) et des fonctions (methodes)
 * classe: un "moule" ou modèle qui nous permet de créer des objets.
 */

// objet litteral
let voiture = {
    couleur: "rouge"
};


class Personnage {
    // Fonction qui permet d'initialiser, de construire nos objets. le nom c onstructor obligatoire
    constructor(nom, niveau) {
        // let nom = "Jean";
        this.nom = nom;
        this.niveau = niveau;
    }

    combattre() {
        console.log("Aie !");
    }
    
    inspecter() {
        console.log(`${this.nom} ${this.niveau}`);
    }
}

// let p1 = Personnage.constructor()
let p1 = new Personnage("Jean" , 10);
console.log(p1);
p1.combattre();

let p2 = new Personnage("Marie", 17);
console.log(p2);
p1.combattre();

// let personnages = [p1, p2, p3];
// personnages.forEach(personnage => console.log(personnage.niveau));