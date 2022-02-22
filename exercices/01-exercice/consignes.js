/**
 * Convertir des pouces en centimetres
 * Vous pouvez utiliser les arguments depuis le terminal ou avec prompt.
 * L'utilisateur saisit un nombre de pouces à convertir
 * 1" (1 pouce) = 2,54 centimètres  
 * 
 * https://www.pouce-cm.fr/
 */

let pouces = process.argv[2];
let resultat = pouces * 2.54;
console.log(`${pouces}" = ${resultat}cm`);